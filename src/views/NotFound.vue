<template>
  <div class="Sponsors">
    <h1 class="Sponsors__Title">Page not found.</h1>
    <b-card
      class="Sponsors__Card"
      :img-src="require('../assets/hand_code.png')"
      img-alt="Card image"
      img-right
    >
      <b-card-text> Something went wrong :( </b-card-text>
    </b-card>
  </div>
</template>
<style lang="scss">
.Sponsors {
  padding: 20px;
  .card {
    background: #00bc11;
    color: #ffffff;

    img {
      height: 200px;
      object-position: 10px 0;
    }
  }
}
</style>
