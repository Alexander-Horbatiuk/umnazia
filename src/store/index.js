import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fields: {}
  },
  mutations: {
    setFields(state, data) {
      data.forEach(field => {
        state.fields[field.fieldName] = field.fieldText;
      });
    }
  },
  actions: {
    async sendTel(context, data) {
      await axios({
        method: "post",
        url: process.env.VUE_APP_API + "/customers",
        headers: { "content-type": "application/json" },
        data
      });
    },
    async getFields({ commit }) {
      const fields = await axios({
        method: "get",
        url: process.env.VUE_APP_API + "/fields"
      });
      commit("setFields", fields.data);
    },
    async setFields({ dispatch }, data) {
      await axios({
        method: "post",
        url: process.env.VUE_APP_API + "/fields",
        headers: { "content-type": "application/json" },
        data
      });
      dispatch("getFields");
    }
  },
  modules: {}
});
