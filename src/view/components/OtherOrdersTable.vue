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
                Order Id
              </th>
              <th class="p-0 h5" style="min-width: 200px; text-align: center">
                Total quantity
              </th>
              <th class="p-0 h5" style="min-width: 200px; text-align: center">
                Total price
              </th>
              <th class="p-0 h5" style="min-width: 200px; text-align: center">
                Shipping charges
              </th>
              <th class="p-0 h5" style="min-width: 200px; text-align: center">
                Payment type
              </th>
              <th class="p-0 h5" style="min-width: 180px; text-align: center">
                Shipping status
              </th>
              <th class="p-0 h5" style="min-width: 200px; text-align: center">
                Shipping details
              </th>
              <th class="p-0 h5" style="min-width: 200px; text-align: center">
                Products details
              </th>
            </tr>
          </thead>
          <br><br>
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
                    {{ item._id }}
                  </span>
                </td>
                <td class="pl-0 text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    {{ item.total_quantity }}
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
                    ₹{{ item.shipping_charges }}
                  </span>
                </td>
                <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    {{ item.payment_type }}
                  </span>
                </td>
                <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    Pending
                  </span>
                </td>
                <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    <div
                      class="btn btn-primary"
                      @click="openShippingDetails(item)"
                    >
                      Open
                    </div>
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
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <div v-else class="my-5 text-center">No orders</div>

      <!--end::Table-->
    </div>
    <!--end::Body-->
    <!--end::Advance Table Widget 2-->

    <!-- shipping modal::begin -->
    <b-modal
      id="shipping-modal"
      centered
      hide-footer
      size="lg"
      title="Shipping Details"
    >
      <div>
        <!--begin::Group-->
        <div class="form-group row fv-plugins-icon-container">
          <label class="col-xl-3 col-lg-3 col-form-label">Company Name</label>
          <div class="col-lg-9 col-xl-9">
            <input
              class="form-control form-control-solid form-control-lg"
              name="Fullname"
              type="text"
              placeholder="Fullname"
              v-model="shippingDetails.fullname"
              disabled
            />
          </div>
        </div>
        <!--end::Group-->
        <!--begin::Group-->
        <div class="form-group row fv-plugins-icon-container">
          <label class="col-xl-3 col-lg-3 col-form-label">Address 1</label>
          <div class="col-lg-9 col-xl-9">
            <div class="input-group input-group-solid input-group-lg">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="la la-phone"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                name="address1"
                placeholder="address1"
                v-model="shippingDetails.address1"
                disabled
              />
            </div>
          </div>
        </div>
        <!--end::Group-->
        <!--begin::Group-->
        <div class="form-group row fv-plugins-icon-container">
          <label class="col-xl-3 col-lg-3 col-form-label">Address 2</label>
          <div class="col-lg-9 col-xl-9">
            <div class="input-group input-group-solid input-group-lg">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="la la-at"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                name="address2"
                placeholder="address2"
                v-model="shippingDetails.address2"
                disabled
              />
            </div>
          </div>
        </div>
        <!--end::Group-->
        <!--begin::Group-->
        <div class="form-group row fv-plugins-icon-container">
          <label class="col-xl-3 col-lg-3 col-form-label">Country</label>
          <div class="col-lg-9 col-xl-9">
            <div class="input-group input-group-solid input-group-lg">
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                name="country"
                placeholder="country"
                v-model="shippingDetails.country"
                disabled
              />
            </div>
          </div>
        </div>
        <!--end::Group-->
        <!--begin::Group-->
        <div class="form-group row fv-plugins-icon-container">
          <label class="col-xl-3 col-lg-3 col-form-label">Zip code</label>
          <div class="col-lg-9 col-xl-9">
            <div class="input-group input-group-solid input-group-lg">
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                name="zip_code"
                placeholder="zip_code"
                v-model="shippingDetails.zip_code"
                disabled
              />
            </div>
          </div>
        </div>
        <!--end::Group-->
        <!--begin::Group-->
        <div class="form-group row fv-plugins-icon-container">
          <label class="col-xl-3 col-lg-3 col-form-label">State</label>
          <div class="col-lg-9 col-xl-9">
            <div class="input-group input-group-solid input-group-lg">
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                name="state"
                placeholder="state"
                v-model="shippingDetails.state"
                disabled
              />
            </div>
          </div>
        </div>
        <!--end::Group-->
        <!--begin::Group-->
        <div class="form-group row fv-plugins-icon-container">
          <label class="col-xl-3 col-lg-3 col-form-label">Company</label>
          <div class="col-lg-9 col-xl-9">
            <div class="input-group input-group-solid input-group-lg">
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                name="company"
                placeholder="company"
                v-model="shippingDetails.company"
                disabled
              />
            </div>
          </div>
        </div>
        <!--end::Group-->
        <!--begin::Group-->
        <div class="form-group row fv-plugins-icon-container">
          <label class="col-xl-3 col-lg-3 col-form-label">Phone</label>
          <div class="col-lg-9 col-xl-9">
            <div class="input-group input-group-solid input-group-lg">
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                name="phone"
                placeholder="phone"
                v-model="shippingDetails.phone"
                disabled
              />
            </div>
          </div>
        </div>
        <!--end::Group-->
        <!--begin::Group-->
        <div class="form-group row fv-plugins-icon-container">
          <label class="col-xl-3 col-lg-3 col-form-label">City</label>
          <div class="col-lg-9 col-xl-9">
            <div class="input-group input-group-solid input-group-lg">
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                name="city"
                placeholder="city"
                v-model="shippingDetails.city"
                disabled
              />
            </div>
          </div>
        </div>
        <!--end::Group-->
      </div>
      <div class="w-100 mt-5 text-center">
        <div class="btn btn-primary" @click="$bvModal.hide('shipping-modal')">
          Close
        </div>
      </div>
    </b-modal>
    <!-- shipping modal::end -->

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
      shippingDetails: {},
      productDetails: [],
    };
  },
  created() {
    axios
      .get(`/orders/getOrders/${this.currentUser.id}`)
      .then(({ data }) => {
        // console.log(data);
        this.list = data.orders;
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
  },
};
</script>
