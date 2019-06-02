<template>
  <div class="FocusBlock">
    <div class="FocusBlock__Body">
      <div class="FocusBlock__Body__Title">
        Start learning today!
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.FocusBlock {
  height: 32vh;
  &__Body {
    display: flex;
    align-items: center;

    background-image: linear-gradient(
        to left,
        rgba(255, 0, 0, 0),
        5%,
        rgba(153, 11, 236, 1)
      ),
      url("~@/assets/laptop_code.png"); /* Standard syntax (must be last) */
    background-repeat: no-repeat;
    background-position: right center;
    height: 32vh;
    &__Title {
      margin: 0 auto;
      color: #ffffff;
      font-size: 6vmin;
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
