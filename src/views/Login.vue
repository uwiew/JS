<template>
  <section class="login">
    <div class="login-card">
      <h1>机设</h1>
      <p>踏踏实实做人，认认真真搞机。</p>
      <transition name="login-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

    <bg></bg>
  </section>
</template>

<script>
import bg from '../components/Common/Bg'
export default {
  mounted () {
  },
  components: {
    bg
  }
}
</script>

<style lang="stylus">
$default-color = #4688f1

.login
  .login-card
    position relative
    margin 6% auto
    background #fff
    width: 300px
    padding 30px 15px
    border-radius 4px
    box-sizing border-box
    z-index 999
    overflow hidden
    box-shadow 0 1px 2px rgba(0, 0, 0, 0.2)
    animation rotate-login-card .45s ease-in-out
    h1
      margin: 0 0 5px
      text-align: center
    p
      font-size: 13px
      font-weight 500
      margin: 0
      text-align: center
    button
      padding: 10px
      background: $default-color
      color: #fff
      cursor: pointer
      width: 100%
      margin-bottom: 10px
      border: 1px solid $default-color
    a.button
      display: inline-block
      width: 48%
      padding: 10px
      margin-right: 4%
      box-sizing: border-box
      text-align: center
      border: 1px solid $default-color
      color: $default-color
      transition .16s all
      &:hover
        background: $default-color
        color: #fff
      &:last-child
        margin-right: 0
    a.back
      color: $default-color
    .form
      padding-top: 44px
    .button
      border-radius: 4px
      outline: unset
    .other-link
      display: flex

  .icon
    display: block
    width: 4rem
    height: 4rem
    vertical-align: -0.15em
    fill: currentColor
    overflow: hidden
    margin: 0 auto

  .login-fade-enter-active, .login-fade-leave-active
    transition: all .14s ease
  .login-fade-enter, .login-fade-leave-active
    opacity: 0
    transform: translateY(10px)

  @keyframes rotate-login-card
    0%
      opacity: 0
      transform rotate(15deg) translateY(100px)
    100%
      opacity 1
      transform none

</style>
