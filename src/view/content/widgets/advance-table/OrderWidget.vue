<template>
    <!--begin::Advance Table Widget 2-->
    <div class="card card-custom card-stretch gutter-b">
      <!--begin::Header-->
      <div class="card-header border-0 pt-5">
  
        <div class="card-toolbar">
          <ul class="nav nav-pills nav-pills-sm nav-dark-75">
            <li class="nav-item">
              <a
                class="nav-link py-2 px-4 active"
              >
                Recent five orders
              </a>
            </li>
            
          </ul>
        </div>
      </div>
      <!--end::Header-->
      <!--begin::Body-->
      <div class="card-body pt-3 pb-0">
        <!--begin::Table-->
        <div class="table-responsive">
          <table class="table table-borderless table-vertical-center">
            <thead>
              <tr>
                <th class="p-0" style="width: 200px">Order Id</th>
                <th class="p-0" style="min-width: 200px">Quantity</th>
                <th class="p-0" style="min-width: 100px">Price</th>
        
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, i) in list">
                <tr v-bind:key="i">
                
                  <td class="pl-0">
                    <a
                      href="#"
                      class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                    >
                      {{ item.shipment_ord_id }}
                    </a>
                  
                  </td>
                  <td class="text-left">
                    <span
                      class="text-dark-75 font-weight-bolder d-block font-size-lg"
                    >
                      {{ item.total_quantity }}
                    </span>
                  </td>
  
                  <td class="text-left">
                    <span class="label label-lg label-light-primary label-inline">
                      {{ item.total_price }}
                    </span>
                  </td>
                  
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!--end::Table-->
      </div>
      <!--end::Body-->
      <!--end::Advance Table Widget 2-->
    </div>
  </template>
  
  <script>
  import { mapGetters } from "vuex";
  import axios from "axios";
  import Swal from "sweetalert2";
  export default {
    name: "widget-2",
   
    data() {
      return {
        list: [],
        shippingDetails: {},
        productDetails: [],
        trackingDetails: {},
        trackURL: "",
        shipmentTrackActivities: [],
  
      };
    },
    created() {
      console.log(this.dashboard,"dashboard")
      axios
        .get(`/orders/getCustomerOngoingOrders/${this.currentUser.id}`)
        .then(({ data }) => {
          // console.log(data);
          
            this.list = data.orders.filter((item,index)=>index<6);
  
          
        })
        .catch((resp) => {
          console.log(resp);
        });
    },
    computed: {
      ...mapGetters(["currentUser"]),
    },
    methods: {
      openShippingDetails(item) {
        // console.log(item);
        this.shippingDetails = item.customerShipping_id;
        this.$bvModal.show("shipping-modal");
      },
      openProductsDetails(item) {
        // console.log(item);
        this.productDetails = item.product_info;
        this.$bvModal.show("products-details-modal");
      },
      trackShipment(awb_id) {
        axios
          .get(`/shiprocketGenrate/trackOrderShip/${awb_id}`)
          .then(({ data }) => {
            // console.log(data);
            this.trackingDetails =
              data.responseData.tracking_data.shipment_track[0];
  
            this.shipmentTrackActivities =
              data.responseData.tracking_data.shipment_track_activities;
  
            this.trackURL = data.responseData.tracking_data.track_url;
            this.$bvModal.show("tracking-details-modal");
          })
          .catch((resp) => {
            console.error(resp);
            Swal.fire({
              title: "Error!",
              text: "Tracking data has not been updated yet. Please try again later.",
              icon: "warning",
              confirmButtonText: "Close",
            });
          });
      },
    },
  };
  </script>
    <style scoped>
    .designImg{
      height:250px;
      max-width:100%;
    }
    </style>
    