<template>
  <section class="login-component">
    <el-form :model="form" class="form">
      <el-form-item>
        <el-input v-model.trim="form.username" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model.trim="form.password" placeholder="密码" type="password"></el-input>
      </el-form-item>
      <button class="button" :disabled="isLoading" v-loading.lock="isLoading">登 录</button>
    </el-form>
    <div class="other-link">
      <router-link to="/signup" class="button">注 册</router-link>
      <router-link to="/forget" class="button">忘 记</router-link>
    </div>
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
