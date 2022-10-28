<template>
  <div class="container">
    <h2 class="mb-5">Invoices</h2>
    <RechargesTable></RechargesTable>
  </div>
</template>

<script>
import RechargesTable from "@/view/components/RechargesTable.vue";
export default {
  components: {
    RechargesTable,
  },
};
</script>

<style>
</style>