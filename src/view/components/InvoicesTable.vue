<template>
  <!--begin::Advance Table Widget 2-->
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Body-->
    <div class="card-body pt-3 pb-0">
      <!--begin::Table-->
      <!-- <div v-if="list.length > 0" class="table-responsive">
        <table class="table table-borderless table-vertical-center">
          <thead>
            <tr>
              <th class="p-0 h5" style="min-width: 100px; text-align: center">
                Customer name
              </th>

              <th class="p-0 h5" style="min-width: 200px; text-align: center">
                Total price
              </th>

              <th class="p-0 h5" style="min-width: 200px; text-align: center">
                Products details
              </th>
              <th
                class="p-0 h5"
                style="min-width: 150px; text-align: center"
              ></th>
            </tr>
          </thead>
          <br /><br />
          <tbody>
            <template v-for="(item, i) in list">
              <tr v-bind:key="i">
                <td class="pl-0 text-center">
                  <span
                    class="
                      font-weight-bolder
                      text-hover-primary
                      mb-1
                      font-size-lg
                    "
                    :style="{
                      color: item.customerShipping_id ? 'black' : 'red',
                    }"
                  >
                    {{
                      (item.customerShipping_id &&
                        item.customerShipping_id.fullname) ||
                      "N/A"
                    }}
                  </span>
                </td>

                <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    ₹{{ item.total_price }}
                  </span>
                </td>
                <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    <div
                      class="btn btn-primary"
                      @click="openProductsDetails(item)"
                    >
                      Open
                    </div>
                  </span>
                </td>
                <td class="text-center">
                  <a :href="item.pdf_link" target="_blank" download>
                    <span
                      class="
                        text-dark-75
                        font-weight-bolder
                        d-block
                        font-size-lg
                      "
                    >
                      <div class="btn btn-info">Download</div>
                    </span>
                  </a>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div> -->
      <b-table
        v-if="items.length > 0"
        striped
        :items="items"
        :fields="fields"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        sort-icon-left
        responsive="sm"
        class="text-center"
      >
        <template v-slot:cell(total_price)="{ item }">
          <span>₹{{ item.total_price }}</span>
        </template>
        <template v-slot:cell(product_details)="{ item }">
          <span
            ><div class="btn btn-primary" @click="openProductsDetails(item)">
              Open
            </div></span
          >
        </template>
        <template v-slot:cell(download)="{ item }">
          <a :href="item.pdf_link" target="_blank" download>
            <span class="text-dark-75 font-weight-bolder d-block font-size-lg">
              <div class="btn btn-info">Download</div>
            </span>
          </a>
        </template>
      </b-table>
      <!--end::Table-->
      <div v-else class="my-5 text-center">No orders</div>
    </div>
    <!--end::Body-->
    <!--end::Advance Table Widget 2-->

    <!-- Products details modal::begin -->
    <b-modal
      id="products-details-modal"
      centered
      hide-footer
      size="xl"
      title="Products Details"
    >
      <div>
        <div v-if="productDetails.length > 0" class="table-responsive">
          <table class="table table-borderless table-vertical-center">
            <thead>
              <tr>
                <th class="p-0 h5" style="min-width: 100px; text-align: center">
                  Title
                </th>
                <th class="p-0 h5" style="min-width: 200px; text-align: center">
                  Image
                </th>

                <th class="p-0 h5" style="min-width: 200px; text-align: center">
                  Description
                </th>
                <th class="p-0 h5" style="min-width: 200px; text-align: center">
                  Price
                </th>
                <th class="p-0 h5" style="min-width: 200px; text-align: center">
                  Product size
                </th>
                <th class="p-0 h5" style="min-width: 200px; text-align: center">
                  Product color
                </th>
                <th class="p-0 h5" style="min-width: 180px; text-align: center">
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(product, prodIndex) in productDetails">
                <tr v-bind:key="prodIndex">
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
                      {{ product.title }}
                    </span>
                  </td>
                  <td class="pl-0 text-center">
                    <img
                      :src="product.product_img"
                      alt=""
                      style="
                        height: 150px;
                        object-fit: contain;
                        max-width: 100%;
                      "
                    />
                  </td>
                  <td class="pl-0 text-center">
                    <span
                      class="
                        text-dark-75
                        font-weight-bolder
                        d-block
                        font-size-lg
                      "
                    >
                      {{ product.description }}
                    </span>
                  </td>
                  <td class="text-center">
                    <span
                      class="
                        text-dark-75
                        font-weight-bolder
                        d-block
                        font-size-lg
                      "
                    >
                      ₹{{ product.price }}
                    </span>
                  </td>

                  <td class="text-center">
                    <span
                      class="
                        text-dark-75
                        font-weight-bolder
                        d-block
                        font-size-lg
                      "
                    >
                      {{ product.productsize }}
                    </span>
                  </td>
                  <td class="text-center">
                    <span
                      class="
                        text-dark-75
                        font-weight-bolder
                        d-block
                        font-size-lg
                      "
                    >
                      {{ product.productcolor }}
                    </span>
                  </td>
                  <td class="text-center">
                    <span
                      class="
                        text-dark-75
                        font-weight-bolder
                        d-block
                        font-size-lg
                      "
                    >
                      {{ product.quantity }}
                    </span>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <div v-else class="my-5 text-center">No details available</div>
        <div class="w-100 mt-5 text-center">
          <div
            class="btn btn-primary"
            @click="$bvModal.hide('products-details-modal')"
          >
            Close
          </div>
        </div>
      </div>
    </b-modal>
    <!-- Products details modal::end -->
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
      productDetails: [],
      sortBy: "total_price",
      sortDesc: false,
      fields: [
        { key: "total_price", sortable: true },
        { key: "customer_name", sortable: true },
        { key: "product_details", sortable: false },
        { key: "download", sortable: false },
      ],
      items: [],
    };
  },
  created() {
    axios
      .get(`/orders/getCustomerOngoingOrders/${this.currentUser.id}`)
      .then(({ data }) => {
        this.list = data.orders;
        this.list.forEach((item) => {
          this.items.push({
            total_price: item.total_price,
            customer_name: item.customerShipping_id
              ? item.customerShipping_id.fullname
              : "N/A",
            product_info: item.product_info,
            pdf_link: item.pdf_link,
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
  methods: {
    openProductsDetails(item) {
      this.productDetails = item.product_info;
      this.$bvModal.show("products-details-modal");
    },
  },
};
</script>
