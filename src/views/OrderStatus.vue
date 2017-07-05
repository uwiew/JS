<template>
  <div class="order-sratus">
    <el-steps :space="200" :active="2">
      <el-step id="step1" title="步骤 1" description="您的订单已提交"></el-step>
      <el-step id="step2" title="步骤 2" description="卖家已发货"></el-step>
      <el-step id="step3" title="步骤 3" description="确认收货"></el-step>
    </el-steps>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus">
#step1
  width 30vw!important
#step2
  width 30vw!important
#step3
  width 50px!important  
</style>
