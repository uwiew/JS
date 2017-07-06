<template>
  <section class="user-card card">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="商品" name="info" v-if="goodsList">
        <el-table :data="goodsList" border style="width: 100%" :row-class-name="checkDisable">
          <el-table-column prop="name" label="商品名" width="150"></el-table-column>
          <el-table-column prop="color" label="颜色" width="120"></el-table-column>
          <el-table-column prop="memory" label="内存(G)" width="120"></el-table-column>
          <el-table-column prop="agent" label="代理商" width="120"></el-table-column>
          <el-table-column prop="salesNum" label="销量"></el-table-column>
          <el-table-column prop="price" label="价格"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template scope="scope">
              <el-button @click="handleClick" type="text" size="small">上架</el-button>
              <el-button type="text" size="small">下架</el-button>
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
export default {
  data () {
    return {
      activeName: 'info'
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
  methods: {
    handleClick (tab, event) {
      console.log(event)
    },
    checkDisable (row, index) {
      if (row.disable) {
        return 'disable-row'
      }
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
  .disable-row
    color #d85a63

  @media (max-width $mobile-width)
    width 100% !important
</style>
