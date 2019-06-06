<template>
  <div class="FocusBlock">
    <div class="FocusBlock__Body">
      <div class="FocusBlock__Body__Title">
        <div v-if="user">
          {{ `Welcome, ${user}` }}
        </div>
        <div v-else>
          Start learning today!
        </div>
      </div>
      <div @click="test">
        <img :src="require('../assets/happy_coder.png')" alt="Gator" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      user: "getUser",
      getJwt: "getJwt",
      headers: "getHeaders"
    })
  },
  methods: {
    test() {
      this.$http
        .post(
          "https://www.codegators.org/.netlify/functions/save_resume",
          null,
          this.headers
        )
        .then(response => {
          console.log(response);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.FocusBlock {
  height: 32vh;
  &__Body {
    border-bottom: 4px solid #3d278e;
    border-top: 4px solid #3d278e;

    &__Title {
      padding-left: 30px;
    }
    img {
      height: 28vh;
      padding-right: 30px;
      @media screen and (max-width: 500px) {
        height: 16vh;
        padding-right: 10px;
      }
    }
    display: flex;
    align-items: center;

    background-image: linear-gradient(
        to left,
        rgba(255, 0, 0, 0),
        1%,
        rgb(241, 150, 12)
      ),
      url("~@/assets/laptop_code.png"); /* Standard syntax (must be last) */
    background-repeat: no-repeat;
    background-position: right center;
    height: 32vh;
    &__Title {
      margin: 0 auto;
      color: #ffffff;
      font-size: 8vmin;
      font-weight: 800;
    }
  }
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
