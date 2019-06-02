<template>
  <div class="Jobs">
    <h1 class="Jobs__Title">Job openings</h1>
    <b-card
      class="Jobs__Card"
      :img-src="require('../assets/hand_code.png')"
      img-alt="Card image"
      img-right
    >
      <b-card-text>
        JOBS
      </b-card-text>
    </b-card>
    <b-card
      class="Jobs__Card"
      :img-src="require('../assets/job_stairs.png')"
      img-alt="Card image"
      img-right
    >
      <b-card-text>
        JOBS
      </b-card-text>
    </b-card>
  </div>
</template>
<style lang="scss">
.Jobs {
  padding: 20px;
  .card {
    background: #00bc11;
    color: #ffffff;
    margin: 10px;

    img {
      height: 200px;
      object-position: 10px 0;
    }
  }
}
</style>
