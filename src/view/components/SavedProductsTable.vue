



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
                    {{ item.name }}
                  </span>
                </td>
                <td class="pl-0 text-center">
                  <img
                    :src="item.img"
                    alt=""
                    style="height: 150px; object-fit: contain; max-width: 100%"
                  />
                </td>
                <td class="text-center">
                  <b-button variant="primary" @click="showDesignImages(i)"
                    >Open</b-button
                  >
                </td>
                <!-- <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    {{ item.description }}
                  </span>
                </td> -->

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
                    {{ item.size }}
                  </span>
                </td>
                <td class="text-center">
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                  >
                    {{ item.color }}
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
    <!-- order now modal -->
    <b-modal id="order-now" size="md" title="" hide-footer @close="hideModal">
      <div class="container mb-5">
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
            <!-- <p class="text-error">{{ gstErr }}</p> -->

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
export default {
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

      retail:0,
      visitorId:"",
      quantity: 1,
      totalBillingAmount: "",
      list: [],
      gst_details:[],
      frontDesignImg: "",
      design_gst:[],
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
      orderData:null,
      shippingData:null,
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
      .get(`/fabricDesigns/getSavedProductDesign/${this.currentUser.id}`)
      .then(({ data }) => {
        // console.log(data);

        this.list = data.designsSaved;
      })
      .catch((resp) => {
        console.log(resp);
      });

    axios.get("/customerShipping/getShipRocketCountries").then(({ data }) => {
      this.countries = data.data;
    });
  },
  methods: {
    // pay amount start
    payAmount ()  {
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
        this.country === null 
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

        // if (this.gst === "") {
        //   this.gstErr = "Gst field is required";
        // }
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
        this.country !== "" 
      ) {
      // get product data start
console.log(this.product,'product')
      const visitor_id = Math.floor(Math.random() * 90000) + 10000;
      this.visitorId=visitor_id

      const formData = {
        shipping_data: {
          customer_id: this.currentUser.id,
          visitor_id: visitor_id,
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

      // console.log(formData,"form")
      axios.post(`/customerShipping/addShipping`, formData).then(({ data }) => {
        const shippingdata = data;
        console.log(data.saveddata,"data.saveddata")
        this.shippingData= data.saveddata
        // this.product.product_id' product id
        // this.product.product_id = "61e7a8af6b91a9d48b531e9c";
        axios
          .get(
            "https://api.theprintribe.com/api/fabricDesigns/getSavedProductDesign/" +
              this.currentUser.id
          )
          .then(({ data }) => {
            const data_saved =  data.designsSaved.filter(item=>item._id==this.product._id) 
            console.log(data_saved[0],"data_saved[0]")

              this.orderData=data_saved[0]
       const design_gst=[
          {
            gst_percent: String(Number(data_saved[0].design_gst)/2),
            gst_amount: String(((Number(data_saved[0].design_gst)/2)*Number(data_saved[0].design_price))/100),
            gst_type: "cgst",
          },
          {
            gst_percent: String(Number(data_saved[0].design_gst)/2),
            gst_amount: String(((Number(data_saved[0].design_gst)/2)*Number(data_saved[0].design_price))/100),
            gst_type: "sgst",
          },
        ]
        this.design_gst=design_gst
        const gst_details=[
          {
            gst_percent: String(Number(data_saved[0].gst)/2),
            gst_amount: String((Number(data_saved[0].gst)/2 *
                    (Number(this.product.price) * Number(this.quantity) +
                      ((Number(data_saved[0].design_gst)/2)*Number(data_saved[0].design_price))/100 +
                      Number(data_saved[0].design_price))) /
                    100 ),
            gst_type: "cgst",
          },
          {
            gst_percent: String(Number(data_saved[0].gst)/2),
            gst_amount: String( (Number(data_saved[0].gst/2) *
                    (Number(this.product.price) * Number(this.quantity) +
                      ((Number(data_saved[0].design_gst)/2)*Number(data_saved[0].design_price))/100 +
                      Number(data_saved[0].design_price))) /
                    100 ),
            gst_type: "sgst",
          },
        ]
        this.gst_details=gst_details

            const design= String((Number(data_saved[0].design_gst)*Number(data_saved[0].design_price))/100)
            // const gst= data.designsSaved.gst_details.reduce((prev,next)=>Number(prev.gst_amount)+Number(next.gst_amount))
            const total =
                  (Number(data_saved[0].gst) *
                    (Number(this.product.price) * Number(this.quantity) +
                      Number(design) +
                      Number(data_saved[0].design_price))) /
                    100 +
                  Number(this.product.price) * Number(this.quantity) +
                  Number(data_saved[0].design_price) +
                  Number(this.retailPrice) +
                  Number(design);
                  console.log()
                              this.totalBillingAmount=total
            console.log(total, "====");
          });
      });

      // get product data end
      console.log(this.totalBillingAmount,"totalBillingAmount")
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
      }
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
      axios
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
      this.shippingType = null;
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

      
      this.fullNameErr= "";
      this.address1Err= "";
      this.phoneErr= "";
      this.cityErr= "";
      this.companyErr= null;
      this.stateErr= "";
      this.postalcodeErr= "";
      this.countryErr= "";
      // this.gstErr= "";
      this.shippingtypeErr= null;
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
    async AddOrder() {
      // const visitor_id = Math.floor(Math.random() * 90000) + 10000;
      var designId=""
     await axios.post('/fabricDesigns/addDesign' ,{
        "data": {
        "productId": this.product._id,
        "customerId": this.currentUser.id,
        "color": this.product.color,
        "side": this.product.side,
        "data": this.product.data,
        "url": '',
        "imgUrl": `https://api.theprintribe.com/${this.product.img}`,
        "imgsArr": this.product.imgsArr,
        "savedImgsInfo": this.product.savedImgsInfo,
        "textDesign": this.product.textDesign
    } 
      }, {
        "Content-Type": "application/json",
      }).then(({data})=>{
        console.log(data.data._id,"dataa",data.data)
        designId=data.data._id
      })
      console.log(designId,"designid")
        const ProductInfo={
            product_id: this.product._id,
            title: this.product.name,
            description: this.product.description,
            price: this.product.price,
            productsize: this.product.size,
            productcolor: this.product.color.color_name,
            product_img: `https://api.theprintribe.com/${this.product.img}`,
            category_id: this.product.category_id,
            quantity: String(this.product.quantity),
            designID: designId,
            zakeke_price: "0",
            retail_price:this.product.retail_price,
            handling_gst:this.product.handling_gst,
            design_gst:this.product.design_gst
        }
      const payData = {
        orderData: {
          customerShipping_id: this.shippingData._id,
          product_info: [ProductInfo],
          total_quantity: String(this.quantity),
          total_price: this.totalBillingAmount,
          shipping_charges: String(this.retailPrice),
          payment_type: "Wallet",
          retail_price:this.retail,
          design_gst: this.design_gst,
          gst_details:this.gst_details,
          payment_ref_id: "23451AAX",
          customer_email: this.currentUser.email,
          visitor_id: this.visitorId,
          courier_id: this.courierId,
          shipping_type: this.shippingType,
          customer_id: this.shippingData.customer_id,
          design_price: this.orderData.design_price,
        },
      };
      axios.post("https://api.theprintribe.com/api/orders/addOrder", payData, {
        "Content-Type": "application/json",
      }).then(()=>{
        Swal.fire(
                  "Order Accepted",
                  "Transaction complete!",
                  "success"
                ).then(()=>{
                  this.$bvModal.hide("order-now");
                })
      });
    },
    showDesignImages(index) {
      this.$bvModal.show("designImg-modal");
      this.frontDesignImg = this.list[index].design_url;
    },
    showOrderNow(item) {
      console.log(this.currentUser,"current")

      console.log(item,"items")
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
