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
      <b-nav-form class="ml-auto">
        <b-button variant="outline-success" class="my-2 my-sm-0"
          >Login</b-button
        >
        <b-button variant="outline-success" class="my-2 my-sm-0"
          >Sign Up</b-button
        >
      </b-nav-form>
    </b-navbar>
  </div>
</template>

<style lang="scss" scoped>
.Header {
  background: #00bc11;
  .navbar-nav {
    .nav-link {
      color: #ffffff;
      font-size: 4vmin;
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
    height: 60px;
  }
}
</style>
