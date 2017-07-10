<template>
  <footer class="footer">
    <h3>机 社</h3>
    <ul>
      <li>好</li>
      <li>很好</li>
      <li>非常好</li>
    </ul>
    <p>&copy 2017</p>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.footer
  height 300px
  width 100%
  background #333
  color #fff
  display flex
  justify-content space-around
  align-items center
  flex-direction column
  h3
    font-size 30px
  ul
    text-align center
</style>
