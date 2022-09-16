import { createStore } from "vuex";
import axios from "../axios";
export default createStore({
  state: {
    devices: [
      {
        id: 1,
        name: "Light bulb",
        actions: [],
      },
    ],
  },
  getters: {
    getAllDeviceIds(state) {
      let ids = [];
      state.devices.forEach((dev) => {
        ids.push(dev.id);
      });
      return ids;
    },
    getDeviceById: (state) => (id) => {
      return state.devices.find((dev) => dev.id == id);
    },
  },
  mutations: {
    addDeviceToStore(state, dev) {
      state.devices.push(dev);
    },
  },
  actions: {
    // Fetches a list of all registered devices and stores each one in state.devices
    async fetchDevices({ commit }) {
      try {
        let res = await axios.get("/devices");
        Array.forEach(res.data, (dev) => {
          commit("addDeviceToStore", dev);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
