<template>
  <section class="user-card card">
    <!--<h2>USER</h2>-->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="资本资料" name="info">
        <p>手机号码：{{ telephoneNum }}</p>
        <p>余额：￥{{ money }}</p>
      </el-tab-pane>
      <el-tab-pane label="订单查询" name="order">
        <p>暂无</p>
      </el-tab-pane>
      <el-tab-pane label="地址管理" name="address">
        <p>地址：{{ telephoneNum }}</p>
      </el-tab-pane>
    </el-tabs>
  </section>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'info'
    }
  },
  props: {
    telephoneNum: Number,
    money: Number
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="stylus">
$mobile-width = 767px

.user-card
  animation fade-mine-card .85s ease-in-out
  margin 10px auto 0
  padding 20px
  p
    line-height 25px
    font-size 15px
    font-weight 500
  @media (max-width $mobile-width)
    width 100% !important
</style>
