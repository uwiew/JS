<template>
  <section class="goods">
    <h1>商品列表</h1>
    <div class="goods-list">
      <goods-card v-for="(item, idx) in goodsList" :name="item.name" :price="item.price" :pic="item.pic" :key="idx"></goods-card>
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

</style>
