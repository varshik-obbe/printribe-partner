<template>
  <div class="container">
    <h2 class="mb-5">Master Statement</h2>
    <MasterOrdersTable :orderItems="orderItems"></MasterOrdersTable>
    <MasterWalletTable :walletItems="walletItems"></MasterWalletTable>
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
      wallet: [],
      orderItems: [],
      walletItems: [],
    };
  },
  created() {
    axios
      .get(`/orders/getCustomerStatement/${this.currentUser.id}`)
      .then(({ data }) => {
        this.orders = data.statement.orders;
        this.orders.forEach((item) => {
          this.orderItems.push({
            order_id: item._id,
            customer_email: item.customer_email,
            total_price: item.total_price,
            shipping_charges: item.shipping_charges,
            date: item.createdAt,
          });
        });
        this.wallet = data.statement.walletHistory;
        this.wallet.forEach((item) => {
          this.walletItems.push({
            id: item._id,
            payment_order_id: item.payment_order_id,
            date: item.createdAt,
            amount: item.amount,
            payment_status: item.payment_status,
          });
        });
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