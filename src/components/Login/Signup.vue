<template>
  <section class="signup-component">
    <el-form label-width="68px" :model="form" class="form">
      <el-form-item label="账号">
        <el-input v-model.trim="form.username" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model.trim="form.password" placeholder="请输入密码" type="password"></el-input>
      </el-form-item>
      <el-form-item label="重复密码">
        <el-input v-model.trim="form.password" placeholder="再次输入密码" type="password"></el-input>
      </el-form-item>
      <button class="button" :disabled="isLoading" v-loading.lock="isLoading">注 册</button>
    </el-form>
  </section>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      isLoading: false
    }
  }
}
</script>
