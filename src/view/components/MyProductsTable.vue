<template>
  <!--begin::Advance Table Widget 2-->
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Body-->
    <div class="card-body pt-3 pb-0">
      <!--begin::Table-->
      <div class="table-responsive">
        <table class="table table-borderless table-vertical-center">
          <thead>
            <tr>
              <th class="p-0 h5" style="min-width: 100px; text-align:center">Name</th>
              <th class="p-0 h5" style="min-width: 200px; text-align:center">Image</th>
              <th class="p-0 h5" style="min-width: 200px; text-align:center">Description</th>
              <th class="p-0 h5" style="min-width: 100px; text-align:center">Price</th>
              <th class="p-0 h5" style="min-width: 110px; text-align:center">Size</th>
              <th class="p-0 h5" style="min-width: 150px; text-align:center">Color</th>
              <th class="p-0 h5" style="min-width: 150px; text-align:center">Quantity</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, i) in list">
              <tr v-bind:key="i">
                <td class="pl-0 text-center">
                  <span
                    class="
                      text-dark-75
                      font-weight-bolder
                      text-hover-primary
                      mb-1
                      font-size-lg
                    "
                  >
                    {{ item.title }}
                  </span>
                </td>
                <td class="pl-0 text-center">
                  <img :src="item.product_img" alt="" style="height:150px; object-fit:contain;max-width:100%;" />
                </td>
                <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    {{ item.description }}
                  </span>
                </td>

                <td class=" text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    {{ item.price }}
                  </span>
                </td>
                <td class=" text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    {{ item.productsize }}
                  </span>
                </td>
                <td class=" text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    {{ item.productcolor }}
                  </span>
                </td>
                <td class=" text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    {{ item.quantity }}
                  </span>
                </td>
                <!-- <td class="text-right pr-0">
                  <a href="#" class="btn btn-icon btn-light btn-sm mx-3">
                    <span class="svg-icon svg-icon-md svg-icon-primary">
                      <inline-svg
                        src="media/svg/icons/Communication/Write.svg"
                      ></inline-svg>
                    </span>
                  </a>
                  <a href="#" class="btn btn-icon btn-light btn-sm">
                    <span class="svg-icon svg-icon-md svg-icon-primary">
                      <inline-svg
                        src="media/svg/icons/General/Trash.svg"
                      ></inline-svg>
                    </span>
                  </a>
                </td> -->
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
    };
  },
  created() {
    axios
      .get(`/customerInventory/getProducts/${this.currentUser.id}`)
      // .get(`/customerInventory/getProducts/61e7a8af6b91a9d48b531e9c`)
      .then(({ data }) => {
        console.log(data);
        this.list = data.products;
      })
      .catch((resp) => {
        console.log(resp);
      });
  },
  computed: {
    ...mapGetters(["layoutConfig", "currentUser"]),
  },
};
</script>
