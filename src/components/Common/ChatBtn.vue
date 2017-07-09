<template>
  <svg class="icon" aria-hidden="true" @click="$store.dispatch('popChat', { isShow: true })">
    <use xlink:href="#icon-huodongzhifeiji"></use>
  </svg>
</template>

<script>
export default {
}
</script>


<style lang="stylus">
.icon
  width: 3rem
  height: 3rem
  color #4688f1
  vertical-align: -0.15em
  fill: currentColor
  overflow: hidden
  position fixed
  bottom 20px
  right 20px
  cursor pointer
  z-index 999
</style>
