<template>
  <div class="device-listing">
    <div id="device-info">
      <h1 style="font-size: 40px; padding: 0px; margin-bottom: -40px">
        {{ device }}
      </h1>
    </div>
    <div id="container">
      <div id="devices">
        <div id="device-actions" style="margin-top: 10px; font-weight: bold">
          Device Actions
        </div>
        <button style="margin: 10px">Toggle Lights</button>
        <br /><br />Color<br /><input style="margin: 10px" type="color" />
        <br /><br />Brightness<input
          type="range"
          min="0"
          max="200"
          value="100"
        />
      </div>
      <div id="devices" style="margin-left: 20px">
        <div id="device-actions" style="margin-top: 10px; font-weight: bold">
          Device Information
        </div>
        <p>This device is pulling</p>
        <div id="energy-info" style="margin: -10px">7.1 Watts</div>
        <p>on its own.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DeviceInformation",
  props: ["id"],
  data() {
    return {
      device: this.$store.getters.getDeviceById(this.id),
    };
  },
};
</script>
<style>
html,
body {
  height: 100%;
  width: 100%;
  margin-top: -17px;
  margin-left: 0px;
  line-height: 1.5;
}
h1 {
  font-family: "Javanese Text", sans-serif;
  font-size: 50px;
  padding: 10px;
  text-shadow: 0px 2px #a0d99c;
}
h2 {
  font-family: "Javanese Text", sans-serif;
  text-align: center;
  font-size: 90%;
  text-shadow: 0px 2px #dadada;
  margin-top: -60px;
}
#devices {
  background-color: #c9ffd8;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  width: 250px;
  height: 350px;
  border-style: none groove;
  border-radius: 5px;
}
#container {
  display: flex;
  justify-content: center;
  padding-top: 50px;
}
.device-listing {
  padding: 20px;
  text-align: left;
  font-family: "Javanese Text", sans-serif;
  font-size: 20px;
  text-shadow: 0px 2px white;
}
#device-info {
  text-align: center;
}
</style>
