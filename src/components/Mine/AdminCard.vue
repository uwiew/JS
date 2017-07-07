<template>
  <section class="user-card card admin-card">
    <el-tabs v-model="activeName">
      <el-tab-pane label="商品" name="info" v-if="goodsList">
        <div class="create-goods">
          <el-input v-model="newGoods.name" placeholder="商品名"></el-input>
          <el-input v-model="newGoods.color" placeholder="颜色"></el-input>
          <el-input v-model="newGoods.memory" placeholder="内存(G)"></el-input>
          <el-input v-model="newGoods.agent" placeholder="代理商"></el-input>
          <el-input v-model="newGoods.price" placeholder="价格"></el-input>
          <el-input v-model="newGoods.pic" placeholder="图片"></el-input>
          <el-input type="textarea" :rows="2" placeholder="描述性图片，多个图片请用 ; 隔开" v-model="detailPicList"> </el-input>
          <el-button @click.native="createGoods" type="primary">主要按钮</el-button>
        </div>
        <el-table :data="goodsList" border style="width: 100%" :row-class-name="checkDisable">
          <el-table-column prop="name" label="商品名" width="150">
            <template scope="scope">
              <router-link :to="`/goods/${scope.row._id}`"> {{scope.row.name}} </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="color" label="颜色" width="120"></el-table-column>
          <el-table-column prop="memory" label="内存(G)" width="100"></el-table-column>
          <el-table-column prop="agent" label="代理商" width="300"></el-table-column>
          <el-table-column prop="salesNum" label="销量" width="100"></el-table-column>
          <el-table-column prop="price" label="价格" width="100"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template scope="scope">
              <el-button :disabled="!scope.row.disable" @click="onsale(scope.$index)" type="text" size="small">上架</el-button>
              <el-button :disabled="scope.row.disable" @click="offsale(scope.$index)" type="text" size="small">下架</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="订单" name="address">
        <!--<p>地址：{{ address }}</p>-->
      </el-tab-pane>
    </el-tabs>
  </section>
</template>

<script>
import http from 'axios'

export default {
  data () {
    return {
      activeName: 'info',
      goodsList: [],
      newGoods: {
        detailPicList: []
      }
    }
  },
  computed: {
    detailPicList: {
      set (val) {
        this.newGoods.detailPicList = val.split(';')
      },
      get () {
        let detailPicList = this.newGoods.detailPicList
        return detailPicList.length ? detailPicList.reduce((ele, e) => {
          return ele + ';' + e
        }) : ''
      }
    }
  },
  async created () {
    this.goodsList = (await http.get('/goods/all')).data
  },
  methods: {
    checkDisable (row, index) {
      if (row.disable) {
        return 'disable-row'
      }
    },
    async createGoods () {
      let goods = (await http.post('/admin/createGoods', this.newGoods)).data
      this.$message('创建新的商品成功')
      this.newGoods = {
        detailPicList: []
      }
      this.goodsList.unshift(goods)
    },
    async onsale (index) {
      let phone = this.goodsList[index]
      await http.post('/admin/modifyGoods', {
        id: phone._id,
        disable: false
      })
      this.$message({ type: 'success', message: `已上架 ${phone.name} ${phone.memory}G ${phone.color}` })
      phone.disable = false
    },
    async offsale (index) {
      let phone = this.goodsList[index]
      await http.post('/admin/modifyGoods', {
        id: phone._id,
        disable: true
      })
      this.$message({ type: 'success', message: `已下架 ${phone.name} ${phone.memory}G ${phone.color}` })
      phone.disable = true
    }
  }
}
</script>

<style lang="stylus">
$mobile-width = 767px
.admin-card
  a
    color #4688f1

.create-goods
  margin-bottom 10px
  .el-input
    width 150px
    margin-bottom 10px
  .el-textarea
    width 300px
    margin-bottom 10px
  .el-button
    margin-bottom 10px

.user-card
  animation fade-mine-card .85s ease-in-out
  margin 10px auto 0
  padding 20px
  .disable-row
      color #d85a63
      a
        color #d85a63


  @media (max-width $mobile-width)
    width 100% !important
</style>
