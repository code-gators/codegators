<template>
  <div class="Header">
    <b-navbar>
      <b-navbar-brand :to="{ name: 'home' }">
        <img
          :src="require('../assets/codegatorlogo_white.png')"
          class="d-inline-block align-top"
          alt="Gator"
        />
      </b-navbar-brand>
      <b-navbar-nav class="Header__Links">
        <b-nav-item :to="{ name: 'jobs' }">Jobs</b-nav-item>
        <b-nav-item :to="{ name: 'about' }">About Us</b-nav-item>
        <b-nav-item :to="{ name: 'mission' }">Mission</b-nav-item>
        <b-nav-item :to="{ name: 'sponsors' }">Sponsors</b-nav-item>
      </b-navbar-nav>
      <b-nav-form class="ml-auto Header__Buttons">
        <b-button class="my-2 my-sm-0" @click="createAccount"
          >Create Account</b-button
        >
        <b-button class="my-2 my-sm-0" @click="login">Sign In</b-button>
      </b-nav-form>
    </b-navbar>
    <div id="netlify-modal"></div>
  </div>
</template>
<script>
import netlifyIdentity from "netlify-identity-widget";

export default {
  mounted() {
    netlifyIdentity.init({
      container: "#netlify-modal" // defaults to document.body,
    });
  },
  methods: {
    login() {
      netlifyIdentity.open("login"); // open the modal to the login tab
    },
    createAccount() {
      netlifyIdentity.open("signup");
    }
  }
};
</script>

<style lang="scss" scoped>
.Header {
  background: #00bc11;
  .navbar-nav {
    .nav-link {
      color: #ffffff;
      font-size: 2vmin;
      &:hover {
        color: rgb(226, 223, 31);
      }
      &:focus {
        color: rgb(153, 11, 236);
      }
    }
    a .router-link-exact-active,
    a .router-link-active {
      color: rgb(226, 223, 31);
    }
  }

  img {
    height: 30px;
  }
  &__Buttons button {
    background: #00bc11;

    border: 2px solid #fff;
    font-size: 2vmin;

    color: #fff;
    &:first-child {
      margin-right: 4px;
    }
    &:hover {
      color: #00bc11;
      background: #fff;
    }
  }
}
</style>
