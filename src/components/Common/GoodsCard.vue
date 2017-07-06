<template>
  <figure class="goods-card" @click="disable || $router.push('/goods/' + id)" :style="{ border: disable ? '1px solid #d85a63' : 'none', cursor: disable ? 'not-allowed' : 'pointer' }">
    <img :src="pic" :alt="name">
    <figcaption>
      <h3>{{ name }}</h3>
      <b>￥ {{ price }}</b>
      <p>
        {{color}} 、{{agent}} 、{{memory}}G
      </p>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    name: String,
    pic: String,
    color: String,
    agent: String,
    memory: Number,
    price: Number,
    id: String,
    disable: Boolean
  }
}
</script>

<style lang="stylus">
.goods-card
  width 22%
  margin 0 0 30px
  transition all .2s linear
  padding 20px 5px
  box-sizing: border-box
  text-align center
  border 1px solid #eaeefb
  border-radius 4px
  // cursor pointer
  background #fff
  &:hover
    box-shadow 0 15px 30px rgba(0, 0, 0, 0.1)
    transform translate3d(0, -2px, 0)
  h3
    margin 10px 0 5px
  b
    color #4688f1
    display block
    width: 100%
    padding-bottom 5px
    margin-bottom 20px
    border-bottom 1px dashed #eee
  p
    margin 0
    font-size 13px
    color: #abb0bc
    font-weight 500
  img
    width: 100%
</style>
