import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    X(state) {
      state.x = 2;
    }
  },
  actions: {
    async sendTel({ commit }, data) {
      console.log(process.env.VUE_APP_API);
      const result = await axios({
        method: "post",
        url: process.env.VUE_APP_API + "/customers",
        headers: { "content-type": "application/json" },
        data
      });
      console.log(result);
      commit("X");
    }
  },
  modules: {}
});
