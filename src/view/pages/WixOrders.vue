<template>
  <div class="container">
    <h2 class="mb-5">WIX Orders</h2>
    <WixOrdersTable></WixOrdersTable>
  </div>
</template>

<script>
import WixOrdersTable from "@/view/components/WixOrdersTable.vue";
export default {
  components: {
    WixOrdersTable,
  },
};
</script>

<style>
</style>