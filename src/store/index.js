import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async sendTel(context, data) {
      await axios({
        method: "post",
        url: process.env.VUE_APP_API + "/customers",
        headers: { "content-type": "application/json" },
        data
      });
    }
  },
  modules: {}
});
