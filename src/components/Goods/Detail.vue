<template>
  <section class="goods-detail" v-show="goods">
    <div class="info">
      <div class="pic">
        <img :src="require('../../public/mock_pic/' + goods.pic + '.png')" :alt="goods.name">
      </div>
      <ul class="list">
        <h2>{{ goods.name }}</h2>
        <li>{{ goods.price }}</li>
        <li>{{ goods.memory }}</li>
        <li>{{ goods.color }}</li>
        <li>{{ goods.agent }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    goods () {
      return this.$store.state.goodsList[this.$route.path.split('/')[2]]
    }
  }
}
</script>

<style lang="stylus">
$mobile-width = 767px

.goods-detail
  .info
    display flex
    .pic
      width 32%
      img
        width 100%
      @media (max-width: $mobile-width)
        width: 50%
    .list
      padding: 0
      h2
        margin: 0
</style>
