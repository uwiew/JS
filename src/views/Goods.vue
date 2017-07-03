<template>
  <section class="goods">
    <h2>商品列表</h2>
    <div class="goods-list">
      <goods-card v-for="(item, idx) in goodsList"
        :name="item.name"
        :price="item.price"
        :pic="item.pic"
        :id="item.id"
        :memory="item.memory"
        :agent="item.agent"
        :color="item.color"
        :key="idx">
      </goods-card>
    </div>
  </section>
</template>

<script>
import GoodsCard from '@/components/Common/GoodsCard'
export default {
  computed: {
    goodsList () {
      return this.$store.state.goodsList
    }
  },
  components: {
    GoodsCard
  }
}
</script>

<style lang="stylus">
$mobile-width = 767px
$common-padding = 100px

.goods
  h2
    padding-bottom 12px
    border-bottom 3px dashed #eaeefb
  .goods-list
    padding-top 5px
    overflow hidden
    box-sizing border-box
    display flex
    flex-wrap wrap
    justify-content space-between
    max-width 1440px
    margin 0 auto

  @media (max-width $mobile-width + 200px)
    .goods-card
      width: 32%
  @media (max-width $mobile-width)
    .goods-list
      width 100%
    .goods-card
      width: 48%
</style>
