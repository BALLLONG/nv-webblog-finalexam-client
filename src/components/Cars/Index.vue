<template>
  <div>
    <h1>Get All cars</h1>
    <div>Car Amount {{ cars.length }}</div>
    <div v-for="car in cars" v-bind:key="car.id">
      <div></div>
      <div>id: {{ car.id }}</div>
      <div>category: {{ car.category }}</div>
      <div>engine_capacity: {{ car.engine_capacity }}</div>
      <div>brand: {{ car.brand }}</div>
      <div>color: {{ car.color }}</div>
      <div>lc_plate: {{ car.lc_plate }}</div>
      <div>chasis_no: {{ car.chasis_no }}</div>
      <p>
        <button v-on:click="navigateTo('/car/' + car.id)">
          ดูข้อมูลรถ
        </button>
        <button v-on:click="navigateTo('/car/edit/' + car.id)">
          แก้ไขข้อมูล
        </button>
        <button v-on:click="deleteUser(car)">ลบข้อมูล</button>
      </p>
      <hr />
    </div>
  </div>
</template>
<script>
import UserServices from "@/services/UserService";
export default {
  data() {
    return {
      cars: []
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteUser(car) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await UserServices.delete(car);
          this.refreshData()
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.cars = (await UserServices.index()).data;
    }
  },
  async created() {
    this.cars = (await UserServices.index()).data;
  }
};
</script>
<style scoped></style>
