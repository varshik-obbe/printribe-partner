<template>
  <!--begin::Advance Table Widget 2-->
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Body-->
    <div class="card-body pt-3 pb-0">
      <!--begin::Table-->
      <div v-if="list.length > 0" class="table-responsive">
        <table class="table table-borderless table-vertical-center">
          <thead>
            <tr>
              <th class="p-0 h5" style="min-width: 100px; text-align: center">
                Name
              </th>
              <th class="p-0 h5" style="min-width: 200px; text-align: center">
                Image
              </th>
              <th class="p-0 h5" style="min-width: 200px; text-align: center">
                Design
              </th>
              <th class="p-0 h5" style="min-width: 200px; text-align: center">
                Description
              </th>
              <th class="p-0 h5" style="min-width: 100px; text-align: center">
                Price
              </th>
              <th class="p-0 h5" style="min-width: 110px; text-align: center">
                Size
              </th>
              <th class="p-0 h5" style="min-width: 150px; text-align: center">
                Color
              </th>
              <th class="p-0 h5" style="min-width: 150px; text-align: center">
                Quantity
              </th>
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
                  <img
                    :src="item.product_img"
                    alt=""
                    style="height: 150px; object-fit: contain; max-width: 100%"
                  />
                </td>
                <td class="text-center">
                  <b-button variant="primary" @click="showDesignImages(i)"
                    >Open</b-button
                  >
                </td>
                <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    {{ item.description }}
                  </span>
                </td>

                <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    {{ item.price }}
                  </span>
                </td>
                <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    {{ item.productsize }}
                  </span>
                </td>
                <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    {{ item.productcolor }}
                  </span>
                </td>
                <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    {{ item.quantity }}
                  </span>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <div v-else class="my-5 text-center">No products</div>
      <!--end::Table-->
    </div>
    <!--end::Body-->
    <!-- begin::design Images modal -->
    <b-modal id="designImg-modal" size="md" title="Design Images" hide-footer>
      <div class="container mb-5 text-center">
        <div v-if="frontDesignImg==''">No Design Images Available</div>
        <img id="frontDesignImg" :src="frontDesignImg ? frontDesignImg : ''" alt="" class="designImg"/>
      </div>
      <div class="d-flex justify-content-center">
        <b-button variant="primary" @click="$bvModal.hide('designImg-modal')"
          >Close</b-button
        >
      </div>
    </b-modal>
    <!-- end::design Images modal -->
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
        this.list = data.products;
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
