<template>
  <div id="app">
    <NavHeader />
    <router-view />
  </div>
</template>
<script>
import NavHeader from "@/components/NavHeader";
export default {
  components: {
    NavHeader
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Russo+One&display=swap");
</style>
