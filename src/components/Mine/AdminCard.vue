<template>
  <section class="user-card card">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="商品" name="info">

      </el-tab-pane>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            fixed
            prop="date"
            label="日期"
            width="150">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="province"
            label="省份"
            width="120">
          </el-table-column>
          <el-table-column
            prop="city"
            label="市区"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="300">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            width="120">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template scope="scope">
              <el-button @click="handleClick" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      <el-tab-pane label="订单" name="address">
        <!--<p>地址：{{ address }}</p>-->
      </el-tab-pane>
    </el-tabs>
  </section>
</template>

<script>
import GoodsCard from '../Common/GoodsCard'

export default {
  data () {
    return {
      activeName: 'info',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  },
  computed: {
    goodsList () {
      return this.$store.state.goodsList.goodsList
    }
  },
  async created () {
    await this.$store.dispatch('addGoods')
  },
  props: {
    telephoneNum: Number,
    money: Number,
    address: String
  },
  methods: {
    handleClick (tab, event) {
      console.log(event)
    }
  },
  components: {
    GoodsCard
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
