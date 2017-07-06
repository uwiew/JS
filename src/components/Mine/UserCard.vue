<template>
  <section class="user-card card">
    <el-tabs v-model="activeName">
      <el-tab-pane label="资本资料" name="info">
        <p>手机号码：{{ telephoneNum }}</p>
        <p>余额：￥{{ money }}</p>
      </el-tab-pane>
      <el-tab-pane label="订单查询" name="order">
        <p>
          <el-table :data="orderList" border style="width: 100%">
            <el-table-column prop="_id" label="订单号" width="230"> </el-table-column>
            <el-table-column prop="name" label="商品名字" width="200"> </el-table-column>
            <el-table-column prop="price" label="价格" width="100"> </el-table-column>
            <el-table-column prop="num" label="数量" width="100"> </el-table-column>
            <el-table-column prop="cost" label="总计" width="100"> </el-table-column>
            <el-table-column prop="address" label="地址" width="300"> </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template scope="scope">
                <el-button @click="confirm(scope.$index)" type="text" size="small" v-show="orderList[scope.$index].status === 1">
                  确认收货
                </el-button>
                <p v-show="orderList[scope.$index].status === 1">
                  等待商家发货
                </p>
              </template>
            </el-table-column>
          </el-table>
        </p>
      </el-tab-pane>
      <el-tab-pane label="地址管理" name="address">
        <p>地址：{{ address }}</p>
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
      dataOrderList: []
    }
  },
  computed: {
    orderList () {
      return this.dataOrderList.map(function (ele) {
        let {name, color, agent} = ele.goods
        ele.name = name + color + agent
        ele.price = ele.cost / ele.num
        return ele
      })
    }
  },
  props: {
    telephoneNum: Number,
    money: Number,
    address: String
  },
  async mounted () {
    this.dataOrderList = (await http.get('/userPrivate/orderList')).data
  },
  methods: {
    async confirm (index) {
      let list = this.dataOrderList[index]
      await http.get(`/userPrivate/confirm?orderId=${list._id}`)
      list[index].status = 2
    }
  }
}
</script>

<style lang="stylus">
$mobile-width = 767px

.user-card
  animation fade-mine-card .85s ease-in-out
  margin 10px auto 0
  padding 20px

  @media (max-width $mobile-width)
    width 100% !important
</style>
