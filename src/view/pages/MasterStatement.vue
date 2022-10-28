<template>
  <div class="container">
    <h2 class="mb-5">Invoices</h2>
    <MasterOrdersTable :list="orders"></MasterOrdersTable>
    <MasterWalletTable :list="wallet"></MasterWalletTable>
  </div>
</template>

<script>
import MasterOrdersTable from "@/view/components/MasterOrdersTable.vue";
import MasterWalletTable from "@/view/components/MasterWalletTable.vue";
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  components: {
    MasterOrdersTable,
    MasterWalletTable,
  },
  data() {
    return {
      orders: [],
      wallet:[]
    };
  },
  created() {
    axios
      .get(`/orders/getCustomerStatement/${this.currentUser.id}`)
      .then(({ data }) => {
        this.orders = data.statement.orders;
        this.wallet = data.statement.walletHistory;
      })
      .catch((resp) => {
        console.log(resp);
      });
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
};
</script>

<style>
</style>