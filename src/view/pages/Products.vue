<template>
  <div class="container">
    <h2 class="mb-5">Products</h2>
    <MyProductsTable></MyProductsTable>
  </div>
</template>

<script>
import MyProductsTable from "@/view/components/MyProductsTable.vue";
export default {
  components: {
    MyProductsTable,
  },
};
</script>

<style>
</style>