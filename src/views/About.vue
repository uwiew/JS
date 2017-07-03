<template>
  <section class="about">
    <div class="bg"></div>
    <div class="list">
      <div class="banner">
        <h2>关于机社</h2>
        <p>踏踏实实做人，认认真真搞机</p>
      </div>
      <div class="info">
        <img src="../public/images/logo.png" alt="logo" class="logo">
        <p>这是一个<del>神奇的网站</del>从事产品代理及销售配送手机的网上购物平台。</p>
        <p>我们始终坚持用户至上，用心服务于客户的经营理念，坚持用自己的服务去打动客户。</p>
      </div>
      <div class="banner">
        <h2>关于团队</h2>
        <p>一个充满活力鼓励划水的团队</p>
      </div>
      <div class="info">
        <p>既然我们已经起航，</p>
        <p>就让我们完美的降落。</p>
      </div>
      <div class="team-info info">
        <h2>团队成员</h2>
        <div class="team-list">
          <team-card
            v-for="(item, idx) in teamList"
            :name="item.name"
            :desc="item.desc"
            :work="item.work"
            :headImg="item.headImg"
            :key="idx">
          </team-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TeamCard from '../components/About/TeamCard'

export default {
  computed: {
    teamList () {
      return this.$store.state.teamList
    }
  },
  components: {
    TeamCard
  }
}
</script>

<style lang="stylus">
$mobile-width = 767px

.about
  padding 0 !important
  h2, h3, p
    margin 0
  .bg
    background transparent url('../public/images/about_1.jpg') center center no-repeat
    background-size cover
    position fixed
    z-index 1
    top 0
    left 0
    width 100%
    height 100vh
  .list
    position relative
    z-index 2
  .banner
    min-height 50vh
    display flex
    justify-content center
    align-items center
    flex-direction column
    color #fff
    &:first-child
      background transparent url('../public/images/about_0.jpg') center center no-repeat
      background-size cover
    &:nth-child(3)
      background transparent
    h2
      font-size 3rem
      font-weight 300
      margin-bottom 10px
    p
      letter-spacing .288rem
  .info
    padding 100px
    box-sizing border-box
    text-align center
    background #fff
    letter-spacing .128rem
    line-height 30px
    .logo
      width 80px
      margin-bottom 20px
      animation shake-logo 3s infinite 3s
  .team-info
    padding 60px 100px
    background #222
    transition .5s all ease-in
    .team-list
      display flex
      justify-content space-between
      flex-wrap wrap
    h2
      color #fff
      margin-bottom 60px
      font-weight 300
      font-size 48px

  @media (max-width $mobile-width)
    .info
      padding 30px 10px
      font-size 13px
    .team-info
      h2
        margin-bottom 30px

  @keyframes shake-logo
    0% {transform: rotate(0deg)}
    5% {transform: rotate(16deg)}
    10% {transform: rotate(-14deg)}
    15% {transform: rotate(12deg)}
    20% {transform: rotate(-10deg)}
    25% {transform: rotate(8deg)}
    30% {transform: rotate(-6deg)}
    35% {transform: rotate(4deg)}
    40% {transform: rotate(-2deg)}
    45% {transform: rotate(1deg)}
    50% {transform: rotate(0deg)}
    70% {transform: rotate(0deg)}
    100% {transform: rotate(0deg)}
</style>
