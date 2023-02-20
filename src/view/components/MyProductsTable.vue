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
              <!-- <th class="p-0 h5" style="min-width: 150px; text-align: center">
                Quantity
              </th> -->
              <th
                class="p-0 h5"
                style="min-width: 150px; text-align: center"
              ></th>
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
                <!-- <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    {{ item.quantity }}
                  </span>
                </td> -->
                <td class="text-center">
                  <b-button variant="primary" @click="showOrderNow(item)"
                    >Order now</b-button
                  >
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
    <!-- billing modal -->
    <b-modal
      id="billing-modal"
      size="md"
      title=""
      hide-footer
      @close="hideBillingModal"
    >
      <div class="container mb-5" v-if="orderData">
        <div>
          <ul>
            <li style="display: flex; justify-content: space-between" class="product-price-list">
              <span class="product-price-title">Product Price</span
              ><span class="product-price">{{ product.price }}</span>
            </li>
            <li class="design-price-list" style="display: flex; justify-content: space-between">
              <span class="design-price-title">Design Price</span
              ><span class="design-price">{{ orderData.design_price }}</span>
            </li>
            <li
            class="design-gst-price-list"
              v-for="item in orderData.design_gst"
              style="display: flex; justify-content: space-between"
            >
              <span class="design-gst-price-title">Desing {{item.gst_type.toUpperCase()}}({{ item.gst_percent }}%)</span
              ><span class="design-gst-price">{{ item.gst_amount }}</span>
            </li>
            <li class="shipping-price-list" style="display: flex; justify-content: space-between">
              <span class="shipping-price-title">Shipping Price</span
              ><span class="shipping-price">{{ shippingData.shipping_charges }}</span>
            </li>
            <li
            class="gst-price-list"
              v-for="item in orderData.gst_details"
              style="display: flex; justify-content: space-between"
            >
              <span class="gst-price-title"> {{item.gst_type.toUpperCase()}}({{ item.gst_percent }}%)</span
              ><span class="gst-price">{{ item.gst_amount }}</span>
            </li>
            <li class="total-price-list" style="display: flex; justify-content: space-between">
              <span class="total-price-title">Total</span
              ><span class="total-price">{{ totalBillingAmount.toFixed(2) }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <b-button variant="primary" @click="handleDetailsModal"
          >Submit</b-button
        >
      </div></b-modal
    >
    <!-- order now modal -->
    <b-modal id="order-now" size="md" title="" hide-footer @close="hideModal">
      <div class="container mb-5">
        <span>
          <input
            class="form-check-input"
            type="checkbox"
            id="checkboxNoLabel"
            :checked="savedShipAddress"
            @change="handleCheckbox"
          />
          <span>Use Your Saved Address</span></span
        >
        <div class="row">
          <div class="col-12 mb-5">
            <label for="quantity">Quantity</label>

            <b-form-input
              type="number"
              name="quantity"
              id="quantity"
              class="quantity"
              v-model="quantity"
              placeholder="Quantity"
            ></b-form-input>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-6">
            <label for="retail">Retail Price</label>
            <b-form-input
              type="text"
              name="retail"
              v-model="retail"
              id="retail"
              class="retail"
              placeholder="Retail Price"
            ></b-form-input>
            <!-- <p class="text-error">{{ fullNameErr }}</p> -->
          </div>
          <div class="col-6">
            <label for="quantity">Select shipping type</label>
            <select
              class="select"
              aria-label="Default select example"
              v-model="shippingType"
              required
            >
              <option value="null">select Shipping Type</option>
              <option value="domestic shipping">Domestic shipping</option>
              <option value="self">Self shipping</option>
              <option value="international">International shiping</option>
            </select>
            <p class="text-error">{{ shippingtypeErr }}</p>
          </div>
          <div class="col-6">
            <label for="quantity">Full Name</label>
            <b-form-input
              type="text"
              name="name"
              v-model="fullName"
              id="quantity"
              class="item"
              placeholder="Full Name"
            ></b-form-input>
            <p class="text-error">{{ fullNameErr }}</p>
          </div>
          <div class="col-6">
            <label for="state">State</label>
            <select
              class="select"
              aria-label="Default select example"
              v-model="state"
              required
            >
              <option :value="item.text" v-for="item in stateList">
                {{ item.text }}
              </option>
            </select>
            <p class="text-error">{{ stateErr }}</p>
          </div>
          <div class="col-6">
            <label for="address1">Address line 1</label>
            <b-form-input
              type="text"
              name="address1"
              v-model="address1"
              id="address1"
              class="item"
              placeholder="Address line 1"
            ></b-form-input>
            <p class="text-error">{{ address1Err }}</p>
          </div>
          <div class="col-6" v-if="!shippingDetails">
            <label for="company">Company</label>
            <b-form-input
              type="text"
              name="company"
              v-model="company"
              id="company"
              class="item"
              placeholder="Company"
            ></b-form-input>
            <p class="text-error">{{ companyErr }}</p>
          </div>
          <div class="col-6" v-else>
            <label for="company">Company</label>
            <select
              class="select"
              aria-label="Default select example"
              v-model="company"
              @change="selectCompany"
              required
            >
              <option value="null">select company</option>
              <option
                :value="company.courier_name"
                v-for="company in shippingCompanies"
              >
                {{ company.courier_name }}
              </option>
            </select>
            <p class="text-error">{{ companyErr }}</p>
          </div>
          <div class="col-6">
            <label for="address2">Address line 2</label>
            <b-form-input
              type="text"
              name="address2"
              v-model="address2"
              id="address2"
              class="item"
              placeholder="Address line 2"
            ></b-form-input>
          </div>
          <div class="col-6">
            <label for="phone">phone</label>
            <b-form-input
              type="text"
              name="phone"
              v-model="phone"
              id="phone"
              class="item"
              placeholder="Phone"
            ></b-form-input>
            <p class="text-error">{{ phoneErr }}</p>
          </div>
          <div class="col-6">
            <label for="country">Country</label>
            <select
              class="select"
              aria-label="Default select example"
              v-model="country"
              required
            >
              <option selected value="null">select country</option>
              <option :value="country.name" v-for="country in countries">
                {{ country.name }}
              </option>
            </select>
            <p class="text-error">{{ countryErr }}</p>
          </div>
          <div class="col-6">
            <label for="retailprice">Retail shipping price</label>
            <b-form-input
              type="text"
              name="retailprice"
              v-model="retailPrice"
              id="retailprice"
              class="retailprice"
              placeholder="Retail shipping price"
            ></b-form-input>
          </div>
          <div class="col-6">
            <label for="postalcode">Postal/Zip code</label>
            <b-form-input
              type="text"
              name="postalcode"
              id="postalcode"
              class="postalcode"
              v-model="postalcode"
              placeholder="Postal/Zip code"
            ></b-form-input>
            <p class="text-error">{{ postalcodeErr }}</p>
          </div>
          <div class="col-6">
            <label for="city">City</label>
            <b-form-input
              type="text"
              name="city"
              id="city"
              v-model="city"
              class="city"
              placeholder="City"
            ></b-form-input>
            <p class="text-error">{{ cityErr }}</p>
          </div>
          <div class="col-6">
            <label for="gst">GST</label>
            <b-form-input
              type="text"
              name="gst"
              id="gst"
              v-model="gst"
              class="gst"
              placeholder="GST"
            ></b-form-input>
            <p class="text-error">{{ gstErr }}</p>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <b-button variant="primary" @click="payAmount">Submit</b-button>
      </div>
    </b-modal>
    <!-- order now modal end -->
    <!-- begin::design Images modal -->
    <b-modal id="designImg-modal" size="md" title="Design Images" hide-footer>
      <div class="container mb-5 text-center">
        <div v-if="frontDesignImg == ''">No Design Images Available</div>
        <img
          id="frontDesignImg"
          :src="frontDesignImg ? frontDesignImg : ''"
          alt=""
          class="designImg"
        />
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
import Swal from "sweetalert2";
import Error from "../pages/error/Error.vue";

export default {
  components: { Error },
  name: "widget-2",

  data() {
    return {
      fullNameErr: "",
      address1Err: "",
      phoneErr: "",
      cityErr: "",
      companyErr: null,
      stateErr: "",
      postalcodeErr: "",
      countryErr: "",
      gstErr: "",
      shippingtypeErr: null,
      gst_details: [],
      retail: 0,
      quantity: 1,
      totalBillingAmount: "",
      list: [],
      frontDesignImg: "",
      selected: null,
      fullName: "",
      shippingType: null,
      state: "Select state",
      address1: "",
      address2: "",
      phone: "",
      country: null,
      retailPrice: "",
      shippingDetails: "",
      postalcode: "",
      city: "",
      shippingCompanies: "",
      gst: "",
      company: null,
      expectedDelivery: "",
      product: null,
      courierId: null,
      walletAmount: "",
      countries: [],
      orderData: null,
      shippingData: null,
      visitorId: "",
      savedShipAddress: false,
      savedShippingData: null,
      billingDetails: {},
      razorPayInitData: {},
      stateList: [
        {
          value: null,
          text: "Select state",
        },
        {
          value: "AN",
          text: "Andaman and Nicobar Islands",
        },
        {
          value: "AP",
          text: "Andhra Pradesh",
        },
        {
          value: "AR",
          text: "Arunachal Pradesh",
        },
        {
          value: "AS",
          text: "Assam",
        },
        {
          value: "BR",
          text: "Bihar",
        },
        {
          value: "CG",
          text: "Chandigarh",
        },
        {
          value: "CH",
          text: "Chhattisgarh",
        },
        {
          value: "DH",
          text: "Dadra and Nagar Haveli",
        },
        {
          value: "DD",
          text: "Daman and Diu",
        },
        {
          value: "DL",
          text: "Delhi",
        },
        {
          value: "GA",
          text: "Goa",
        },
        {
          value: "GJ",
          text: "Gujarat",
        },
        {
          value: "HR",
          text: "Haryana",
        },
        {
          value: "HP",
          text: "Himachal Pradesh",
        },
        {
          value: "JK",
          text: "Jammu and Kashmir",
        },
        {
          value: "JH",
          text: "Jharkhand",
        },
        {
          value: "KA",
          text: "Karnataka",
        },
        {
          value: "KL",
          text: "Kerala",
        },
        {
          value: "LD",
          text: "Lakshadweep",
        },
        {
          value: "MP",
          text: "Madhya Pradesh",
        },
        {
          value: "MH",
          text: "Maharashtra",
        },
        {
          value: "MN",
          text: "Manipur",
        },
        {
          value: "ML",
          text: "Meghalaya",
        },
        {
          value: "MZ",
          text: "Mizoram",
        },
        {
          value: "NL",
          text: "Nagaland",
        },
        {
          value: "OR",
          text: "Odisha",
        },
        {
          value: "PY",
          text: "Puducherry",
        },
        {
          value: "PB",
          text: "Punjab",
        },
        {
          value: "RJ",
          text: "Rajasthan",
        },
        {
          value: "SK",
          text: "Sikkim",
        },
        {
          value: "TN",
          text: "Tamil Nadu",
        },
        {
          value: "TS",
          text: "Telangana",
        },
        {
          value: "TR",
          text: "Tripura",
        },
        {
          value: "UK",
          text: "Uttar Pradesh",
        },
        {
          value: "UP",
          text: "Uttarakhand",
        },
        {
          value: "WB",
          text: "West Bengal",
        },
      ],
    };
  },
  watch: {
    savedShipAddress(newaddress, oldaddress) {
      if (newaddress) {
        console.log(this.savedShippingData, "savedShippingData");
        this.fullName = this.savedShippingData.fullname;
        this.state = this.savedShippingData.state;
        this.address1 = this.savedShippingData.address1;
        this.company = this.savedShippingData.company;
        this.address2 = this.savedShippingData.address2;
        this.phone = this.savedShippingData.phone;
        this.country = this.savedShippingData.country;
        this.retailPrice = this.savedShippingData.shipping_charges;
        this.postalcode = this.savedShippingData.zip_code;
        this.city = this.savedShippingData.city;
        this.fullNameErr = "";
        this.address1Err = "";
        this.cityErr = "";
        this.countryErr = "";
        this.stateErr = "";
        this.shippingtypeErr = "";
        this.postalcodeErr = "";
        this.companyErr = "";
        this.phoneErr = "";
      } else {
        this.visitorId = "";

        this.fullName = "";
        this.state = "";
        this.address1 = "";
        this.company = "";
        this.address2 = "";
        this.mobile = "";
        this.country = "";
        this.retailPrice = "";
        this.postalcode = "";
        this.city = "";
      }
    },
    shippingType(newshipping, oldshipping) {
      if (newshipping == "domestic shipping") {
        this.country = "India";
      }

      if (newshipping == "international") {
        this.country = null;
      }
    },
    // whenever question changes, this function will run
    postalcode(newPostal, oldPostal) {
      if (newPostal.toString().length > 1) {
        // console.log(newPostal.toString().length);
        // setShippingerror("Invalid Postal Code");

        if (newPostal.toString().length === 6) {
          axios
            .get(
              "https://api.theprintribe.com/api/customerShipping/getStatesAndCity/" +
                newPostal
            )
            .then((res) => {
              this.city = res?.data?.PostOffice[0]?.District;
              this.state = res?.data?.PostOffice[0]?.State;
              console.log(
                res?.data?.PostOffice[0]?.District,
                res?.data?.PostOffice[0]?.State
              );
            });
          axios
            .get(
              `/customerShipping/getShipRocketCharges/${newPostal}/${
                this.quantity * 0.3
              }`
            )
            .then(({ data }) => {
              if (data.status === 404) console.log(data.message);
              else {
                // setShippingerror("");
                this.shippingDetails = data.data;
                this.shippingCompanies = data.data.available_courier_companies;
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      } else if (newPostal.toString().length === 0) {
        console.log("shiiping error");
        // setShippingerror("");
        this.shippingDetails = "";
        this.shippingCompanies = "";
        this.company = "";
        this.retailPrice = 0;
      }
    },
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

    axios.get("/customerShipping/getShipRocketCountries").then(({ data }) => {
      this.countries = data.data;
    });
  },
  methods: {
    async handleCheckbox() {
      console.log("calll");
      this.visitorId = localStorage.getItem("visitorId");
      await axios
        .get("/customerShipping/getShippingById/" + this.visitorId)
        .then(({ data }) => {
          console.log(data, "data");
          this.shippingData = data.shipping_data;
          this.savedShippingData = data.shipping_data;
        });
      console.log("this.", this.savedShipAddress);
      this.savedShipAddress = !this.savedShipAddress;
    },
    // pay amount start
    payAmount() {
      if (
        this.fullName === "" ||
        this.fullName.length < 2 ||
        this.address1 === "" ||
        this.address1.length < 4 ||
        this.phone.toString().length < 10 ||
        this.city === "" ||
        this.company === "" ||
        this.state === "Select state" ||
        this.postalcode === "" ||
        this.country === null ||
        this.gst === ""
      ) {
        if (this.fullName === "" || this.fullName.length < 2) {
          this.fullNameErr = "Full name is required";
        }

        if (this.address1 === "" || this.address1.length < 4) {
          this.address1Err = "Address is not long enough";
        }

        if (this.city === "") {
          this.cityErr = "City field is required";
        }

        if (this.country === null) {
          this.countryErr = "Country field is required";
        }

        if (this.state === "Select state") {
          this.stateErr = "State field is required";
        }
        if (this.shippingType === null) {
          this.shippingtypeErr = "Please Select Shipping Type";
        }
        if (this.postalcode === "") {
          this.postalcodeErr = "Postal Code field is required";
        }

        if (this.company === "" || this.company == null) {
          this.companyErr = "Company field is required";
        }

        if (this.phone.toString().length < 8) {
          this.phoneErr = "Phone number invalid";
        }

        if (this.gst === "") {
          this.gstErr = "Gst field is required";
        }
      }

      // get product data start
      if (
        this.shippingType !== "" &&
        this.fullName !== "" &&
        this.state !== "" &&
        this.address1 !== "" &&
        this.phone.toString().length > 7 &&
        this.retailPrice !== "" &&
        this.postalcode !== 0 &&
        this.city !== "" &&
        this.company !== "" &&
        this.country !== "" &&
        this.gst !==""
      ) {
        if (!this.visitorId) {
          const visitor_id = Math.floor(Math.random() * 90000) + 10000;
          localStorage.setItem("visitorId", visitor_id);
          this.visitorId = visitor_id;
        }

        // this.visitorId=visitor_id
        const formData = {
          shipping_data: {
            customer_id: this.currentUser.id,
            visitor_id: this.visitorId,
            fullname: this.fullName,
            state: this.state,
            expectedDelivery: this.expectedDelivery,
            shipping_type: this.shippingType,
            address1: this.address1,
            company: this.company,
            address2: this.address2,
            phone: this.phone,
            country: this.country,
            shipping_charges: Number(this.retailPrice),
            zip_code: this.postalcode,
            city: this.city,
          },
        };
        console.log(this.visitorId, "form");
        if (!this.savedShipAddress) {
          axios
            .post(`/customerShipping/addShipping`, formData)
            .then(({ data }) => {
              const shippingdata = data;
              this.shippingData = data.saveddata;
              // this.product.product_id' product id
              this.product.product_id = "6368d923e52f2e6c4cde19f5";
              axios
                .get(
                  "https://api.theprintribe.com/api/orders/getProductOrder/" +
                    this.product.product_id
                )
                .then(({ data }) => {
                  console.log(data.orderData.filter, "orderData");
                  this.orderData = data.orderData;
                  const design = data.orderData.design_gst.reduce(
                    (prev, next) =>
                      Number(prev.gst_amount) + Number(next.gst_amount)
                  );
                  const gst = data.orderData.gst_details.reduce(
                    (prev, next) =>
                      Number(prev.gst_percent) + Number(next.gst_percent)
                  );
                  this.gst_details = data.orderData.gst_details.map((item) => {
                    return {
                      gst_amount: (item.gst_amount =
                        (Number(gst) *
                          (Number(this.product.price) * Number(this.quantity) +
                            Number(design) +
                            Number(data.orderData.design_price))) /
                        100),

                      gst_percent: item.gst_percent,
                      gst_type: item.gst_type,
                      _id: item._id,
                    };
                  });
                  const total =
                    (Number(gst) *
                      (Number(this.product.price) * Number(this.quantity) +
                        Number(design) +
                        Number(data.orderData.design_price))) /
                      100 +
                    Number(this.product.price) * Number(this.quantity) +
                    Number(data.orderData.design_price) +
                    Number(this.retailPrice) +
                    Number(design);
                  this.totalBillingAmount = total;
                  console.log(
                    total,
                    design,
                    gst,
                    this.product.price,
                    this.quantity,
                    "===="
                  );
                });
            });
        } else {
          this.product.product_id = "6368d923e52f2e6c4cde19f5";
          axios
            .get(
              "https://api.theprintribe.com/api/orders/getProductOrder/" +
                this.product.product_id
            )
            .then(({ data }) => {
              console.log(data.orderData.filter, "orderData");
              this.orderData = data.orderData;
              const design = data.orderData.design_gst.reduce(
                (prev, next) =>
                  Number(prev.gst_amount) + Number(next.gst_amount)
              );
              const gst = data.orderData.gst_details.reduce(
                (prev, next) =>
                  Number(prev.gst_percent) + Number(next.gst_percent)
              );
              this.gst_details = data.orderData.gst_details.map((item) => {
                return {
                  gst_amount: (item.gst_amount =
                    (Number(gst) *
                      (Number(this.product.price) * Number(this.quantity) +
                        Number(design) +
                        Number(data.orderData.design_price))) /
                    100),

                  gst_percent: item.gst_percent,
                  gst_type: item.gst_type,
                  _id: item._id,
                };
              });
              const total =
                (Number(gst) *
                  (Number(this.product.price) * Number(this.quantity) +
                    Number(design) +
                    Number(data.orderData.design_price))) /
                  100 +
                Number(this.product.price) * Number(this.quantity) +
                Number(data.orderData.design_price) +
                Number(this.retailPrice) +
                Number(design);
              this.totalBillingAmount = total;
              console.log(
                total,
                design,
                gst,
                this.product.price,
                this.quantity,
                "===="
              );
            });
        }
        this.$bvModal.show("billing-modal"); // get product data end
      }
    },
    hideBillingModal(){
      this.$bvModal.hide("billing-modal");
    },
    handleDetailsModal() {
      let self = this;
      axios
        .get(`/customerWallet/getWalletbyid/${self.currentUser.id}`)
        .then(({ data }) => {
          if (Number(data.wallet.amount) >= Number(self.totalBillingAmount)) {
            Swal.fire({
              title: "Pay from wallet",
              icon: "info",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Pay",
            }).then((result) => {
              if (result.isConfirmed) {
                self.deductAmount();
              }
            });
          } else {
            let remainingAmount =
              Number(self.totalBillingAmount) - Number(data.wallet.amount);
            self.walletAmount = remainingAmount;
            Swal.fire({
              title: "Add remaining amount to wallet and pay?",
              text: "Wallet amount insufficient",
              icon: "question",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Add amount and pay",
            }).then((result) => {
              if (result.isConfirmed) {
                self.addAmount();
              }
            });
          }
        });
    },
    deductAmount() {
      let self = this;
      // let postData = {
      //   approveData: {
      //     id: self.product.product_id,
      //     shipping_charges: self.shippingData.shipping_charges,
      //     partner_status: "approved",
      //     courier_id: self.courierId,
      //   },
      // };
      // .post(`/orders/setThirdPartyOrderStatus`, postData)
      // .then(({ data }) => {
      axios
        .post(`/customerWallet/debitWallet`, {
          customer_data: {
            customer_id: self.currentUser.id,
            amount: self.totalBillingAmount,
          },
        })
        .then(({ data }) => {
          this.AddOrder();
          // Swal.fire(
          //   "Order Accepted",
          //   "Transaction complete!",
          //   "success"
          // ).then(() => {
          //   window.location.reload();
          // });
        })
        .catch((resp) => {
          console.error(resp);
        });
      // })
      // .catch((resp) => {
      //   console.error(resp);
      //   Swal.fire({
      //     title: "Error!",
      //     text: "Couldn't reject the order. Please try again later.",
      //     icon: "warning",
      //     confirmButtonText: "Close",
      //   });
      // });
    },
    addAmount() {
      let amount = parseInt(this.walletAmount) * 100;

      let data = {
        insdata: {
          customer_id: this.currentUser.id,
          currency: "INR",
          amount: amount,
        },
      };
      axios
        .post(`/customerWallet/razorPayInstantiate`, data)
        .then(({ data }) => {
          // console.log(data);
          this.razorPayInitData = data.savedhistoryData;
          this.razorPayCheckout();
        })
        .catch((resp) => {
          console.log(resp);
          Swal.fire({
            title: "Error!",
            text: "Some error occurred while adding amount. Please try again.",
            icon: "error",
            confirmButtonText: "Close",
          });
        });
    },
    razorPayCheckout() {
      let self = this;
      let amount = parseInt(self.walletAmount) * 100;
      // console.log(amount);
      var options = {
        key: "rzp_test_aAHglk8OS8HPRk", // Enter the Key ID generated from the Dashboard
        amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: self.currentUser.email,
        // image: "https://example.com/your_logo",
        order_id: self.razorPayInitData.payment_order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function (response) {
          let addWalletData = {
            walletData: {
              customer_id: self.currentUser.id,
              currency: "INR",
              amount: self.walletAmount,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            },
          };
          axios
            .post("/customerWallet/addWalletAmount", addWalletData)
            .then(({ data }) => {
              self.walletAmount = "";
              self.deductAmount();
            })
            .catch((resp) => {
              Swal.fire({
                title: "Error!",
                text: "Error adding amount to wallet. Please contact support for help",
                icon: "error",
                confirmButtonText: "Close",
              }).then(() => {
                self.walletAmount = "";
              });
            });
        },
        theme: {
          color: "#3399cc",
        },
      };
      // console.log("razorpay", options);
      var rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        self.walletAmount = "";
        Swal.fire({
          title: "Error!",
          text: response.error.description,
          icon: "error",
          confirmButtonText: "Close",
        });
      });
      rzp1.open();
    },
    // pay amount end
    selectCompany() {
      console.log("call");
      this.shippingCompanies.find((curr) => {
        if (this.company === "clear") this.retailPrice("");
        else if (curr.courier_name === this.company) {
          this.expectedDelivery = curr.estimated_delivery_days;
          this.retailPrice = curr.rate;
          this.courierId = curr.courier_company_id;
        }
      });
    },
    hideModal() {
      this.$bvModal.hide("order-now");
      this.fullName = "";
      (this.savedShipAddress = false), (this.shippingType = null);
      this.state = "Select state";
      this.address1 = "";
      this.address2 = "";
      this.phone = "";
      this.country = null;
      this.retailPrice = "";
      this.shippingDetails = "";
      this.postalcode = "";
      this.city = "";
      this.shippingCompanies = "";
      this.gst = "";
      this.company = null;
      this.expectedDelivery = "";
    },
    // submitOrder() {
    //   const visitor_id = Math.floor(Math.random() * 90000) + 10000;
    //   const formData = {
    //     shipping_data: {
    //       customer_id: this.currentUser.id,
    //       visitor_id: visitor_id,
    //       fullname: this.fullName,
    //       state: this.state,
    //       expectedDelivery: this.expectedDelivery,
    //       shipping_type: this.shippingType,
    //       address1: this.address1,
    //       company: this.company,
    //       address2: this.address2,
    //       phone: this.phone,
    //       country: this.country,
    //       shipping_charges: Number(this.retailPrice),
    //       zip_code: this.postalcode,
    //       city: this.city,
    //     },
    //   };
    //   // console.log(formData,"form")
    //   axios.post(`/customerShipping/addShipping`, formData).then(({ data }) => {
    //     // console.log(data,"data",this.product)
    //     const shippingdata = data;
    //     // this.product.product_id' product id
    //     this.product.product_id = "6368d923e52f2e6c4cde19f5";
    //     axios
    //       .get(
    //         "https://api.theprintribe.com/api/orders/getProductOrder/" +
    //           "6368d923e52f2e6c4cde19f5"
    //       )
    //       .then(({ data }) => {
    //         console.log(data, this.product, shippingdata, "====");
    //       });

    //     // console.log(payData,"paydata")
    //     //       axios
    //     // .post("https://api.theprintribe.com/api/orders/addOrder", payData, {
    //     //   "Content-Type": "application/json",
    //     // })
    //   });
    //   // this.$bvModal.hide("order-now");
    // },
    AddOrder() {
      // const visitor_id = Math.floor(Math.random() * 90000) + 10000;

      const payData = {
        orderData: {
          customerShipping_id: this.shippingData._id,
          product_info: [this.product],
          total_quantity: String(this.quantity),
          total_price: this.totalBillingAmount,
          shipping_charges: String(this.retailPrice),
          payment_type: "Wallet",
          design_gst: this.orderData.design_gst,
          // design_gst:data.orderData.design_gst,
          retail_price: this.retail,
          payment_ref_id: "23451AAX",
          customer_email: this.orderData.customer_email,
          visitor_id: this.visitorId,
          courier_id: this.courierId,
          shipping_type: this.shippingType,
          customer_id: this.shippingData.customer_id,
          gst_details: this.gst_details,
          design_price: this.orderData.design_price,
        },
      };
      axios
        .post("https://api.theprintribe.com/api/orders/addOrder", payData, {
          "Content-Type": "application/json",
        })
        .then(() => {
          Swal.fire("Order Accepted", "Transaction complete!", "success").then(
            () => {
              this.$bvModal.hide("order-now");
              this.$bvModal.hide("billing-modal");
            }
          );
        });
    },
    showDesignImages(index) {
      this.$bvModal.show("designImg-modal");
      this.frontDesignImg = this.list[index].design_url;
    },
    showOrderNow(item) {
      this.product = item;
      this.$bvModal.show("order-now");
    },
  },
  computed: {
    ...mapGetters(["layoutConfig", "currentUser"]),
  },
};
</script>
<style scoped>
.product-price-title,.design-price-title, .shipping-price-title,.total-price-title{
font-size: 20;
font-weight: bold;
}
.product-price-list,.design-price-list,.shipping-price-list{
border-bottom: 1px solid gray;
}
.select {
  width: 100%;
  height: calc(1.5em + 1.3rem + 2px);
  padding: 0.65rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #3f4254;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid #e4e6ef;
  border-radius: 0.42rem;
}
.designImg {
  height: 250px;
  max-width: 100%;
}
.text-error {
  color: red;
  font-size: small;
}
</style>
