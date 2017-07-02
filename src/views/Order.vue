<template>
  <div>
    <h2>提交订单</h2>
    <div class="order-container">
      <div class="order-item order-item-1">
        <div class="order-head">产品名称</div>
        <div class="order-body">
          <img src="../public/mock_pic/pic_0.png" alt="">
          <div>
            <p>iPhone 6s 64G 联通4G/移动4G</p>
          </div>
        </div>
      </div>
      <div class="order-item order-item-2">
        <div class="order-head">价格</div>
        <div style="height:100%">
          <div class="order-body">
            <p>￥3399</p>
          </div>
        </div>
      </div>
      <div class="order-item order-item-3">
        <div class="order-head"> 数量 </div>
        <div class="order-body">
          <input-number></input-number>
        </div>
      </div>
      <div class="order-item order-item-4">
        <div class="order-head">小计</div>
        <div class="order-body">
          <p>1件</p>
        </div>
      </div>
      <div class="order-item order-item-5">
        <div class="order-head">收货地址</div>
        <div class="order-body">
          <p>湖南省湘潭市雨湖区湘漂大学水壶单身公寓15动</p>
        </div>
      </div>
    </div>
    <div class="check-money">
      <p>
        <i class="el-icon-check"></i>&nbsp;
      您的账户余额为 16030 元，金额充足可以支付
      </p>
    </div>
    <div class="submit">
      <p>总计 ￥3399 &nbsp;</p>
      <el-button type="primary" size="large">提交订单</el-button>
    </div>
  </div>
</template>
<script>
import { InputNumber } from 'element-ui'

export default {
  components: {
    InputNumber
  }
}
</script>
<style lang="stylus">
$mobile-width = 767px

.light
  color: #999999
.small
  font-size: 14px;

container()
  margin 0 auto
  width 80%

.order-head
  line-height: 45px
  height 45px
  width 100%
  background-color rgba(242, 242, 242, 1)

.order-container
  display flex
  container()

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
  margin 0 auto
  width 80%
  i
    color #13ce66

.submit
  container()
  text-align right
  margin-bottom 40px

</style>
