<template>
  <div class="Header">
    <b-navbar>
      <b-navbar-nav class="Header__Links">
        <b-nav-item :to="{ name: 'home' }">Home</b-nav-item>
        <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
        <b-nav-item :to="{ name: 'mission' }">Mission</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<style lang="scss">
.Header {
  background: #00bc11;
  .navbar-nav .nav-link {
    color: #ffffff;
    font-size: 4vmin;
  }
}
</style>

