<template>
  <section class="goods">
    <h2>商品列表</h2>
    <div class="goods-list">
      <goods-card v-for="(item, idx) in goodsList" 
      :name="item.name" :price="item.price" :pic="item.pic" :id="item.id" 
      :selection="item.selection" :key="idx"> 
    </goods-card>
    </div>
  </section>
</template>

<script>
import GoodsCard from '@/components/Common/GoodsCard'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      goodsList: state => state.goodsList.goodsList,
      isEnd: state => state.goodsList.isEnd,
      isLoading: state => state.goodsList.isLoading
    })
  },
  components: {
    GoodsCard
  },
  methods: {
    async moreGoods () {
      if (this.isEnd || this.isLoading) {
        return
      }
      await this.$store.dispatch('addGoods')
    }
  },
  async mounted () {
    await this.moreGoods()
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
    .goods-list
      width 100%
    .goods-card
      width: 32%
  @media (max-width $mobile-width)
    .goods-list
      width 100%
    .goods-card
      width: 48%
</style>
