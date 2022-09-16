import { createStore } from "vuex";

export default createStore({
  state: {
    devices: [],
  },
  getters: {},
  mutations: {
    addDeviceToStore(state, dev) {
      state.devices.push(dev);
    },
  },
  actions: {},
  modules: {},
});
