<template>
  <div class="Profile">
    <h1>Profile</h1>
    <h2 v-if="progress < 20">
      {{ `Ok ${user}, let's start building your resume` }}
    </h2>
    <h2 v-else>
      {{ `Excellent ${user}, keep on going!` }}
    </h2>
    <div>
      <ResumeForm />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ResumeForm from "@/components/ResumeForm";

export default {
  components: {
    ResumeForm
  },
  computed: {
    ...mapGetters({
      user: "getUser",
      progress: "getProgress"
    })
  }
};
</script>

<style lang="scss">
.Profile {
  padding: 20px;
}
</style>
