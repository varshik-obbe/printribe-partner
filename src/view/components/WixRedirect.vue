<template>
  <div class="rootContainer">
    <div class="loaderItem"></div>
    <div class="h3">Redirecting to WIX...</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      token: this.$route.query.token,
      appId: "488a03db-0706-4ba4-a9d7-f1e0831a51b6",
      redirectUrl: "https://partner.theprintribe.com/integrations/wix/success",
    };
  },

  created() {
    window.location.href = `https://www.wix.com/installer/install?token=${this.token}&appId=${this.appId}&redirectUrl=${this.redirectUrl}`;
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

/* loader css::begin */
.loaderItem {
  margin: 100px auto;
  font-size: 25px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  -webkit-animation: load5 1.1s infinite ease;
  animation: load5 1.1s infinite ease;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
@-webkit-keyframes load5 {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #f08989,
      1.8em -1.8em 0 0em rgba(240, 137, 137, 0.2),
      2.5em 0em 0 0em rgba(240, 137, 137, 0.2),
      1.75em 1.75em 0 0em rgba(240, 137, 137, 0.2),
      0em 2.5em 0 0em rgba(240, 137, 137, 0.2),
      -1.8em 1.8em 0 0em rgba(240, 137, 137, 0.2),
      -2.6em 0em 0 0em rgba(240, 137, 137, 0.5),
      -1.8em -1.8em 0 0em rgba(240, 137, 137, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(240, 137, 137, 0.7),
      1.8em -1.8em 0 0em #f08989, 2.5em 0em 0 0em rgba(240, 137, 137, 0.2),
      1.75em 1.75em 0 0em rgba(240, 137, 137, 0.2),
      0em 2.5em 0 0em rgba(240, 137, 137, 0.2),
      -1.8em 1.8em 0 0em rgba(240, 137, 137, 0.2),
      -2.6em 0em 0 0em rgba(240, 137, 137, 0.2),
      -1.8em -1.8em 0 0em rgba(240, 137, 137, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(240, 137, 137, 0.5),
      1.8em -1.8em 0 0em rgba(240, 137, 137, 0.7), 2.5em 0em 0 0em #f08989,
      1.75em 1.75em 0 0em rgba(240, 137, 137, 0.2),
      0em 2.5em 0 0em rgba(240, 137, 137, 0.2),
      -1.8em 1.8em 0 0em rgba(240, 137, 137, 0.2),
      -2.6em 0em 0 0em rgba(240, 137, 137, 0.2),
      -1.8em -1.8em 0 0em rgba(240, 137, 137, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(240, 137, 137, 0.2),
      1.8em -1.8em 0 0em rgba(240, 137, 137, 0.5),
      2.5em 0em 0 0em rgba(240, 137, 137, 0.7), 1.75em 1.75em 0 0em #f08989,
      0em 2.5em 0 0em rgba(240, 137, 137, 0.2),
      -1.8em 1.8em 0 0em rgba(240, 137, 137, 0.2),
      -2.6em 0em 0 0em rgba(240, 137, 137, 0.2),
      -1.8em -1.8em 0 0em rgba(240, 137, 137, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(240, 137, 137, 0.2),
      1.8em -1.8em 0 0em rgba(240, 137, 137, 0.2),
      2.5em 0em 0 0em rgba(240, 137, 137, 0.5),
      1.75em 1.75em 0 0em rgba(240, 137, 137, 0.7), 0em 2.5em 0 0em #f08989,
      -1.8em 1.8em 0 0em rgba(240, 137, 137, 0.2),
      -2.6em 0em 0 0em rgba(240, 137, 137, 0.2),
      -1.8em -1.8em 0 0em rgba(240, 137, 137, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(240, 137, 137, 0.2),
      1.8em -1.8em 0 0em rgba(240, 137, 137, 0.2),
      2.5em 0em 0 0em rgba(240, 137, 137, 0.2),
      1.75em 1.75em 0 0em rgba(240, 137, 137, 0.5),
      0em 2.5em 0 0em rgba(240, 137, 137, 0.7), -1.8em 1.8em 0 0em #f08989,
      -2.6em 0em 0 0em rgba(240, 137, 137, 0.2),
      -1.8em -1.8em 0 0em rgba(240, 137, 137, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(240, 137, 137, 0.2),
      1.8em -1.8em 0 0em rgba(240, 137, 137, 0.2),
      2.5em 0em 0 0em rgba(240, 137, 137, 0.2),
      1.75em 1.75em 0 0em rgba(240, 137, 137, 0.2),
      0em 2.5em 0 0em rgba(240, 137, 137, 0.5),
      -1.8em 1.8em 0 0em rgba(240, 137, 137, 0.7), -2.6em 0em 0 0em #f08989,
      -1.8em -1.8em 0 0em rgba(240, 137, 137, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(240, 137, 137, 0.2),
      1.8em -1.8em 0 0em rgba(240, 137, 137, 0.2),
      2.5em 0em 0 0em rgba(240, 137, 137, 0.2),
      1.75em 1.75em 0 0em rgba(240, 137, 137, 0.2),
      0em 2.5em 0 0em rgba(240, 137, 137, 0.2),
      -1.8em 1.8em 0 0em rgba(240, 137, 137, 0.5),
      -2.6em 0em 0 0em rgba(240, 137, 137, 0.7), -1.8em -1.8em 0 0em #f08989;
  }
}
@keyframes load5 {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #f08989,
      1.8em -1.8em 0 0em rgba(240, 137, 137, 0.2),
      2.5em 0em 0 0em rgba(240, 137, 137, 0.2),
      1.75em 1.75em 0 0em rgba(240, 137, 137, 0.2),
      0em 2.5em 0 0em rgba(240, 137, 137, 0.2),
      -1.8em 1.8em 0 0em rgba(240, 137, 137, 0.2),
      -2.6em 0em 0 0em rgba(240, 137, 137, 0.5),
      -1.8em -1.8em 0 0em rgba(240, 137, 137, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(240, 137, 137, 0.7),
      1.8em -1.8em 0 0em #f08989, 2.5em 0em 0 0em rgba(240, 137, 137, 0.2),
      1.75em 1.75em 0 0em rgba(240, 137, 137, 0.2),
      0em 2.5em 0 0em rgba(240, 137, 137, 0.2),
      -1.8em 1.8em 0 0em rgba(240, 137, 137, 0.2),
      -2.6em 0em 0 0em rgba(240, 137, 137, 0.2),
      -1.8em -1.8em 0 0em rgba(240, 137, 137, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(240, 137, 137, 0.5),
      1.8em -1.8em 0 0em rgba(240, 137, 137, 0.7), 2.5em 0em 0 0em #f08989,
      1.75em 1.75em 0 0em rgba(240, 137, 137, 0.2),
      0em 2.5em 0 0em rgba(240, 137, 137, 0.2),
      -1.8em 1.8em 0 0em rgba(240, 137, 137, 0.2),
      -2.6em 0em 0 0em rgba(240, 137, 137, 0.2),
      -1.8em -1.8em 0 0em rgba(240, 137, 137, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(240, 137, 137, 0.2),
      1.8em -1.8em 0 0em rgba(240, 137, 137, 0.5),
      2.5em 0em 0 0em rgba(240, 137, 137, 0.7), 1.75em 1.75em 0 0em #f08989,
      0em 2.5em 0 0em rgba(240, 137, 137, 0.2),
      -1.8em 1.8em 0 0em rgba(240, 137, 137, 0.2),
      -2.6em 0em 0 0em rgba(240, 137, 137, 0.2),
      -1.8em -1.8em 0 0em rgba(240, 137, 137, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(240, 137, 137, 0.2),
      1.8em -1.8em 0 0em rgba(240, 137, 137, 0.2),
      2.5em 0em 0 0em rgba(240, 137, 137, 0.5),
      1.75em 1.75em 0 0em rgba(240, 137, 137, 0.7), 0em 2.5em 0 0em #f08989,
      -1.8em 1.8em 0 0em rgba(240, 137, 137, 0.2),
      -2.6em 0em 0 0em rgba(240, 137, 137, 0.2),
      -1.8em -1.8em 0 0em rgba(240, 137, 137, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(240, 137, 137, 0.2),
      1.8em -1.8em 0 0em rgba(240, 137, 137, 0.2),
      2.5em 0em 0 0em rgba(240, 137, 137, 0.2),
      1.75em 1.75em 0 0em rgba(240, 137, 137, 0.5),
      0em 2.5em 0 0em rgba(240, 137, 137, 0.7), -1.8em 1.8em 0 0em #f08989,
      -2.6em 0em 0 0em rgba(240, 137, 137, 0.2),
      -1.8em -1.8em 0 0em rgba(240, 137, 137, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(240, 137, 137, 0.2),
      1.8em -1.8em 0 0em rgba(240, 137, 137, 0.2),
      2.5em 0em 0 0em rgba(240, 137, 137, 0.2),
      1.75em 1.75em 0 0em rgba(240, 137, 137, 0.2),
      0em 2.5em 0 0em rgba(240, 137, 137, 0.5),
      -1.8em 1.8em 0 0em rgba(240, 137, 137, 0.7), -2.6em 0em 0 0em #f08989,
      -1.8em -1.8em 0 0em rgba(240, 137, 137, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(240, 137, 137, 0.2),
      1.8em -1.8em 0 0em rgba(240, 137, 137, 0.2),
      2.5em 0em 0 0em rgba(240, 137, 137, 0.2),
      1.75em 1.75em 0 0em rgba(240, 137, 137, 0.2),
      0em 2.5em 0 0em rgba(240, 137, 137, 0.2),
      -1.8em 1.8em 0 0em rgba(240, 137, 137, 0.5),
      -2.6em 0em 0 0em rgba(240, 137, 137, 0.7), -1.8em -1.8em 0 0em #f08989;
  }
}

/* loader css::end */
</style>