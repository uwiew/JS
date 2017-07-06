<template>
  <div class="order">
    <!--<h2>提交订单</h2>-->
    <div class="card">
      <div class="order-container" v-if="goods">
        <div class="order-item order-item-1">
          <div class="order-head">产品名称</div>
          <div class="order-body">
            <img :src="goods.pic" :alt="goods.name">
            <div>
              <p>{{ goods.name }}、{{ goods.color }}、{{ goods.memory }}G、{{ goods.agent }}</p>
            </div>
          </div>
        </div>
        <div class="order-item order-item-2">
          <div class="order-head">价格</div>
          <div style="height:100%">
            <div class="order-body">
              <p>￥{{ goods.price }}</p>
            </div>
          </div>
        </div>
        <div class="order-item order-item-3">
          <div class="order-head"> 数量 </div>
          <div class="order-body">
            <el-input-number size="small" :min="1" v-model="count"></el-input-number>
          </div>
        </div>
        <div class="order-item order-item-4">
          <div class="order-head">小计</div>
          <div class="order-body">
            <p>{{ count }}件</p>
          </div>
        </div>
        <div class="order-item order-item-5">
          <div class="order-head">收货地址</div>
          <div class="order-body">
            <p contenteditable="true">
              <i class="el-icon-edit"></i>
              {{address}}</p>
          </div>
        </div>
      </div>
      <div class="submit">
        <div class="check-money">
          <b>总计 ￥{{ price }}</b>
          <p v-show="moneyIsEnough">
            <i class="el-icon-check"></i>&nbsp; 您的账户余额为 {{userInfo.money}} 元，金额充足可以支付</p>
          <p v-show="!moneyIsEnough">
            <i class="el-icon-close"></i>&nbsp; 您的账户余额为 {{userInfo.money}} 元，金额不足以支付</p>
        </div>
        <el-button @click.native="submitOrder" type="primary" :disabled="!moneyIsEnough" size="large">提交订单</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import http from 'axios'
import common from '../public/js/common'

export default {
  data () {
    return {
      count: 1,
      address: '',
      goods: {}
    }
  },
  computed: {
    id () {
      return this.$route.params.goodsId
    },
    price () {
      return this.goods.price * this.count
    },
    userInfo () {
      return this.$store.state.mine.mine || {}
    },
    moneyIsEnough () {
      return this.userInfo.money >= this.price
    }
  },
  methods: {
    async submitOrder () {
      let order = (await http.post('/order/create', {
        goods: this.id,
        num: this.count,
        address: this.address
      })).data
      this.$router.push(`/orderStatus/${order._id}`)
    }
  },
  async mounted () {
    this.goods = (await http.get(`/goods/info?id=${this.id}`)).data
    this.$store.dispatch('updateUserInfo')
    common.checkLogin(this.$store.state.mine, this.$router, () => {
      this.address = this.userInfo.address
    })
  }
}
</script>
<style lang="stylus">
$mobile-width = 767px

.order
  .light
    color: #999999
  .small
    font-size: 14px;

  // container()
  //   margin 0 auto
  //   width 80%

  .card
    border 1px solid #eaeefb
    background #fff
    box-shadow 1px 2px 5px rgba(0,0,0,.1)
    border-radius 4px
    box-sizing border-box
    padding 20px
    max-width 1000px
    margin 0 auto

  .order-head
    line-height: 45px
    height 45px
    width 100%
    background-color rgba(242, 242, 242, 1)

  .order-container
    display flex
    // border 1px solid #eaeefb
    // box-shadow 1px 2px 5px rgba(0,0,0,.1)
    // border-radius 4px
    // box-sizing border-box
    // padding 20px
    // container()

  .order-item
    height 100%
    text-align center

  .order-body
    margin-top 20px
    margin-bottom 30px

  @media (max-width: $mobile-width)
    .order-item
      width 100%!important
      flex-wrap wrap
    .order-container
      flex-wrap wrap
    .order-item-1
      .order-body
        display block!important
        img
          width 100%!important
          display block!important
        div
          width 100%!important
          margin-left 0px!important
          display block!important
          text-align center!important
    .submit
      p
        text-align center
      .el-button
        width 100%!important
    .check-money
      text-align center

  .order-item-1
    width 30%
    .order-body
      text-align left
      display: flex
      img
        margin-top 1em
        width 20%
        height 20%
      div
        width 68%
        margin-left 10%

  .order-item-2
    width 10%
    .order-body
      margin-top 33px
      text-align center

  .order-item-3
    width 25%
    .order-body
      margin-top 25px
      margin-right: auto
      margin-left: auto

  .order-item-4
    .order-body
      margin-top 33px
    width 10%

  .order-item-5
    width 25%
    .order-body
      margin-top 33px

  .check-money
    p
      margin 10px 0 0
    i.el-icon-check
      color #13ce66
    i.el-icon-close
      color #fc615d

  .submit
    // container()
    // text-align right
    // margin-bottom 40px
    display flex
    justify-content space-between
    align-items center
    .check-money
      margin-bottom 20px
    @media (max-width $mobile-width)
      flex-wrap wrap

</style>
