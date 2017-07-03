<template>
  <section class="login-component">
    <el-form :model="form" :rules="rules" ref="form" class="form">
      <el-form-item prop="username">
        <el-input v-model.trim="form.username" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
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
    let validateUsername = (rule, value, callback) => {
      let len = Array.from(value).length
      if (!value) {
        return callback(new Error('用户名不能为空'))
      }
      if (len < 3 || len > 20) {
        return callback(new Error('用户名长度需 3~20 位'))
      }
      callback()
    }
    let validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      }
      value += ''
      callback()
    }
    return {
      form: {
        username: '',
        password: ''
      },
      isLoading: false,
      rules: {
        username: [{ validator: validateUsername, trigger: 'blur' }],
        password: [{ validator: validatePassword, trigger: 'blur' }]
      }
    }
  }
}
</script>
