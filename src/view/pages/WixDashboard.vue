<template>
  <div>
    <h3 class="ms-5 mt-4">INVENTORY PRODUCTS</h3>
    <hr class="my-2 mx-auto" style=":#999 " />

    <div
      class="col-12 col-md-6 col-lg-4 mx-auto py-2 ps-sm-5 ps-lg-6 order-2 order-md-1 my-4"
    >
      <div class="searchBox">
        <i class="fas fa-search searchIcon"></i>
        <input
          :value="searchItem"
          @change="(e) => (searchItem = e.target.value)"
          class="searchInput"
          placeholder="Search by title..."
          style="border: 0px solid black; width: 80%"
        />

        <span
          v-if="searchItem.length > 0"
          style="margin-left: 30px; cursor: pointer"
          @click="searchItem = ''"
        >
          <i class="fas fa-times text-muted" style="font-size: 12px"></i>
        </span>
      </div>
    </div>
    
    <div
      class="col-12 py-2 ps-sm-5 ps-lg-6 order-2 order-md-1 my-4"
      style="text-align: right"
    >
    <div class="design-card ">
      <P>STARTER PLAN</P>
      <h2>PAY PER LABEL</h2>
      <h5>✓ No Monthly Subscription Fees</h5>
      <h5>✓ Rs. 73.5 Per Label Fee</h5>
      <h5>✓ Email And Live Chat Support</h5>
    </div>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://printribe-2021.web.app/howitworks"
        >How it Works</a
      >
    </div>
    <WixInventory :list="list" />
    <!-- <WixInventory/> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ApiService from "@/core/services/api.service";
import WixInventory from "../components/WixInventory.vue";
export default {
  components: { WixInventory },
  data() {
    return {
      searchItem: "",
      list: [],
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  created() {
    ApiService.get(`/customerInventory/getProducts/${this.currentUser.id}`)
      .then(({ data }) => {
        // console.log(data);
        this.list = data.products;
      })
      .catch((resp) => {
        console.error(resp);
        Swal.fire({
          title: "Some error occurred while fetching details",
          text: "Try reloading the page",
          icon: "error",
        });
      });
  },
};
</script>

<style scoped>
.searchBox {
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  max-width: 360px;
  height: 45px;
  display: flex;
  align-items: center;
  position: relative;
}

.searchInput {
  /* font-family: "ProximaNW01-Reg"; */
  font-size: 16px;
  margin-left: 10px;
  height: 100%;
}

.searchInput:focus,
.searchInput:active {
  border: 0px solid black !important;
  outline: none !important;
}

.searchInput::placeholder {
  color: black;
}

.searchIcon {
  color: rgb(82, 82, 82);
  -webkit-text-stroke: 1px white;
  font-size: 16px;
}
.design-card {
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  width: 300px;
  text-align: left;
  padding: 1%;
  /* height:300px; */
}
</style>
