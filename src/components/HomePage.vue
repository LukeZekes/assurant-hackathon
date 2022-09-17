<template>
  <div id="container">
    <div id="devices">
      <div
        class="device-listing"
        v-for="(device, index) in devices"
        :key="index"
      >
        {{ device.name }}
        <router-link
          style="font-size: 15px; padding-left: 5px"
          :to="{ name: 'deviceInformation', params: { id: device.id } }"
        >
          Manage
        </router-link>
      </div>
      <button style="margin-top: 15px">Add Device</button>
    </div>
    <div id="info-storage">
      <h1 class="usage-title">Energy Usage Information</h1>
      <hr />
      <br />
      <div class="info-container">
        <p>Your combined devices are pulling a total of</p>
        <div id="energy-info">{{totalWattage}} Watts</div>
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
  font-size: 25px;
}
#devices {
  background-color: #c9ffd8;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  width: 250px;
  height:auto;
  border-style: none groove;
  border-radius: 5px;
  padding-bottom:10px;
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

  display:flex;
}
.bottom {
  position: fixed;
  width: 100%;
  bottom: 0;
  padding-left: 7px;
  background-color: white;
}
</style>
