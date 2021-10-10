import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    invoiceModall: false,
    popupModal: false,
    api:
      "https://invoice-app-eb754-default-rtdb.europe-west1.firebasedatabase.app/invoice.json",
    posts: [],
  },
  mutations: {
    TOGGLE_INVO(state) {
      state.invoiceModall = !state.invoiceModall;
    },
    TOGGLE_POPUP(state) {
      state.popupModal = !state.popupModal;
    },
    SET_INV(state, posts) {
      state.posts = posts;
   
    },
  },
  actions: {
   async loadInvoice({ commit }) {
    await axios.get(this.state.api).then((res) => {
        commit("SET_INV", res.data);
      });
    },
  },
  modules: {},
});
