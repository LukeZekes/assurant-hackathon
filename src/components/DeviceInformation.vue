<template>
  <div>
    <div id="device-info">
      {{ device }}
    </div>
    <div id="device-actions">Device actions</div>
    <div id="energy-info">Energy information</div>
  </div>
</template>
<script>
export default {
  name: "DeviceInformation",
  props: ["id"],
  data() {
    return {
      device: this.id,
    };
  },
};
</script>
<style></style>
