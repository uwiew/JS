<template>
  <section class="index">
    <el-carousel class="carousel">
      <el-carousel-item v-for="(item, idx) in bannerPic" :key="idx" :style="{background: `#333 url(${ item }) center center no-repeat`, backgroundSize: 'cover'}">
      </el-carousel-item>
    </el-carousel>

    <div class="sales-info">
      <h2>大数统计</h2>
      <div class="sales-list">
        <!--<canvas class="sales" id="myChart" width="100" height="100"></canvas>-->
        <div class="sales">
          <canvas id="chartBuyNum"></canvas>
        </div>
        <div class="sales">
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
      ]
    }
  },
  mounted () {
    this.initCanvas()
  },
  methods: {
    async initCanvas () {
      let chartBuyNumId = document.getElementById('chartBuyNum')
      const chart = new Chart(chartBuyNumId, chartBuyNumOption)
      console.log(chart)

      // 销量饼图
      let goodsList = (await http.get('/goods/list')).data
      goodsList = goodsList.sort((a, b) => b.salesNum - a.salesNum).slice(0, 5)
      chartSalesNumOption.data.labels = goodsList.map(el => el.name + ' ' + el.memory + 'G')
      chartSalesNumOption.data.datasets[0].data = goodsList.map(el => el.salesNum)
      console.log(chartSalesNumOption)
      // let chartBuyNumId = document.getElementById('chartSalesNum')
      // const chart = new Chart(chartBuyNumId, chartSalesNumOption)
      // console.log(chart)
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
    justify-content: space-between
    .sales
      width 40vw
      // padding: 20px
      // box-sizing: border-box

  @media (max-width: $mobile-width)
    .sales-list
      .sales
        width 100vw
        margin-bottom: 12px
        &:last-child
          margin-bottom: 0
</style>
