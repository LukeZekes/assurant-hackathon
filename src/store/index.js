import { createStore } from "vuex";
import axios from "../axios";
export default createStore({
  state: {
    devices: [
      {
        id: 1,
        name: "Light bulb - Kitchen",
        actions: [],
      },
      {
        id: 2,
        name: "Light bulb - Front porch",
        actions: [],
      },
      {
        id: 3,
        name: "Light bulb - Bedroom",
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
    getDeviceIdsAndNames(state) {
      let devices = [];
      state.devices.forEach((dev) => {
        devices.push({ id: dev.id, name: dev.name });
      });
      return devices;
    },
    getDeviceById: (state) => (id) => {
      let device = state.devices.find((dev) => dev.id == id);
      console.log(device);
      return device;
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
