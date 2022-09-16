<template>
  <div id="container">
    <div id="devices">
      <div class="device-listing">Device 1</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DevicePage1",
  components: {},
  data() {
    return {
      devices: [],
    };
  },
};
</script>
<style>
    html, body {
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
        text-shadow: 0px 2px #A0D99C;
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
        font-size:20px;
        text-shadow: 0px 2px white;
    }
</style>
