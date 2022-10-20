<template>
  <div class="container">
    <h2 class="mb-5">Invoices</h2>
    <InvoicesTable></InvoicesTable>
  </div>
</template>

<script>
import InvoicesTable from "@/view/components/InvoicesTable.vue";
export default {
  components: {
    InvoicesTable,
  },
};
</script>

<style>
</style>