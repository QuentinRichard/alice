import Vue from "vue";
import Vuex from "vuex";
import GeoRisks from "./modules/GeoRisks";
import CSP from "./modules/CommunitySafetyPlan";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    GeoRisks,
    CSP
  },
});
