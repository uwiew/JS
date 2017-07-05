<template>
  <section class="goods-detail">
    <div class="info" v-if="goods">
      <div class="pic">
        <img :src="goods.pic" :alt="goods.name">
      </div>
      <div class="desc">
        <div class="title">
          <h2>{{ goods.name }}</h2>
          <h2>￥{{ goods.price }}</h2>
        </div>
        <ul class="list">
          <li>内存：<span>{{ goods.memory }}G</span></li>
          <li>颜色：<span>{{ goods.color }}</span></li>
          <li>版本：<span>{{ goods.agent }}</span></li>
        </ul>
        <el-button type="primary" @click="$router.push('/order/' + goods._id)" class="buy-button">买买买买买</el-button>
        <el-button type="danger" @click="$router.push('/goods')" class="buy-button">圆润地离开</el-button>
      </div>
    </div>
  </section>
</template>

<script>
import http from 'axios'

export default {
  data () {
    return {
      goods: {}
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  async mounted () {
    this.goods = (await http.get(`/goods/info?id=${this.id}`)).data
  }
}
</script>

<style lang="stylus">
$mobile-width = 767px

.goods-detail
  h2, h3, p
    margin: 0
  .info
    border 1px solid #eaeefb
    display flex
    justify-content space-around
    flex-wrap wrap
    box-shadow 1px 2px 5px rgba(0,0,0,.1)
    border-radius 4px
    padding 20px
    box-sizing border-box
    background #fff
    .pic
      width 32%
      img
        width 100%
      @media (max-width: $mobile-width)
        width: 50%
    .desc
      width 50%
      .title
        padding 10px 0
        box-sizing border-box
        width 100%
        border-bottom 1px dashed #e2e5e7
        display flex
        justify-content space-between
        align-items center
        h2:nth-child(2)
          color #4688f1
      .list
        padding: 0
        li
          font-size 15px
          line-height 30px
          font-weight 500

  @media (max-width: $mobile-width - 240px)
    .pic, .desc
      width 100% !important
    .pic
      margin-bottom 20px
    .buy-button
      width 100%
      box-sizing border-box
      margin-bottom 10px
      &:last-child
        margin 0
</style>
