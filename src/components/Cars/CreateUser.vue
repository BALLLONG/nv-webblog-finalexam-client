<template>
  <div>
    <h1>Create Users</h1>
    <form v-on:submit.prevent="createUser">
      <p>category: <input type="text" v-model="user.category" /></p>
      <p>engine_capacity: <input type="text" v-model="user.engine_capacity" /></p>
      <p>brand: <input type="text" v-model="user.brand" /></p>
      <p>color: <input type="text" v-model="user.color" /></p>
      <p>lc_plate: <input type="text" v-model="user.lc_plate" /></p>
      <p>chasis_no: <input type="text" v-model="user.chasis_no" /></p>
      <p><button type="submit">create car</button></p>
    </form>
    <hr />
    <div>
      <p>category: {{ user.category }}</p>
      <p>engine_capacity: {{ user.engine_capacity }}</p>
      <p>brand: {{ user.brand }}</p>
      <p>color: {{ user.color }}</p>
      <p>lc_plate: {{ user.lc_plate }}</p>
      <p>chasis_no: {{ user.chasis_no }}</p>
    </div>
  </div>
</template>
<script>
import UsersService from "@/services/UserService";

export default {
  data() {
    return {
      car: {
        category: "",
        engine_capacity: "",
        brand: "",
        color: "",
        lc_plate: "",
        chasis_no: ""
      }
    };
  },
  methods: {
    async createUser() {
      try {
        await UsersService.post(this.car);
        this.$router.push({
          name: "cars"
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style scoped></style>
