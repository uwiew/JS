<template>
  <div class="order-sratus">
    <el-steps :space="100" :active="2" :center="true">
      <el-step id="step1" title="待发货"></el-step>
      <el-step id="step2" title="已发货"></el-step>
      <el-step id="step3" title="已完成"></el-step>
    </el-steps>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus">
#step1
  width 33vw!important
#step2
  width 33vw!important
#step3
  width 50px!important
</style>
