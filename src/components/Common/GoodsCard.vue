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
$mobile-width = 767px

.goods-card
  width 22%
  margin 0 0 20px
  transition all .2s linear
  background #fff
  padding 30px 0
  text-align center
  border 1px solid #eaeefb
  border-radius 4px
  cursor pointer
  &:hover
    box-shadow 0 15px 30px rgba(0, 0, 0, 0.1)
    transform translate3d(0, -2px, 0)
  img
    width: 100%
</style>
