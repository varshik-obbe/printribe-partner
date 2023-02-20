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
              Recent five products
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
              <th class="p-0" style="width: 50px">Image</th>
              <th class="p-0" style="min-width: 200px">Name</th>
              <th class="p-0" style="min-width: 100px">Quantity</th>
              <th class="p-0" style="min-width: 110px">Price</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, i) in list">
              <tr v-bind:key="i">
                <td class="pl-0 py-4">
                  <div class="symbol symbol-50 symbol-light mr-1">
                    <span class="symbol-label">
                      <img
                        :src="item.product_img"
                        class="h-100 align-self-center"
                        alt=""
                      />
                    </span>
                  </div>
                </td>
                <td class="pl-0">
                  <a
                    href="#"
                    class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                  >
                    {{ item.title }}
                  </a>
                
                </td>
                <td class="text-left">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    {{ item.quantity }}
                  </span>
                </td>

                <td class="text-left">
                  <span class="label label-lg label-light-primary label-inline">
                    {{ item.price }}
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
  export default {
    name: "widget-2",
   
    data() {
      return {
        list: [],
        frontDesignImg:""
      };
    },
    created() {
      axios
        .get(`/customerInventory/getProducts/${this.currentUser.id}`)
        .then(({ data }) => {
          // console.log(data);
        
            this.list = data.products.filter((item,index)=>index<6);
  
          
        })
        .catch((resp) => {
          console.log(resp);
        });
    },
    methods: {
      showDesignImages(index) {
        this.$bvModal.show('designImg-modal')
        this.frontDesignImg = this.list[index].design_url
      },
    },
    computed: {
      ...mapGetters(["layoutConfig", "currentUser"]),
    },
  };
  </script>
  <style scoped>
  .designImg{
    height:250px;
    max-width:100%;
  }
  </style>
  