<template>
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
        <div class="order-body"> {{order.num}}件 </div>
      </div>
      <div class="order-item order-item-4">
        <div class="order-head"> 总计 </div>
        <div class="order-body"> ￥ {{order.cost}} </div>
      </div>
      <div class="order-item order-item-5">
        <div class="order-head">收货地址</div>
        <div class="order-body">
          <p> {{order.address}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'order', 'goods'
  ]
}
</script>
<style lang="stylus">
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
</style>

