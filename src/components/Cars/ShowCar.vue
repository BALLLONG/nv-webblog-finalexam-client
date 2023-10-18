<template>
  <div>
    <h1>Show Car</h1>
    <div>id: {{ car.id }}</div>
      <div>category: {{ car.category }}</div>
      <div>engine_capacity: {{ car.engine_capacity }}</div>
      <div>brand: {{ car.brand }}</div>
      <div>color: {{ car.color }}</div>
      <div>lc_plate: {{ car.lc_plate }}</div>
      <div>chasis_no: {{ car.chasis_no }}</div>
  </div>
</template>
<script>
import UserService from "@/services/UserService";

export default {
  data() {
    return {
      car: null
    };
  },
  async created() {
    let carId = this.$route.params.carId;
    this.car = (await UserService.show(carId)).data
    console.log(this.carId)
  }
};
</script>
<style scoped></style>
