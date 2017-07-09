<template>
  <div id="app">
    <nav>
      <router-link to="/" exact>首页</router-link>
      <router-link to="/goods">商品</router-link>
      <router-link to="/about">关于</router-link>
      <div class="right">
        <router-link to="/mine">我の</router-link>
      </div>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view class="viewport"></router-view>
    </transition>

    <chat-btn></chat-btn>
    <transition name="fade-chat" mode="out-in">
      <chat></chat>
    </transition>
  </div>
</template>

<script>
import Chat from './components/Common/Chat'
import ChatBtn from './components/Common/ChatBtn'

export default {
  name: 'app',
  mounted () {
    this.$store.dispatch('initMine')
  },
  components: {
    Chat,
    ChatBtn
  }
}
</script>

<style lang="stylus">
$mobile-width = 767px
$common-padding = 100px
$nav-height = 80px
$default-color = #4688f1

body
  background #f7f8fa
ul
  padding 0
  list-style-type: none
a
  text-decoration: none
  &:link, &:visited
  &:hover, &:active
    color $default-color
::selection
  background $default-color
  color #fff

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  overflow: hidden
  background #f7f8fa
  position relative
  nav
    height: $nav-height
    line-height: $nav-height
    background: #fff
    z-index 100
    box-sizing: border-box
    padding: 0 $common-padding
    transition: 1s all
    font-size: 0
    width: 100%
    box-shadow: 0px 1px 3px rgba(0,0,0,.16)
    position: relative
    a
      font-weight: 500
      font-size: 16px
      color: #666
      padding: 29px
      position: relative
      transition: .2s color ease-in
      &:hover
        color: $default-color
      &.router-link-active:after
        content: ""
        display: block
        width: 100%
        height: 3px
        background: $default-color
        position: absolute
        left: 0
        bottom: 0
    .right
      position: absolute
      right: $common-padding
      top: 0
      a
        color: $default-color
  .viewport
    width: 100vw
    min-height: 100vh - $nav-height
    overflow: hidden
    box-sizing border-box
    padding 30px $common-padding
    @media (max-width $mobile-width)
      padding 30px 10px
  @media (max-width: $mobile-width)
    nav
      padding: 0 5px
      height: 60px
      line-height: 60px
      a
        padding: 20px
        font-size: 13px
      .right
        right: 5px

  .fade-enter-active, .fade-leave-active
    transition: all .18s ease
    // transform: translateX(0)
  .fade-enter, .fade-leave-active
    opacity: 0
    transform: translateX(20px)

  .fade-chat-enter-active, .fade-chat-leave-active
    transition: all .15s ease-in-out
  .fade-chat-enter, .fade-chat-leave-active
    opacity: 0
    transform: translateY(20px)
</style>
