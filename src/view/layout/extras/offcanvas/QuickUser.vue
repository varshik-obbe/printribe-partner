<template>
  <div class="topbar-item">
    <div
      class="
        btn btn-icon
        w-auto
        btn-clean
        d-flex
        align-items-center
        btn-lg
        px-2
      "
      id="kt_quick_user_toggle"
    >
      <span
        class="
          text-muted
          font-weight-bold font-size-base
          d-none d-md-inline
          mr-1
        "
      >
        Hi,
      </span>
      <span
        class="
          text-dark-50
          font-weight-bolder font-size-base
          d-none d-md-inline
          mr-3
        "
      >
        {{profileData.username}}
      </span>
      <span class="symbol symbol-35 symbol-light-success">
        <!-- <img v-if="false" alt="Pic" :src="picture" /> -->
        <span v-if="profileData.username" class="symbol-label font-size-h5 font-weight-bold">
          {{profileData.username[0].toUpperCase()}}
        </span>
      </span>
    </div>

    <div
      id="kt_quick_user"
      ref="kt_quick_user"
      class="offcanvas offcanvas-right p-10"
    >
      <!--begin::Header-->
      <div
        class="
          offcanvas-header
          d-flex
          align-items-center
          justify-content-between
          pb-5
        "
      >
        <h3 class="font-weight-bold m-0">
          User Profile
          <!-- <small class="text-muted font-size-sm ml-2">12 messages</small> -->
        </h3>
        <a
          href="#"
          class="btn btn-xs btn-icon btn-light btn-hover-primary"
          id="kt_quick_user_close"
        >
          <i class="ki ki-close icon-xs text-muted"></i>
        </a>
      </div>
      <!--end::Header-->

      <!--begin::Content-->
      <perfect-scrollbar
        class="offcanvas-content pr-5 mr-n5 scroll"
        style="max-height: 90%; position: relative"
      >
        <!--begin::Header-->
        <div class="d-flex align-items-center justify-content-center mt-3">
          <!-- <div class="symbol symbol-100 mr-5">
            <img class="symbol-label" :src="picture" alt="" />
            <i class="symbol-badge bg-success"></i>
          </div> -->
          <div class="d-flex flex-column">
            <a
              href="#"
              class="
                font-weight-bold font-size-h3
                text-dark-75 text-hover-primary
              "
            >
              {{profileData.username}}
            </a>
            <!-- <div class="text-muted mt-1">Application Developer</div> -->
            <div class="navi mt-2">
              <a :href="'mailto:'+profileData.email" class="navi-item">
                <span class="navi-link p-0 pb-2">
                  <span class="navi-text text-muted text-hover-primary font-size-h5">
                    {{profileData.email}}
                  </span>
                </span>
              </a>
            </div>
            <button class="btn btn-light-primary btn-bold" @click="onLogout">
              Sign out
            </button>
          </div>
        </div>
        <!--end::Notifications-->
      </perfect-scrollbar>
      <!--end::Content-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
#kt_quick_user {
  height: 225px;
  overflow: hidden;
}
</style>

<script>
import { LOGOUT } from "@/core/services/store/auth.module";
import KTLayoutQuickUser from "@/assets/js/layout/extended/quick-user.js";
import KTOffcanvas from "@/assets/js/components/offcanvas.js";
import ApiService from "@/core/services/api.service";
import { mapGetters } from "vuex";

export default {
  name: "KTQuickUser",
  data() {
    return {
      list: [
        {
          title: "Another purpose persuade",
          desc: "Due in 2 Days",
          alt: "+28%",
          svg: "media/svg/icons/Home/Library.svg",
          type: "warning",
        },
        {
          title: "Would be to people",
          desc: "Due in 2 Days",
          alt: "+50%",
          svg: "media/svg/icons/Communication/Write.svg",
          type: "success",
        },
        {
          title: "Purpose would be to persuade",
          desc: "Due in 2 Days",
          alt: "-27%",
          svg: "media/svg/icons/Communication/Group-chat.svg",
          type: "danger",
        },
        {
          title: "The best product",
          desc: "Due in 2 Days",
          alt: "+8%",
          svg: "media/svg/icons/General/Attachment2.svg",
          type: "info",
        },
      ],
      profileData: {},
    };
  },
  created() {
    ApiService.get(`/customers/getCustomerbyid?id=${this.currentUser.id}`)
      .then(({ data }) => {
        console.log(data);
        this.profileData = data.customerRecordData;
      })
      .catch((resp) => {
        console.log(resp);
      });
  },
  mounted() {
    // Init Quick User Panel
    KTLayoutQuickUser.init(this.$refs["kt_quick_user"]);
  },
  methods: {
    onLogout() {
      this.$store
        .dispatch(LOGOUT)
        .then(() => this.$router.push({ name: "login" }));
    },
    closeOffcanvas() {
      new KTOffcanvas(KTLayoutQuickUser.getElement()).hide();
    },
  },
  computed: {
    picture() {
      return process.env.BASE_URL + "media/users/300_21.jpg";
    },
    ...mapGetters(["currentUser"]),
  },
};
</script>
