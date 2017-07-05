<template>
  <section class="mine">
    <div class="mine-card card" v-if="mineInfo">
      <header>
        <h2>{{ mineInfo.name }}</h2>
        <el-button class="submitInfo">修改资料</el-button>
      </header>
      <div class="head-img">
        <img :src="mineInfo.headImgUrl" alt=""> </div>
      <div class="user-list">
        <h3>累计剁手
          <span class="mark"> ￥{{ mineInfo.buyNum }}</span>
        </h3>
        <h3>您已超过了
          <span class="mark"> 96% </span>的机友</h3>
      </div>
    </div>
    <user-card v-if="mineInfo && !mineInfo.isAdmin" :telephoneNum="+mineInfo.telephoneNum" :money="mineInfo.money" :address="mineInfo.address"> </user-card>
    <admin-card v-else></admin-card>
  </section>
</template>

<script>
import UserCard from '../components/Mine/UserCard'
import AdminCard from '../components/Mine/AdminCard'

export default {
  computed: {
    mineInfo () {
      return this.$store.state.mine.mine || {}
    }
  },
  mounted () {
    let interval = window.setInterval(() => {
      if (this.$store.state.mine.isFinishUpdate) {
        window.clearInterval(interval)
        this.$store.state.mine.mine || this.$router.replace('/login')
      }
    }, 500)
  },
  components: {
    UserCard,
    AdminCard
  }
}
</script>

<style lang="stylus">
$mobile-width = 767px

.mine
  h2, h3, p
    margin 0
  .card
    width 70%
    background #fff
    border-radius 4px
    box-shadow 1px 2px 5px rgba(0,0,0,0.1)
    box-sizing border-box
    overflow hidden

  .mine-card
    margin: 0 auto
    animation fade-mine-card .45s ease-in-out
    position relative
    header
      height 200px
      background #4688f1
      position relative
      h2, .submitInfo
        position absolute
      h2
        bottom 18px
        color #fff
        left 180px
        font-size 50px
        letter-spacing .1rem
        text-shadow: -3px 3px 0 rgba(0,0,0,.1)
      .submitInfo
        right 10px
        bottom -18px
    .head-img
      margin -70px 20px 15px
      width 140px
      border 5px solid #fff
      border-radius 4px
      box-sizing border-box
      z-index 100
      position relative
      img
        width 100%
    .user-list
      padding 25px 0 20px 180px
      box-sizing border-box
      position absolute
      top 200px
      color #5e6d82
      font-weight 300
      .mark
        color #4688f1
    @media (max-width $mobile-width)
      width 100%
      header
        h2
          left 140px
          bottom 8px
      .head-img
        margin -60px 10px 5px
        width 120px
      .user-list
        padding-left 140px
        font-size 12px

  @keyframes fade-mine-card
    0%
      opacity: 0
      transform translateY(100px)
    100%
      opacity 1
      transform none
</style>
