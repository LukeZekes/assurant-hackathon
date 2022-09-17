<template>
  <div class="device-listing">
    <div id="device-info">
      <h1
        style="
          font-size: 40px;
          padding: 0px;
          margin-bottom: -40px;
          font-family: 'Poppins', sans-serif;
        "
      >
        {{ device.name }}
      </h1>
    </div>
    <div id="container">
      <div id="devices">
        <div id="device-actions" style="margin-top: 10px; font-weight: bold">
          Device Actions
        </div>
        <button style="margin: 10px">Toggle Lights</button>
        <br /><br />Color<br /><br /><input type="color" />
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
        <div id="energy-info" style="margin: -10px">
          <b>{{ device.watts }}</b> Watts
        </div>
        <p>on its own.</p>
        <div id="graph" style="text-shadow: none">
          <div
            class="graph-flex"
            style="
              gap: 20px;
              border-bottom: 2px solid black;
              border-left: 2px solid black;
            "
          >
            <div
              class="graph-bar"
              v-for="(data, index) in sortedComparisonData"
              :key="index"
              style="width: 100%"
              :style="{ height: getBarHeight(data[1]) + 'px' }"
            ></div>
          </div>
          <div
            class="graph-flex"
            style="gap: 20px; margin-top: 10px; margin-left: 2px"
          >
            <div
              class="graph-label"
              v-for="(data, index) in sortedComparisonData"
              :key="index"
            >
              {{ data[0] }}
            </div>
          </div>
        </div>
        <!-- <div id="graph">
          <div
            class="graph-item"
            v-for="(data, index) in sortedComparisonData"
            :key="index"
          >
            <div
              class="graph-bar"
              :style="{ height: getBarHeight(data[1]) + 'px' }"
            ></div>
            <div class="graph-label">
              {{ data[0] }}
            </div>
          </div>
        </div> -->
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
      comparisonData: this.$store.state.comparisonData,
    };
  },
  mounted() {
    // var container = document.getElementById("graph");
    // var labels = document.getElementById("labels");
    // var dnl = container.getElementsByTagName("li");
  },
  computed: {
    sortedComparisonData() {
      let vals = [["Your bulb", this.device.watts]];
      Object.entries(this.comparisonData.lightbulbs).forEach((el) =>
        vals.push(el)
      );
      vals.sort(function (a, b) {
        return a[1] - b[1];
      });
      return vals;
    },
  },
  methods: {
    getBarHeight(height) {
      return (
        (height /
          this.sortedComparisonData[this.sortedComparisonData.length - 1][1]) *
        100
      );
    },
  },
};
</script>
<style>
.graph-flex {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-shadow: none;
}
div.graph-label {
  display: inline-block;
  width: 8ch;
  height: 60px;
  font-size: 16px;
}
div.graph-bar {
  background-color: blue;
}
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
  height: auto;
  border-style: none groove;
  border-radius: 5px;
  padding-bottom: 10px;
}
#container {
  display: flex;
  justify-content: center;
  padding-top: 50px;
}
#colorCanvas {
  border-radius: 50%;
  background-image: conic-gradient(
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet,
    red
  );
  border-style: groove;
  cursor: pointer;
}
.device-listing {
  padding: 20px;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  text-shadow: 0px 2px white;
}
#device-info {
  text-align: center;
}
</style>
