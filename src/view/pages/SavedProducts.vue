<template>
  <div class="container">
    <h2 class="mb-5">Products</h2>
    <SavedProductsTable></SavedProductsTable>
  </div>
</template>

<script>
import SavedProductsTable from "@/view/components/SavedProductsTable.vue";
export default {
  components: {
    SavedProductsTable,
  },
};
</script>

<style>
</style>