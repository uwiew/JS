<template>
  <section class="index">
    <el-carousel class="carousel">
      <el-carousel-item v-for="(item, idx) in bannerPic" :key="idx" :style="{background: `#333 url(${ item }) center center no-repeat`, backgroundSize: 'cover'}">
      </el-carousel-item>
    </el-carousel>

    <!--<div class="sales-info">
      <h2>近期活动</h2>
      <div class="sales-list">
        <div class="sales" v-for="(item, idx) in salesList" :key="idx" :style="{ background: item.color }">{{ item.describe }}</div>
      </div>
    </div>-->
  </section>
</template>

<script>
export default {
  data () {
    return {
      bannerPic: [
        require('../public/images/index_banner_0.jpg'),
        require('../public/images/index_banner_1.jpg')
      ]
      // salesList: [
      //   { color: '#d85a63', describe: '黄**带着他的小姨子跑了，我们拿着手机抵工资，原价998今天只要20块，统统只要20块' },
      //   { color: '#fab646', describe: '满666送5.20' },
      //   { color: '#41b783', describe: '最后三天，低价甩卖小组长' },
      //   { color: '#4688f1', describe: '我编不下去了' }
      // ]
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
    display: flex
    justify-content: space-around
    .sales
      width: 20%
      border-radius: 4px
      color: #fff
      padding: 20px
      box-sizing: border-box

  @media (max-width: $mobile-width)
    .sales-list
      flex-wrap: wrap
      .sales
        width: 100%
        margin-bottom: 12px
        &:last-child
          margin-bottom: 0
</style>
