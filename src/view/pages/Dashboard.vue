<template>
  <div>
    <!--begin::Dashboard-->
    <div class="row">
    
      <div class="col-xxl-6 order-2 order-xxl-1">
        <ProductWidget></ProductWidget>

      </div>
      <div class="col-xxl-6 order-2 order-xxl-1" style="height: fit-content;">
        <OrderWidget></OrderWidget>
        
      </div>
  
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

import ProductWidget from "../content/widgets/advance-table/ProductWidget.vue";
import OrderWidget from "../content/widgets/advance-table/OrderWidget.vue";
export default {
  name: "dashboard",
  components: {
    ProductWidget,
 
    OrderWidget
},
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
  },
  methods: {
    setActiveTab1(event) {
      this.tabIndex = this.setActiveTab(event);
    },
    setActiveTab2(event) {
      this.tabIndex2 = this.setActiveTab(event);
    },
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab(event) {
      // get all tab links
      const tab = event.target.closest('[role="tablist"]');
      const links = tab.querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set current active tab
      event.target.classList.add("active");

      // set clicked tab index to bootstrap tab
      return parseInt(event.target.getAttribute("data-tab"));
    },
  },

};
</script>
