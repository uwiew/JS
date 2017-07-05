<template>
  <section class="signup-component">
    <el-form :model="form" :rules="rules" ref="form" class="form">
      <el-form-item prop="username">
        <el-input v-model.trim="form.username" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model.trim="form.password" placeholder="密码" type="password"></el-input>
      </el-form-item>
      <el-form-item prop="repeat">
        <el-input v-model.trim="form.repeat" placeholder="重复密码" type="password"></el-input>
      </el-form-item>
      <button class="button" :disabled="isLoading" v-loading.lock="isLoading" @click.stop.prevent="submitSignup">注 册</button>
    </el-form>
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
      } else {
        if (this.form.repeat !== '') {
          this.$refs.form.validateField('repeat')
        }
        callback()
      }
    }
    let validateRepeat = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        username: '',
        password: '',
        repeat: ''
      },
      isLoading: false,
      rules: {
        username: [{ validator: validateUsername, trigger: 'blur' }],
        password: [{ validator: validatePassword, trigger: 'blur' }],
        repeat: [{ validator: validateRepeat, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitSignup () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          try {
            console.log(this.form)
            await this.$store.dispatch('fetchSignup', this.form)
            this.$message('注册成功，今后你我就是好机友了')
            this.$router.replace('/login')
          } catch (e) {
            this.$message.error(`${e.response.data[1]}，吔屎啦你`)
          }
        } else {
          return false
        }
      })
    }
  }
}
</script>
