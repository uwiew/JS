<template>
  <figure class="team-card">
    <img :src="require('../../public/mock_team_pic/' + headImg)" alt="name">
    <figcaption>
      <h3>{{ name }}</h3>
      <p>{{ desc }}</p>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    name: String,
    desc: String,
    work: String,
    headImg: String
  }
}
</script>

<style lang="stylus">
$mobile-width = 767px

.team-card
  margin 0 0 30px
  width 18%
  background #fff
  color #222
  border-radius 4px
  overflow hidden
  img
    width 100%
  figcaption
    box-sizing border-box
    padding 0 10px 10px
    h3
      margin-bottom 8px
    p
      margin 0
      text-align left
      font-size 13px
      text-indent 2rem
      line-height 22px
  @media (max-width $mobile-width)
    h3
      font-size 10px
    p
      display none
</style>
