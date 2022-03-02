<template>
  <div class="rootContainer"></div>
</template>

<script>
import { mapGetters } from "vuex";
import ApiService from "@/core/services/api.service";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      auth_code: this.$route.query.code,
      instance_id: this.$route.query.instanceId,
    };
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"]),
  },
  created() {
    if (!this.isAuthenticated) {
      this.$router.push("/login");
    }

    let postData = {
      tokenData: {
        auth_code: this.auth_code,
        instance_id: this.instance_id,
        customer_id: this.currentUser.id,
      },
    };
    ApiService.post(`/wix/finishInitialize`, postData)
      .then((data) => {
        this.$router.push("/integrations/wix");
      })
      .catch((resp) => {
        console.error(resp);
        Swal.fire({
          title: "Some error occurred while authorizing",
          icon: "error",
        }).then(()=>{
            window.location.href="editor.wix.com"
        });
      });
  },
};
</script>

<style scoped>
.rootContainer {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>