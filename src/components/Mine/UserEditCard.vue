<template>
  <section class="user-edit-card card">
    <!--<h3>修改资料</h3>-->
    <el-form :model="form">
      <el-form-item prop="telephoneNum" label="手机号码" label-width="68px">
        <el-input v-model.trim.number="form.telephoneNum" :placeholder="mineInfo.telephoneNum"></el-input>
      </el-form-item>
      <el-form-item prop="address" label="收货地址" label-width="68px">
        <el-input v-model.trim="form.address" :placeholder="mineInfo.address"></el-input>
      </el-form-item>
      <el-button type="primary" :disabled="isLoading" v-loading.lock="isLoading" class="submitButton" @click.stop.prevent="submitEditUserInfo">保存</el-button>
    </el-form>
  </section>
</template>

<script>
export default {
  data () {
    return {
      form: {
        telephoneNum: null,
        address: ''
      },
      isLoading: false
    }
  },
  props: ['mineInfo'],
  methods: {
    async submitEditUserInfo () {
      console.log(this.form)
      this.$store.dispatch('initMine')
    }
  }
}
</script>

<style lang="stylus">
$mobile-width = 767px

.user-edit-card
  animation fade-mine-card .35s ease-in
  margin 10px auto 0
  padding 20px

  @media (max-width $mobile-width)
    width 100% !important
    .submitButton
      width 100%
</style>
