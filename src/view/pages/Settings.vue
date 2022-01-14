<template>
  <div class="card card-custom card-shadowless rounded-top-0">
    <!--begin::Body-->
    <div class="card-body p-0">
      <div class="row justify-content-center py-8 px-8 py-lg-15 px-lg-10">
        <div class="col-xl-12 col-xxl-10">
          <!--begin::Wizard Form-->
          <form
            class="form fv-plugins-bootstrap fv-plugins-framework"
            id="kt_form"
          >
            <div class="row justify-content-center">
              <div class="col-xl-9">
                <!--begin::Wizard Step 1-->
                <div
                  class="my-5 step"
                  data-wizard-type="step-content"
                  data-wizard-state="current"
                >
                  <h5 class="text-dark font-weight-bold mb-10">
                    Profile Details:
                  </h5>
                  <!--begin::Group-->

                  <!--end::Group-->
                  <!--begin::Group-->
                  <!-- <div class="form-group row fv-plugins-icon-container">
                    <label class="col-xl-3 col-lg-3 col-form-label"
                      >Name</label
                    >
                    <div class="col-lg-9 col-xl-9">
                      <input
                        class="form-control form-control-solid form-control-lg"
                        name="Name"
                        type="text"
                       
                      />
                      
                    </div>
                  </div> -->
                  <!--end::Group-->

                  <!--begin::Group-->
                  <div class="form-group row fv-plugins-icon-container">
                    <label class="col-xl-3 col-lg-3 col-form-label"
                      >User Name</label
                    >
                    <div class="col-lg-9 col-xl-9">
                      <input
                        class="form-control form-control-solid form-control-lg"
                        name="username"
                        type="text"
                        placeholder="Username"
                        v-model="form.username"
                        
                      />
                    </div>
                  </div>
                  <!--end::Group-->
                  <!--begin::Group-->
                  <div class="form-group row fv-plugins-icon-container">
                    <label class="col-xl-3 col-lg-3 col-form-label"
                      >Contact Phone</label
                    >
                    <div class="col-lg-9 col-xl-9">
                      <div class="input-group input-group-solid input-group-lg">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="la la-mobile"></i>
                          </span>
                        </div>
                        <input
                          type="tel"
                          class="
                            form-control form-control-solid form-control-lg
                          "
                          name="mobile"
                          placeholder="Phone"
                          v-model="form.mobile"
                          
                        />
                      </div>
                      <span class="form-text text-muted"
                        >Enter valid mobile number(e.g: 5678967456).</span
                      >
                    </div>
                  </div>
                  <!--end::Group-->
                  <!--begin::Group-->
                  <div class="form-group row fv-plugins-icon-container">
                    <label class="col-xl-3 col-lg-3 col-form-label"
                      >Email Address</label
                    >
                    <div class="col-lg-9 col-xl-9">
                      <div class="input-group input-group-solid input-group-lg">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="la la-at"></i>
                          </span>
                        </div>
                        <input
                          type="email"
                          class="
                            form-control form-control-solid form-control-lg
                          "
                          name="email"
                          placeholder="Email"
                          v-model="form.email"
                          
                        />
                      </div>
                    </div>
                  </div>
                  <!--end::Group-->
                  <!--begin::Group-->
                  <div class="form-group row fv-plugins-icon-container">
                    <label class="col-xl-3 col-lg-3 col-form-label"
                      >Website</label
                    >
                    <div class="col-lg-9 col-xl-9">
                      <div class="input-group input-group-solid input-group-lg">
                        <input
                          type="text"
                          class="
                            form-control form-control-solid form-control-lg
                          "
                          name="companyWebsite"
                          placeholder="Website"
                          v-model="form.website"
                          
                        />
                      </div>
                    </div>
                  </div>
                  <!--end::Group-->
                  <!--begin::Group-->
                  <div class="form-group row fv-plugins-icon-container">
                    <label class="col-xl-3 col-lg-3 col-form-label"
                      >Business Name</label
                    >
                    <div class="col-lg-9 col-xl-9">
                      <div class="input-group input-group-solid input-group-lg">
                        <input
                          type="text"
                          class="
                            form-control form-control-solid form-control-lg
                          "
                          name="Business name"
                          placeholder="Business name"
                          v-model="form.buisness_name"
                          
                        />
                      </div>
                    </div>
                  </div>
                  <!--end::Group-->
                  <!--begin::Group-->
                  <div class="form-group row fv-plugins-icon-container">
                    <label class="col-xl-3 col-lg-3 col-form-label"
                      >Brand Name</label
                    >
                    <div class="col-lg-9 col-xl-9">
                      <div class="input-group input-group-solid input-group-lg">
                        <input
                          type="text"
                          class="
                            form-control form-control-solid form-control-lg
                          "
                          name="Brand Name"
                          placeholder="Brand Name"
                          v-model="form.brand_name"
                          
                        />
                      </div>
                    </div>
                  </div>
                  <!--end::Group-->
                  <!--begin::Group-->
                  <div class="form-group row fv-plugins-icon-container">
                    <label class="col-xl-3 col-lg-3 col-form-label">GST</label>
                    <div class="col-lg-9 col-xl-9">
                      <div class="input-group input-group-solid input-group-lg">
                        <input
                          type="text"
                          class="
                            form-control form-control-solid form-control-lg
                          "
                          name="GST"
                          placeholder="GST"
                          v-model="form.gst"
                          
                        />
                      </div>
                    </div>
                  </div>
                  <!--end::Group-->
                  <!--begin::Group-->
                  <!-- <div class="form-group row fv-plugins-icon-container">
                    <label class="col-xl-3 col-lg-3 col-form-label">PAN</label>
                    <div class="col-lg-9 col-xl-9">
                      <div class="input-group input-group-solid input-group-lg">
                        <input
                          type="text"
                          class="
                            form-control form-control-solid form-control-lg
                          "
                          name="PAN"
                          placeholder="PAN"
                          v-model="form.pan"
                          
                        />
                      </div>
                    </div>
                  </div> -->
                  <!--end::Group-->
                  <!--begin::Group-->
                  <div class="form-group row fv-plugins-icon-container">
                    <label class="col-xl-3 col-lg-3 col-form-label"
                      >A/C Number</label
                    >
                    <div class="col-lg-9 col-xl-9">
                      <div class="input-group input-group-solid input-group-lg">
                        <input
                          type="text"
                          class="
                            form-control form-control-solid form-control-lg
                          "
                          name="A/C Number"
                          placeholder="A/C Number"
                          v-model="form.account_number"
                          
                        />
                      </div>
                    </div>
                  </div>
                  <!--end::Group-->
                  <!--begin::Group-->
                  <div class="form-group row fv-plugins-icon-container">
                    <label class="col-xl-3 col-lg-3 col-form-label">IFSC</label>
                    <div class="col-lg-9 col-xl-9">
                      <div class="input-group input-group-solid input-group-lg">
                        <input
                          type="text"
                          class="
                            form-control form-control-solid form-control-lg
                          "
                          name="IFSC"
                          placeholder="IFSC"
                          v-model="form.ifsc_code"
                          
                        />
                      </div>
                    </div>
                  </div>
                  <!--end::Group-->
                  <!--begin::Group-->
                  <div class="form-group row fv-plugins-icon-container">
                    <label class="col-xl-3 col-lg-3 col-form-label"
                      >Bank Name</label
                    >
                    <div class="col-lg-9 col-xl-9">
                      <div class="input-group input-group-solid input-group-lg">
                        <input
                          type="text"
                          class="
                            form-control form-control-solid form-control-lg
                          "
                          name="Bank Name"
                          placeholder="Bank Name"
                          v-model="form.bank_name"
                          
                        />
                      </div>
                    </div>
                  </div>
                  <!--end::Group-->
                </div>

                <div class="my-5 step" data-wizard-type="step-content">
                  <h5 class="mb-10 font-weight-bold text-dark">
                    Setup Your Address
                  </h5>
                  <!--begin::Group-->
                  <div class="form-group fv-plugins-icon-container">
                    <label>Address Line 1</label>
                    <input
                      type="text"
                      class="form-control form-control-solid form-control-lg"
                      name="address1"
                      placeholder="Address Line 1"
                      v-model="form.address1"
                      
                    />
                    <!-- <span class="form-text text-muted"
                      >Please enter your Address.</span
                    > -->
                  </div>
                  <!--end::Group-->
                  <!--begin::Group-->
                  <div class="form-group">
                    <label>Address Line 2</label>
                    <input
                      type="text"
                      class="form-control form-control-solid form-control-lg"
                      name="address2"
                      placeholder="Address Line 2"
                      v-model="form.address2"
                      
                    />
                    <!-- <span class="form-text text-muted"
                      >Please enter your Address.</span
                    > -->
                  </div>
                  <!--end::Group-->
                  <!--begin::Group-->
                  <div class="form-group">
                    <label>Address Line 3</label>
                    <input
                      type="text"
                      class="form-control form-control-solid form-control-lg"
                      name="address3"
                      placeholder="Address Line 3"
                      v-model="form.address3"
                      
                    />
                    <!-- <span class="form-text text-muted"
                      >Please enter your Address.</span
                    > -->
                  </div>
                  <!--end::Group-->

                  <!--begin::Row-->
                  <div class="row">
                    <div class="col-xl-6">
                      <!--begin::Group-->
                      <div class="form-group fv-plugins-icon-container">
                        <label>pincode</label>
                        <input
                          type="text"
                          class="
                            form-control form-control-solid form-control-lg
                          "
                          name="pincode"
                          placeholder="pincode"
                          v-model="form.pincode"
                          
                        />
                        <!-- <span class="form-text text-muted"
                          >Please enter your pincode.</span
                        > -->
                      </div>
                    </div>
                    <!--end::Group-->
                    <!--begin::Group-->
                    <div class="col-xl-6">
                      <div class="form-group fv-plugins-icon-container">
                        <label>City</label>
                        <input
                          type="text"
                          class="
                            form-control form-control-solid form-control-lg
                          "
                          name="city"
                          placeholder="City"
                          v-model="form.city"
                          
                        />
                        <!-- <span class="form-text text-muted"
                          >Please enter your City.</span
                        > -->
                      </div>
                    </div>
                    <!--end::Group-->
                  </div>
                  <!--end::Row-->
                  <!--begin::Row-->
                  <div class="row">
                    <div class="col-xl-6">
                      <!--begin::Group-->
                      <div class="form-group fv-plugins-icon-container">
                        <label>State</label>
                        <input
                          type="text"
                          class="
                            form-control form-control-solid form-control-lg
                          "
                          name="state"
                          placeholder="State"
                          v-model="form.state"
                          
                        />
                        <!-- <span class="form-text text-muted"
                          >Please enter your State.</span
                        > -->
                      </div>
                      <!--end::Group-->
                    </div>
                   <div class="col-xl-6">
                      <!--begin::Group-->
                      <div class="form-group fv-plugins-icon-container">
                        <label>Country</label>
                        <input
                          type="text"
                          class="
                            form-control form-control-solid form-control-lg
                          "
                          name="Country"
                          placeholder="Country"
                          value="India"
                        />
                        <span class="form-text text-muted"
                          >Please enter your Country.</span
                        >
                        <div class="fv-plugins-message-container"></div>
                      </div>
                      <!--end::Group-->
                    </div>
                  </div>
                </div>
<div
                  class="d-flex justify-content-center border-top pt-10 mt-15"
                >
                  <div>
                    <button
                      type="button"
                      class="btn btn-success font-weight-bolder px-9 py-4"
                      @click="submitForm"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <!--end::Wizard Actions-->
              </div>
            </div>
          </form>
          <!--end::Wizard Form-->
        </div>
      </div>
    </div>
    <!--end::Body-->
  </div>
</template>

<script>
import ApiService from "@/core/services/api.service";
import Swal from "sweetalert2";
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      form: {
       username: "",
        mobile: "",
        email: "",
        website: "",
        // buisness_type: "",
        buisness_name: "",
        brand_name: "",
        gst: "",
        // pan: "",
        account_number: "",
        ifsc_code: "",
        bank_name: "",
        address1: "",
        address2: "",
        address3: "",
        pincode: "",
        city: "",
        state: "",
        country: "India",
      },
      partnerId:""
    };
  },
  created() {
      console.log(this.currentUser);
    this.partnerId = this.currentUser.id;
    // console.log(this.partnerId);
    ApiService.get(`/customers/getCustomerbyid?id=${this.partnerId}`)
      .then(({ data }) => {
        // console.log(data.customerRecordData);
        this.form = data.customerRecordData;
      })
      .catch((resp) => {
        console.log(resp);
        Swal.fire({
          title: "Error!",
          text: "Some error occurred while fetching data. Please try again later.",
          icon: "error",
          confirmButtonText: "Close",
        });
      });
  },
  methods:{
    submitForm(){
      // console.log(this.form);
      ApiService.put(`/customers/updatecustomer?id=${this.partnerId}`,{data:this.form})
      .then(({ data }) => {
        // console.log(data);
        Swal.fire({
            title: "Partner Info Updated!",
            icon: "success",
            confirmButtonText: "Okay",
          }).then(()=>{
            this.$router.back();
          });
      })
      .catch((resp) => {
        console.log(resp);
        Swal.fire({
          title: "Error!",
          text: "Some error occurred while fetching data. Please try again later.",
          icon: "error",
          confirmButtonText: "Close",
        });
      });
    }
  },
  computed: {
    ...mapGetters(["currentUser"])
  }
};
</script>
