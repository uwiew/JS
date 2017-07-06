<template>
  <div class="order-sratus">
    <div class="card">
      <el-steps :space="100" :active="order.status + 1" :center="true">
        <el-step id="step1" title="待发货"></el-step>
        <el-step id="step2" title="已发货"></el-step>
        <el-step id="step3" title="已完成"></el-step>
      </el-steps>
      <div class="status">
        <h3 v-show="order.status === 0">
          <img src="../public/images/u948.jpg" alt="">&nbsp;&nbsp;&nbsp;
          <span>订单状态：您的订单已提交，请等待商家发货</span>
        </h3>
        <h3 v-show="order.status === 1">
          <img src="../public/images/u949.jpg" alt="">&nbsp;&nbsp;&nbsp;
          <span>订单状态：您的订单已发出，正在运输中</span>
        </h3>
        <h3 v-show="order.status === 2">
          <img src="../public/images/u947.jpg" alt="">&nbsp;&nbsp;&nbsp;
          <span>订单状态：您的订单已已完成,有问题欢迎咨询客服</span>
        </h3>
        <div class="express" v-show="order.status === 1 || order.status === 2">
          <p>- 物流：{{order.express}}  </p>
          <p> - 运单号：{{order.expressId}}</p>
        </div>
        <p v-show="order.status === 1">
          如果货物到达，您可以选择
          <el-button type="primary">确认收货</el-button>
        </p>
      </div>
      <div class="order">
        <div class="order-container" v-if="goods">
          <div class="order-item order-item-1">
            <div class="order-head">产品名称</div>
            <div class="order-body">
              <img :src="goods.pic" :alt="goods.name">
              <router-link :to="`/goods/${goods._id}`">
                <div>
                  <p>{{ goods.name }}、{{ goods.color }}、{{ goods.memory }}G、{{ goods.agent }}</p>
                </div>
              </router-link>
            </div>
          </div>
          <div class="order-item order-item-2">
            <div class="order-head">价格</div>
            <div style="height:100%">
              <div class="order-body">
                <p>￥{{ order.cost/order.num }}</p>
              </div>
            </div>
          </div>
          <div class="order-item order-item-3">
            <div class="order-head"> 数量 </div>
            <div class="order-body">
              {{order.num}}件
            </div>
          </div>
          <div class="order-item order-item-4">
            <div class="order-head"> 总计 </div>
            <div class="order-body">
              ￥ {{order.cost}}
            </div>
          </div>
          <div class="order-item order-item-5">
            <div class="order-head">收货地址</div>
            <div class="order-body">
              <p>
              {{order.address}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import http from 'axios'

export default {
  data () {
    return {
      order: {}
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    goods () {
      return this.order.goods || {}
    }
  },
  async mounted () {
    this.order = (await http.get(`/order/status?id=${this.id}`)).data
  }
}
</script>
<style lang="stylus">
.order-sratus
  .card
    background #fff
    border-radius 4px
    box-shadow 1px 2px 5px rgba(0,0,0,0.1)
    padding 40px 0 10px
    box-sizing border-box
    max-width 1000px
    margin 0 auto
  .status
    h3
      margin-bottom 0px
      span
        position relative
        top: -14px
    .express
      p
        margin-top 0px
      width 250px
      text-align left
      margin 0 auto
      font-size 13px
    text-align center
    margin-right auto
    margin-left auto
    width 50%
  .order
    margin-top 20px
    width 100%
    .light
      color: #999999
    .small
      font-size: 14px;

    .order-head
      line-height: 45px
      height 45px
      width 100%
      background-color rgba(242, 242, 242, 1)

    .order-container
      margin-right auto
      margin-left auto
      width 74%
      display flex

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
      width 35%
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
      width 15%
      .order-body
        margin-top 33px
        text-align center

    .order-item-3
      width 15%
      .order-body
        margin-top 33px

    .order-item-4
      .order-body
        margin-top 33px
      width 15%

    .order-item-5
      width 35%
      .order-body
        margin-top 33px
#step1
  width 33vw!important
#step2
  width 33vw!important
#step3
  width 50px!important
</style>
