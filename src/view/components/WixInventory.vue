<template>
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Body-->
    <div class="card-body pt-3 pb-0">
      <!--begin::Table-->
      <div v-if="list.length > 0" class="table-responsive">
        <table class="table table-borderless table-vertical-center">
          <thead>
            <tr>
              <th class="p-0 h5" style="min-width: 100px; text-align: center">
                Image
              </th>
              <th class="p-0 h5" style="min-width: 200px; text-align: center">
                Title
              </th>
              <th class="p-0 h5" style="min-width: 200px; text-align: center">
                Color
              </th>
              <th class="p-0 h5" style="min-width: 200px; text-align: center">
                Size
              </th>
              <th class="p-0 h5" style="min-width: 200px; text-align: center">
                Price
              </th>
              <th
                class="p-0 h5"
                style="min-width: 180px; text-align: center"
              ></th>
            </tr>
          </thead>
          <br /><br />
          <tbody>
            <template v-for="(item, i) in list">
              <tr v-bind:key="i">
                <td class="pl-0 text-center">
                  <img
                    :src="item.product_img"
                    alt=""
                    style="height: 150px; object-fit: contain; max-width: 100%"
                  />
                </td>

                <td class="pl-0 text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    {{ item.title }}
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
                    {{ item.productsize }}
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
                    <div
                      v-if="item.wix_product_id && item.wix_product_id != ''"
                      class="btn btn-danger"
                      @click="removeProductFromWix(item.product_id)"
                    >
                      remove
                    </div>
                    <div
                      v-else
                      class="btn btn-primary"
                      @click="addProductToWix(item.product_id, i)"
                    >
                      Add
                    </div>
                  </span>
                </td>

                <!-- add product modal::begin -->
                <b-modal
                  :id="'add-product-modal-' + i"
                  centered
                  title="Adding Product To Wix Store"
                  hide-footer
                >
                  <div v-if="apiLevel > 0">
                    <b-alert
                      class="d-flex justify-content-between"
                      variant="primary"
                      :show="productUploadStatus === 'adding'"
                      >Adding Product
                      <i class="fas fa-spinner fa-pulse text-white"></i
                    ></b-alert>
                    <b-alert
                      class="d-flex justify-content-between"
                      variant="success"
                      :show="productUploadStatus === 'added'"
                      >Product Added<i
                        class="far fa-check-circle text-white"
                      ></i
                    ></b-alert>
                    <b-alert
                      class="d-flex justify-content-between"
                      variant="danger"
                      :show="productUploadStatus === 'failed'"
                      >Adding Product Failed<i
                        class="far fa-times-circle text-white"
                      ></i
                    ></b-alert>
                  </div>
                  <div v-if="apiLevel > 1">
                    <b-alert
                      class="d-flex justify-content-between"
                      variant="primary"
                      :show="imageUploadStatus === 'adding'"
                      >Adding Images
                      <i class="fas fa-spinner fa-pulse text-white"></i
                    ></b-alert>
                    <b-alert
                      class="d-flex justify-content-between"
                      variant="success"
                      :show="imageUploadStatus === 'added'"
                      >Images Added<i class="far fa-check-circle text-white"></i
                    ></b-alert>
                    <b-alert
                      class="d-flex justify-content-between"
                      variant="danger"
                      :show="imageUploadStatus === 'failed'"
                      >Adding Images Failed<i
                        class="far fa-times-circle text-white"
                      ></i
                    ></b-alert>
                  </div>
                  <div v-if="apiLevel > 2">
                    <b-alert
                      class="d-flex justify-content-between"
                      variant="primary"
                      :show="quantityUploadStatus === 'adding'"
                      >Adding Images
                      <i class="fas fa-spinner fa-pulse text-white"></i
                    ></b-alert>
                    <b-alert
                      class="d-flex justify-content-between"
                      variant="success"
                      :show="quantityUploadStatus === 'added'"
                      >Images Added<i class="far fa-check-circle text-white"></i
                    ></b-alert>
                    <b-alert
                      class="d-flex justify-content-between"
                      variant="danger"
                      :show="quantityUploadStatus === 'failed'"
                      >Adding Images Failed<i
                        class="far fa-times-circle text-white"
                      ></i
                    ></b-alert>
                  </div>
                  <div class="w-100 text-center">
                    <div
                      class="btn btn-primary"
                      @click="$bvModal.hide(`add-product-modal-${i}`)"
                    >
                      Close
                    </div>
                  </div>
                </b-modal>
                <!-- add product modal::end -->
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <div v-else class="my-5 h3 text-center">Wix not integrated</div>

      <!--end::Table-->
    </div>
    <!--end::Body-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ApiService from "@/core/services/api.service";
import Swal from "sweetalert2";
export default {
  props: ["list"],
  data() {
    return {
      apiLevel: 1,
      productUploadStatus: "adding",
      imageUploadStatus: "adding",
      quantityUploadStatus: "adding",
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    addProductToWix(prodId, index) {
      let self = this;
      self.apiLevel = 1;
      self.$bvModal.show(`add-product-modal-${index}`);

      //   add product API
      ApiService.post(`/wix/addProducts`, {
        productData: {
          product_id: prodId,
          customer_id: self.currentUser.id,
        },
      })
        .then(({ data }) => {
          self.apiLevel++;
          self.productUploadStatus = "added";
          let wixId = data.wix_product_id;
          //   Add images API
          ApiService.post(`/wix/addMedia`, {
            productData: {
              product_id: prodId,
              customer_id: self.currentUser.id,
              wix_product_id: wixId,
            },
          })
            .then((data2) => {
              self.apiLevel++;
              self.imageUploadStatus = "added";

              // Add quantities API
              ApiService.post(`/wix/uploadQuant`, {
                productData: {
                  product_id: prodId,
                  customer_id: self.currentUser.id,
                  wix_product_id: wixId,
                },
              })
                .then((data3) => {
                  self.apiLevel++;
                  self.quantityUploadStatus = "added";
                })
                .catch((resp) => {
                  console.error(resp);
                  self.apiLevel = 3;
                  self.quantityUploadStatus = "failed";
                });
            })
            .catch((resp) => {
              console.error(resp);
              self.apiLevel = 3;
              self.imageUploadStatus = "failed";
              self.quantityUploadStatus = "failed";
            });
        })
        .catch((resp) => {
          console.error(resp);
          self.apiLevel = 3;
          self.productUploadStatus = "failed";
          self.imageUploadStatus = "failed";
          self.quantityUploadStatus = "failed";
        });
    },
    removeProductFromWix(prodId) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          ApiService.post(`/wix/removeProduct`, {
            productData: {
              product_id: prodId,
              customer_id: self.currentUser.id,
            },
          })
            .then(({ data }) => {
              Swal.fire("Removed!", "Product has been deleted.", "success");
            })
            .catch((resp) => {
              console.error(resp);
              Swal.fire(
                "Error",
                "Unable to remove product. Please try again",
                "error"
              );
            });
        }
      });
    },
  },
};
</script>

<style scoped>
</style>