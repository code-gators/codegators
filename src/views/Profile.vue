<template>
  <div class="Profile">
    <h1>Profile</h1>
    <h2>
      {{ `Ok ${user}, Let's start building your resume` }}
    </h2>
    <div>
      <b-card bg-variant="light" footer-tag="footer">
        <b-form-group
          label-cols-lg="3"
          label="Basic information"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group
            label-cols-sm="3"
            label="Name:"
            label-align-sm="right"
            label-for="nested-street"
          >
            <b-form-input id="nested-street"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Last name:"
            label-align-sm="right"
            label-for="nested-city"
          >
            <b-form-input id="nested-city"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="E-mail:"
            label-align-sm="right"
            label-for="nested-state"
          >
            <b-form-input id="nested-state"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Address:"
            label-align-sm="right"
            label-for="nested-country"
          >
            <b-form-textarea
              id="textarea"
              placeholder="Enter something..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>

          <!-- <b-form-group
        label-cols-sm="3"
        label="Ship via:"
        label-align-sm="right" class="mb-0"
      >
        <b-form-radio-group
          class="pt-2"
          :options="['Air', 'Courier', 'Mail']"
        ></b-form-radio-group>
      </b-form-group> -->
        </b-form-group>
        <b-navbar slot="footer">
          <b-nav-form class="ml-auto Header__Buttons">
            <b-button variant="success">Continue</b-button>
          </b-nav-form>
        </b-navbar>
      </b-card>
    </div>
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
.Profile {
  padding: 20px;
  .card-footer button {
    margin-left: auto;
  }
}
</style>
