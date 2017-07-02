<template>
  <section class="forget-component">
    <el-form :model="form" class="form">
      <el-form-item>
        <el-input v-model.trim="form.username" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model.trim="form.telephone" placeholder="手机号码"></el-input>
      </el-form-item>
      <button class="button" :disabled="isLoading" v-loading.lock="isLoading">找回密码</button>
    </el-form>
  </section>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        telephone: ''
      },
      isLoading: false
    }
  }
}
</script>
