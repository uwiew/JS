<template>
  <section class="signup-component">
    <el-form :model="form" class="form">
      <el-form-item>
        <el-input v-model.trim="form.username" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model.trim="form.password" placeholder="密码" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model.trim="form.repeat" placeholder="重复密码" type="password"></el-input>
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
        password: '',
        repeat: ''
      },
      isLoading: false
    }
  }
}
</script>
