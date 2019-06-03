<template>
  <div class="Home">
    <FocusBlock />
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
<script>
import FocusBlock from "@/components/FocusBlock";

export default {
  components: {
    FocusBlock
  }
};
</script>

<style lang="scss">
.Home {
  &__Title {
    text-align: center;
    font-family: "Russo One", sans-serif;
    margin: 20px;
  }
  .card {
    margin: 20px;
    background: #00bc11;
    color: #ffffff;

    img {
      height: 200px;
      object-position: 10px 0;
    }
  }
}
</style>
