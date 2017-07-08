<template>
  <section class="goods">
    <div class="goods-list">
      <goods-card
        v-for="(item, idx) in goodsList"
        :id="item._id"
        :name="item.name"
        :price="item.price"
        :pic="item.pic"
        :color="item.color"
        :agent="item.agent"
        :memory="item.memory"
        :disable="item.disable"
        :key="item._id">
      </goods-card>
    </div>
    <div class="loading ball-pulse-sync" v-show="isLoading">
      <div id="load1"></div>
      <div id="load2"></div>
      <div id="load3"></div>
    </div>
  </section>
</template>

<script>
import GoodsCard from '@/components/Common/GoodsCard'
import 'loaders.css/loaders.min.css'
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
    window.addEventListener('scroll', (e) => {
      let offet = document.body.scrollTop + document.documentElement.clientHeight
      let height = document.documentElement.offsetHeight
      if ((height - offet) <= 30) {
        this.moreGoods()
      }
    })
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
    max-width 1200px
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

#load1
  background-color #fc615d
#load2
  background-color #fdbc40
#load3
 background-color #34c749
.loading
  margin 0 auto
  width 66px
</style>
