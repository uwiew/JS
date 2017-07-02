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
  data () {
    return {
      goodsList: [
        { name: 'iPhone se', price: 1999, pic: 'pic_0', color: '银色', memory: 16, agent: ' 联通4G/移动4G' },
        { name: 'iPhone 7plus', price: 4599, pic: 'pic_1', color: '玫瑰金色', memory: 32, agent: '联通4G/移动4G' },
        { name: 'iPhone 6s', price: 3299, pic: 'pic_2', color: '玫瑰金色', memory: 64, agent: '联通4G/移动4G' },
        { name: 'iPhone 6s', price: 3099, pic: 'pic_3', color: '深空灰色', memory: 16, agent: '联通4G/移动4G/电信4G' },
        { name: 'samsung s7edge', price: 2299, pic: 'pic_4', color: '铂光金', memory: 32, agent: '联通4G/移动4G/电信4G' },
        { name: 'iPhone s8', price: 2599, pic: 'pic_5', color: '铂光金', memory: 32, agent: '联通4G/移动4G/电信4G' },
        { name: 'iPhone s8', price: 4799, pic: 'pic_6', color: '烟晶灰', memory: 64, agent: '联通4G/移动4G/电信4G' },
        { name: 'iPhone 5c', price: 5699, pic: 'pic_7', color: '雾屿蓝', memory: 128, agent: '联通4G/移动4G/电信4G' },
        { name: 'iPhone 5c', price: 799, pic: 'pic_8', color: '白色', memory: 32, agent: '联通4G/移动2G/电信3G' },
        { name: 'iPhone 5c', price: 999, pic: 'pic_9', color: '白色', memory: 32, agent: '联通4G/移动2G/电信3G' },
        { name: 'iPhone 6s', price: 3849, pic: 'pic_10', color: '玫瑰金色', memory: 128, agent: '联通4G/移动4G' },
        { name: 'iPhone 6s', price: 2999, pic: 'pic_11', color: '银色', memory: 64, agent: '联通4G/移动4G/电信4G' },
        { name: 'iPhone se', price: 2299, pic: 'pic_12', color: '深空灰色', memory: 16, agent: '联通4G/移动4G/电信4G' },
        { name: 'iPhone se', price: 1649, pic: 'pic_13', color: '玫瑰金色', memory: 16, agent: '联通4G/移动4G' },
        { name: 'iPhone 7', price: 4699, pic: 'pic_14', color: '红色', memory: 128, agent: '联通4G/移动4G' },
        { name: 'iPhone 7', price: 4499, pic: 'pic_15', color: '黑色', memory: 128, agent: '联通4G/移动4G' },
        { name: 'iPhone 7', price: 5099, pic: 'pic_16', color: '银色', memory: 256, agent: '联通4G/移动4G/电信4G' },
        { name: 'iPhone 7', price: 4799, pic: 'pic_17', color: '金色', memory: 128, agent: '联通4G/移动4G/电信4G' },
        { name: 'iPhone 7plus', price: 4999, pic: 'pic_18', color: '黑色', memory: 32, agent: '联通4G/移动4G/电信4G' },
        { name: 'iPhone 7plus', price: 5149, pic: 'pic_19', color: '亮黑色', memory: 256, agent: '联通4G/移动4G/电信4G' }
      ]
    }
  },
  components: {
    GoodsCard
  }
}
</script>

<style lang="stylus">

</style>
