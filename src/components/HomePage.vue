<template>
  <h1
    style="
      font-size: 40px;
      padding: 0px;
      margin-bottom: -40px;
      font-family: 'Poppins', sans-serif;
    "
  >
    Home
  </h1>
  <div id="container">
    <div id="devices">
      <h1 class="usage-title">Devices</h1>
      <div
        class="device-listing"
        v-for="(device, index) in devices"
        :key="index"
        @click="routeToDeviceInfo(device.id)"
      >
        {{ device.name }}
      </div>
      <div class="device-listing">Add Device</div>
    </div>
    <div id="info-storage">
      <h1 class="usage-title">Energy Usage Information</h1>
      <br />
      <div class="info-container">
        <p>Your combined devices are pulling a total of</p>
        <div id="energy-info">{{ totalWattage }} Watts</div>
        <p>from <b>3</b> total devices.</p>
      </div>
    </div>
  </div>
  <div class="bottom">
    <p>Hackathon 2022; Made by Stephen Sulimani, Luke Zeches, & Devin Beck</p>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  components: {},
  data() {
    return {
      devices: [],
      totalWattage: this.$store.getters.getTotalWattage,
    };
  },
  mounted() {
    this.devices = this.$store.getters.getDeviceIdsAndNames;
  },
  methods: {
    routeToDeviceInfo(id) {
      this.$router.push({ name: "deviceInformation", params: { id } });
    },
  },
};
</script>
<style scoped>
html,
body {
  font-family: "Poppins", sans-serif;
  height: 100%;
  width: 100%;
  margin-top: -17px;
  margin-left: 0px;
  line-height: 1.5;
}
h1 {
  font-family: "Poppins", sans-serif;
  font-size: 55px;
  padding: 10px;
  text-shadow: 0px 2px #a0d99c;
}
h2 {
  font-family: "Poppins", sans-serif;
  text-align: center;
  font-size: 90%;
  text-shadow: 0px 2px #dadada;
  margin-top: -60px;
}
.usage-title {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 25px;
}
#devices {
  background-color: #c9ffd8;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  width: 400px;
  height: auto;
  border-style: none groove;
  border-radius: 5px;
  padding-bottom: 10px;
  padding-top: 10px;
}

#container {
  display: flex;
  justify-content: center;
  padding-top: 50px;
}
#info-storage {
  border-radius: 5px;
  background-color: #c9ffd8;
  margin-left: 10px;
  padding: 10px;
  width: 500px;
}
#energy-info {
  font-weight: bold;
  font-size: 150%;
}
.info-container {
  margin-top: -20px;
}
.device-listing {
  padding: 20px;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  text-shadow: 0px 2px white;
  border-bottom: black 1px solid;
  display: flex;
  background-color: none;
  cursor: pointer;
}
.device-listing:hover {
  background-color: #aafcc1;
}
.device-listing:active {
  background-color: #92fcb0;
}
.bottom {
  position: fixed;
  width: 100%;
  bottom: 0;
  padding-left: 7px;
  background-color: white;
}
</style>
