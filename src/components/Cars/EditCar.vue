<template>
  <div>
    <h1>Edit User</h1>
    <form v-on:submit.prevent="editUser">
      <p>category: <input type="text" v-model="user.category" /></p>
      <p>engine_capacity: <input type="text" v-model="user.engine_capacity" /></p>
      <p>brand: <input type="text" v-model="user.brand" /></p>
      <p>color: <input type="text" v-model="user.color" /></p>
      <p>lc_plate: <input type="text" v-model="user.lc_plate" /></p>
      <p>chasis_no: <input type="text" v-model="user.chasis_no" /></p>
      <p><button type="submit">edit user</button></p>
    </form>
    <hr />
    <div>
      <p>category: {{ user.category }}</p>
      <p>engine_capacity: {{ user.engine_capacity }}</p>
      <p>brand: {{ user.brand }}</p>
      <p>color: {{ user.color }}</p>
      <p>lc_plate: {{ user.lc_plate }}</p>
      <p>chasis_no: {{ user.chasis_no }}</p>
      <p></p>
    </div>
  </div>
</template>
<script>
import UsersService from "@/services/UserService";
export default {
  data() {
    return {
      user: {
        name: "",
        lastname: "",
        email: "",
        password: "",
        status: "active"
      }
    };
  },
  methods: {
    async editUser() {
      try {
        await UsersService.put(this.user);
        this.$router.push({
          name: "users"
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    try {
      let userId = this.$route.params.userId;
      this.user = (await UsersService.show(userId)).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style scoped></style>
