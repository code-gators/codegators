<template>
  <div class="About">
    <h1>Profile</h1>
    <h2>
      {{ `Ok ${user}, Let's start building your resume` }}
    </h2>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  }
};
</script>

<style lang="scss">
.About {
  padding: 20px;
}
</style>
