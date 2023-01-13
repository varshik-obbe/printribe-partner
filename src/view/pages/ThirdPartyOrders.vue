<template>
    <div class="container">
      <h2 class="mb-5">Third Party Orders</h2>
      <ThirdPartyOrdersTable></ThirdPartyOrdersTable>
    </div>
  </template>
  
  <script>
  import ThirdPartyOrdersTable from "../components/ThirdPartyOrdersTable.vue";
  export default {
    components: {
        ThirdPartyOrdersTable,
    },
  };
  </script>
  
  <style>
  </style>