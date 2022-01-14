import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth.module";
import breadcrumbs from "./breadcrumbs.module";
import config from "./config.module";
import createPersistedState from "vuex-persistedstate";
import htmlClass from "./htmlclass.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    htmlClass,
    config,
    breadcrumbs
  },
  plugins: [createPersistedState()],
});
