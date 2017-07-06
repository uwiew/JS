<template>
  <section class="user-card card">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="资本资料" name="info">
        <p>手机号码：{{ telephoneNum }}</p>
        <p>余额：￥{{ money }}</p>
      </el-tab-pane>
      <el-tab-pane label="订单查询" name="order">
        <p>暂无</p>
      </el-tab-pane>
      <el-tab-pane label="地址管理" name="address">
        <p>地址：{{ address }}</p>
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
    money: Number,
    address: String
  },
  methods: {
    handleClick (tab, event) {
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

  @media (max-width $mobile-width)
    width 100% !important
</style>
