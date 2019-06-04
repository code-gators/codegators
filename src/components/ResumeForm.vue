<template>
  <div class="ResumeForm">
    <b-card bg-variant="light" footer-tag="footer" header-tag="header">
      <b-progress slot="header" :value="value" :max="max" animated></b-progress>
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
          label-for="name"
        >
          <b-form-input v-model="user" id="name"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Last name:"
          label-align-sm="right"
          label-for="last_name"
        >
          <b-form-input v-model="last_name" id="last_name"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="E-mail:"
          label-align-sm="right"
          label-for="nested-state"
        >
          <b-form-input
            v-model="email"
            type="email"
            id="nested-state"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label-cols-sm="3"
          label="Phone:"
          label-align-sm="right"
          label-for="nested-state"
        >
          <vue-tel-input :defaultCountry="'US'" v-model="phone"></vue-tel-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Address:"
          label-align-sm="right"
          label-for="nested-country"
        >
          <b-form-input
            id="textarea"
            v-model="address.line1"
            placeholder="Line 1"
            rows="3"
            max-rows="6"
          ></b-form-input>
          <b-form-input
            id="textarea"
            v-model="address.line2"
            placeholder="Line 2"
            rows="3"
            max-rows="6"
          ></b-form-input>
          <b-row>
            <b-col class="py-2"
              ><span>State</span>
              <b-form-input
                v-model="address.state"
                disabled
                rows="3"
                max-rows="6"
                list="input-list"
                id="input-with-list"
              ></b-form-input>
              <b-form-datalist
                id="input-list"
                :options="options"
              ></b-form-datalist
            ></b-col>
            <b-col class="py-2"
              ><span>City</span
              ><b-form-input
                id="textarea"
                v-model="address.city"
                placeholder=""
                rows="3"
                max-rows="6"
              ></b-form-input
            ></b-col>
            <b-col class="py-2"
              ><span>Zipcode</span
              ><b-form-input
                id="textarea"
                v-model="address.zipcode"
                placeholder=""
                rows="3"
                max-rows="6"
              ></b-form-input
            ></b-col>
          </b-row>
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
          <b-button variant="success" @click="setResume">Continue</b-button>
        </b-nav-form>
      </b-navbar>
    </b-card>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import VueTelInput from "vue-tel-input";

export default {
  components: {
    VueTelInput
  },
  data() {
    return {
      user: "",
      email: "",
      last_name: "",
      phone: "",
      address: {
        line1: "",
        line2: "",
        city: "",
        state: "Florida",
        zipcode: ""
      },
      options: options,

      max: 100
    };
  },
  computed: {
    ...mapGetters({
      getUser: "getUser",
      getEmail: "getEmail"
    }),
    value() {
      let val = 0;
      val = this.user != "" ? (val += 3) : val;
      val = this.last_name != "" ? (val += 3) : val;
      val = this.email != "" ? (val += 3) : val;
      val = this.phone != "" ? (val += 3) : val;
      val = this.address.line1 != "" ? (val += 3) : val;
      val = this.address.line2 != "" ? (val += 3) : val;
      val = this.address.city != "" ? (val += 4) : val;
      val = this.address.state != "" ? (val += 0) : val;
      val = this.address.zipcode != "" ? (val += 4) : val;
      this.setProgress(val);

      return val;
    }
  },
  methods: {
    ...mapActions({
      setResumeBasicInfo: "setResumeBasicInfo",
      setProgress: "setProgress"
    }),
    setResume() {
      const resume = {
        name: this.user,
        last_name: this.last_name,
        email: this.email,
        phone: this.phone,
        address: this.address
      };
      this.setResumeBasicInfo(resume);
    }
  }
};
const options = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Federated States of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Island",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];
</script>

<style lang="scss" scoped>
.ResumeForm {
  .card-footer button {
    margin-left: auto;
  }
  .card-header {
    background: rgb(241, 150, 12);
  }
  .card {
    border: 2px solid rgb(241, 150, 12);
  }
}
</style>
