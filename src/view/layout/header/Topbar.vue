<template>
  <!-- begin:: Header Topbar -->
  <div class="topbar">
    <!--begin: Search -->
    <!-- <b-dropdown
      size="sm"
      id="kt_quick_search_toggle"
      variant="link"
      toggle-class="topbar-item text-decoration-none"
      no-caret
      right
      no-flip
    >
      <template v-slot:button-content>
        <div class="btn btn-icon btn-clean btn-lg btn-dropdown mr-1">
          <span class="svg-icon svg-icon-xl svg-icon-primary">
            <inline-svg src="media/svg/icons/General/Search.svg" />
          </span>
        </div>
      </template>
      <b-dropdown-text tag="div" class="min-w-md-350px">
        <KTSearchDefault></KTSearchDefault>
      </b-dropdown-text>
    </b-dropdown> -->
    <!--end: Search -->

    <!--begin: Notifications -->
    <!-- <b-dropdown
      size="sm"
      variant="link"
      toggle-class="topbar-item text-decoration-none"
      no-caret
      right
      no-flip
    >
      <template v-slot:button-content>
        <div
          class="btn btn-icon btn-clean btn-dropdown btn-lg mr-1 pulse pulse-primary"
        >
          <span class="svg-icon svg-icon-xl svg-icon-primary">
            <inline-svg src="media/svg/icons/Code/Compiling.svg" />
          </span>
          <span class="pulse-ring"></span>
        </div>
      </template>
      <b-dropdown-text tag="div" class="min-w-md-350px">
        <form>
          <KTDropdownNotification></KTDropdownNotification>
        </form>
      </b-dropdown-text>
    </b-dropdown> -->
    <!--end: Notifications -->

    <!--begin: Quick Actions -->
    <!-- <b-dropdown
      size="sm"
      variant="link"
      toggle-class="topbar-item text-decoration-none"
      no-caret
      right
      no-flip
    >
      <template v-slot:button-content>
        <div class="btn btn-icon btn-clean btn-dropdown btn-lg mr-1">
          <span class="svg-icon svg-icon-xl svg-icon-primary">
            <inline-svg src="media/svg/icons/Media/Equalizer.svg" />
          </span>
        </div>
      </template>
      <b-dropdown-text tag="div" class="min-w-md-350px">
        <KTDropdownQuickAction></KTDropdownQuickAction>
      </b-dropdown-text>
    </b-dropdown> -->
    <!--end: Quick Actions -->

    <!--begin: My Cart -->
    <!-- <b-dropdown
      size="sm"
      variant="link"
      toggle-class="topbar-item text-decoration-none"
      no-caret
      right
      no-flip
    >
      <template v-slot:button-content>
        <div class="btn btn-icon btn-clean btn-dropdown btn-lg mr-1">
          <span class="svg-icon svg-icon-xl svg-icon-primary">
            <inline-svg src="media/svg/icons/Shopping/Cart3.svg" />
          </span>
        </div>
      </template>
      <b-dropdown-text tag="div" class="min-w-md-350px">
        <KTDropdownMyCart></KTDropdownMyCart>
      </b-dropdown-text>
    </b-dropdown> -->
    <!--end: My Cart -->

    <!--begin: Quick panel toggle -->
    <!-- <KTQuickPanel></KTQuickPanel> -->
    <!--end: Quick panel toggle -->

    <!-- wallet::start -->

    <div
      class="topbar-item"
      @mouseover="onOverWallet"
      @mouseleave="onLeaveWallet"
    >
      <b-dropdown
        size="sm"
        variant="link"
        toggle-class="btn btn-icon btn-clean btn-dropdown btn-lg mr-1 text-decoration-none"
        no-caret
        right
        no-flip
        ref="walletDropdown"
      >
        <template v-slot:button-content>
          <i class="fas fa-wallet text-dark"></i>
        </template>
        <b-dropdown-text tag="div" class="min-w-md-175px">
          <div
            class="
              p-4
              d-flex
              flex-column
              justify-content-evenly
              align-items-center
            "
          >
            <span v-if="walletData" class="mb-4 h3"
              >₹{{ walletData.amount }}</span
            >
            <div class="btn btn-primary" v-b-modal.add-amount-modal>
              Add amount
            </div>
          </div>
        </b-dropdown-text>
      </b-dropdown>
    </div>

    <!-- add amount modal::begin -->
    <b-modal
      id="add-amount-modal"
      centered
      hide-footer
      size="lg"
      title="Add Amount"
    >
      <b-input-group class="mt-3">
        <template #prepend>
          <b-input-group-text>
            <strong>₹</strong>
          </b-input-group-text>
        </template>
        <b-form-input type="tel" v-model="walletAmount"></b-form-input>
      </b-input-group>
      <div class="w-100 mt-5 text-center">
        <div class="btn btn-primary" @click="addAmount">Add</div>
      </div>
    </b-modal>
    <!-- add amount modal::end -->
    <!-- wallet::end -->

    <!--begin: User Bar -->
    <KTQuickUser></KTQuickUser>
    <!--end: User Bar -->
  </div>
  <!-- end:: Header Topbar -->
</template>

<style lang="scss">
.topbar {
  .dropdown-toggle {
    padding: 0;
    &:hover {
      text-decoration: none;
    }

    &.dropdown-toggle-no-caret {
      &:after {
        content: none;
      }
    }
  }

  .dropdown-menu {
    margin: 0;
    padding: 0;
    outline: none;
    .b-dropdown-text {
      padding: 0;
    }
  }
}
</style>


<script>
import KTSearchDefault from "@/view/layout/extras/dropdown/SearchDefault.vue";
import KTDropdownNotification from "@/view/layout/extras/dropdown/DropdownNotification.vue";
import KTDropdownQuickAction from "@/view/layout/extras/dropdown/DropdownQuickAction.vue";
import KTDropdownMyCart from "@/view/layout/extras/dropdown/DropdownMyCart.vue";
import KTDropdownLanguage from "@/view/layout/extras/dropdown/DropdownLanguage.vue";
import KTQuickUser from "@/view/layout/extras/offcanvas/QuickUser.vue";
import KTQuickPanel from "@/view/layout/extras/offcanvas/QuickPanel.vue";
import ApiService from "@/core/services/api.service";
import { mapGetters } from "vuex";
import Swal from "sweetalert2";
export default {
  name: "KTTopbar",
  data() {
    return {
      walletAmount: "",
      walletData: {},
      razorPayInitData: {},
    };
  },
  components: {
    KTSearchDefault,
    KTDropdownNotification,
    KTDropdownQuickAction,
    KTDropdownMyCart,
    KTDropdownLanguage,
    KTQuickUser,
    KTQuickPanel,
  },
  created() {
    this.getWalletAmount();
  },
  methods: {
    getWalletAmount() {
      ApiService.get(`/customerWallet/getWalletbyid/${this.currentUser.id}`)
        .then(({ data }) => {
          this.walletData = data.wallet;
          console.log(data);
        })
        .catch((resp) => {
          console.log(resp);
        });
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
      ApiService.post(`/customerWallet/razorPayInstantiate`, data)
        .then(({ data }) => {
          console.log(data);
          this.razorPayInitData = data.savedhistoryData;
          this.razorPayCheckout();
        })
        .catch((resp) => {
          this.$bvModal.hide("add-amount-modal");
          console.log(resp);
          Swal.fire({
            title: "Error!",
            text: "Some error occurred while adding amount. Please try again later.",
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
          ApiService.post("/customerWallet/addWalletAmount", addWalletData)
            .then(({ data }) => {
              self.$bvModal.hide("add-amount-modal");
              self.walletAmount = "";
              Swal.fire({
                title: "Transaction successful!",
                text: "Amount has been added in your wallet",
                icon: "success",
                confirmButtonText: "Okay",
              }).then(() => {
                self.getWalletAmount();
              });
            })
            .catch((resp) => {
              Swal.fire({
                title: "Error!",
                text: "Error adding amount to wallet. Please contact support for help",
                icon: "error",
                confirmButtonText: "Close",
              }).then(() => {
                self.$bvModal.hide("add-amount-modal");
                self.walletAmount = "";
              });
            });
        },
        theme: {
          color: "#3399cc",
        },
      };
      console.log("razorpay", options);
      var rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        self.$bvModal.hide("add-amount-modal");
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
    onOverWallet() {
      this.$refs.walletDropdown.visible = true;
    },
    onLeaveWallet() {
      this.$refs.walletDropdown.visible = false;
    },
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
};
</script>
