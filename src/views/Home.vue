<template>
  <div class="Home">
    <h1 class="Home__Title">Code Gators</h1>
    <b-card
      class="Home__Card"
      :img-src="require('../assets/hand_code.png')"
      img-alt="Card image"
      img-right
    >
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the
        card's content.
      </b-card-text>
    </b-card>
  </div>
</template>
<style lang="scss">
.Home {
  padding: 20px;
  .card {
    background: #00bc11;
    color: #ffffff;

    img {
      height: 200px;
    }
  }
}
</style>
