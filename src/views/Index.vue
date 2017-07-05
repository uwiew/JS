<template>
  <section class="index">
    <el-carousel class="carousel">
      <el-carousel-item v-for="(item, idx) in bannerPic" :key="idx" :style="{background: `#333 url(${ item }) center center no-repeat`, backgroundSize: 'cover'}">
      </el-carousel-item>
    </el-carousel>

    <div class="sales-info">
      <h2>大数统计</h2>
      <div class="sales-list">
        <div class="sales">
          <h3>剁手排行</h3>
          <canvas id="chartBuyNum" width="100" height="100"></canvas>
        </div>
        <div class="sales">
          <h3>销量份额</h3>
          <canvas id="chartSalesNum"></canvas>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import http from 'axios'
import Chart from 'chart.js'
import chartBuyNumOption from '../components/Index/chartBuyNum.js'
import chartSalesNumOption from '../components/Index/chartSalesNum.js'

export default {
  data () {
    return {
      bannerPic: [
        require('../public/images/index_banner_0.jpg'),
        require('../public/images/index_banner_1.jpg')
      ],
      chartBuyNum: null,
      chartSalesNum: null
    }
  },
  mounted () {
    this.initCanvas()
  },
  methods: {
    async initCanvas () {
      let chartBuyNumId = document.getElementById('chartBuyNum')
      this.chartBuyNum = new Chart(chartBuyNumId, chartBuyNumOption)

      // 销量饼图
      let goodsList = (await http.get('/goods/list')).data
      goodsList = goodsList.sort((a, b) => b.salesNum - a.salesNum).slice(0, 5)

      chartSalesNumOption.data.labels = goodsList.map(el => el.name + ' ' + el.memory + 'G')
      chartSalesNumOption.data.datasets[0].data = goodsList.map(el => el.salesNum)

      let chartSalesNumId = document.getElementById('chartSalesNum')
      this.chartSalesNum = new Chart(chartSalesNumId, chartSalesNumOption)
    }
  }
}
</script>

<style lang="stylus">
$mobile-width = 767px

.index
  padding 0 !important
  .carousel
    width: 100%
    margin-bottom: 20px
  .sales-info
    width: 90%
    margin: 0 auto
    overflow: hidden
    h2
      text-align: center
      border-bottom: 3px dashed #eee
      padding-bottom: 10px
  .sales-list
    // width 50vw
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    .sales
      width 30vw
      // padding: 20px
      // box-sizing: border-box

  @media (max-width: $mobile-width)
    .sales-list
      .sales
        width 80vw
        margin-bottom: 50px
        &:last-child
          margin-bottom: 0
</style>
