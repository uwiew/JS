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
      <el-form-item prop="address" label="新的密码" label-width="68px">
        <el-input v-model.trim="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="头像上传" label-width="68px">
        <el-progress v-show="imgLoading" :percentage="progress" :status="progress === 100 ? 'success' : ''"></el-progress>
        <el-upload class="avatar-uploader" action="http://upload-z2.qiniu.com" :on-progress="loading" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" :data="token">
          <img v-if="form.headImgUrl" :src="form.headImgUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-button type="primary" :disabled="isLoading" v-loading.lock="isLoading" class="submitButton" @click.stop.prevent="submitEditUserInfo">保存</el-button>
    </el-form>
  </section>
</template>

<script>
import http from 'axios'

export default {
  data () {
    return {
      form: {
        telephoneNum: this.mineInfo.telephoneNum,
        address: this.mineInfo.address,
        headImgUrl: '',
        password: ''
      },
      imgLoading: false,
      progress: 0,
      isLoading: false,
      token: {}
    }
  },
  props: ['mineInfo'],
  methods: {
    loading (event, file, fileList) {
      if (event.lengthComputable) {
        this.progress = (event.loaded / event.total * 100 | 0)
      }
    },
    async submitEditUserInfo () {
      let data = {}
      for (let i in this.form) {
        if (this.form[i]) {
          data[i] = this.form[i]
        }
      }
      await http.post('/userPrivate/modify', data)
      this.$store.dispatch('initMine')
      this.$message('成功修改')
      this.$emit('close')
    },
    handleAvatarSuccess (res, file) {
      this.form.headImgUrl = `http://osidtmaiq.bkt.clouddn.com/${res.key}?imageView2/1/w/400/h/400/interlace/1/q/75|imageslim`
    },
    async beforeAvatarUpload (file) {
      this.imgLoading = true
      this.progress = 0
      this.token = (await http.get('/userPrivate/uploadToken')).data
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
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #20a0ff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
