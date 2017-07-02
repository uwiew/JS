<template>
  <figure class="goods-card">
    <img :src="require('../../public/mock_pic/' + pic + '.png')" :alt="name">
    <figcaption>
      <h3>{{ name }}</h3>
      <b>{{ price }}</b>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    name: String,
    price: Number,
    pic: String
  }
}
</script>

<style lang="stylus">
.goods-card
  margin: 0
  width: 100px
  img
    width: 100%
</style>
