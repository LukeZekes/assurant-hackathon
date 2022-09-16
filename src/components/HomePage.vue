<template>
  <div>
    <div id="devices">
      <DeviceInformation v-for="(device, index) in devices" :key="index" />
    </div>
    <div id="energy-info"></div>
  </div>
</template>
<script>
import DeviceInformation from "./DeviceInformation.vue";
export default {
  name: "HomePage",
  components: {
    DeviceInformation,
  },
  data() {
    return {
      devices: [],
    };
  },
};
</script>
<style></style>
