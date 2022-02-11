<template>
  <div class="container">
    <h2 class="mb-5">Orders</h2>
    <OrdersTable></OrdersTable>
  </div>
</template>

<script>
import OrdersTable from "@/view/components/OrdersTable.vue";
export default {
  components: {
    OrdersTable,
  },
};
</script>

<style>
</style>