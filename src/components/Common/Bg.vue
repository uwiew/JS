<template>
  <ul class="bg-bubbles">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</template>

<style lang="stylus">
.bg-bubbles
  box-sizing border-box
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: 0
  background: url(../../public/images/bg.jpg)
  li
    position: absolute
    list-style: none
    display: block
    width: 40px
    height: 40px
    bottom: -160px
    animation: square 25s infinite
    transition-timing-function: linear
    border-radius: 4px

    &:nth-child(1)
      left: 10%
      background: rgba(135, 208, 104, 0.53)

    &:nth-child(2)
      left: 20%
      width: 80px
      height: 80px
      animation-duration: 15s
      background: rgba(91, 192, 222, 0.5)
    &:nth-child(3)
      left: 25%
      // background: rgba(238, 238, 238, 0.81)
      background: rgba(153, 102, 255, .8)

    &:nth-child(4)
      left: 40%
      width: 60px
      height: 60px
      animation-duration: 20s
      background: rgba(255, 170, 0, 0.7)

    &:nth-child(7)
      left: 32%
      width: 160px
      height: 160px
      animation-delay: 3s
      background: #afdddf

    &:nth-child(9)
      left: 25%
      width: 20px
      height: 20px
      animation-delay: 1s
      animation-duration: 10s
      background: rgba(239, 22, 15, 0.67)

    &:nth-child(11)
      left: 22%
      width: 60px
      height: 60px
      animation-delay: 3s
      background: rgba(239, 22, 15, 0.5)

    &:nth-child(12)
      left: 5%
      width: 20px
      height: 20px
      animation-delay: 3s
      animation-duration: 10s
      background: rgba(245, 183, 59, 0.76)

    &:nth-child(5)
      left: 70%
      background: rgba(153, 102, 255, 0.4)

    &:nth-child(6)
      left: 80%
      width: 120px
      height: 120px
      background: rgba(245, 183, 59, 0.76)

    &:nth-child(8)
      left: 55%
      width: 20px
      height: 20px
      animation-delay: 2s
      animation-duration: 10s
      background: rgba(135, 208, 104, 0.7)

    &:nth-child(10)
      left: 90%
      width: 160px
      height: 160px
      animation-delay: 3s
      background: rgba(238, 238, 238, 0.5)

    &:nth-child(13)
      left: 85%
      width: 50px
      height: 50px
      animation-delay: 5s
      animation-duration: 10s
      background: rgba(239, 22, 15, 0.6)

    &:nth-child(14)
      left: 70%
      width: 30px
      height: 30px
      animation-delay: 6s
      background: #afdddf

@keyframes square
  0%
    transform: translateY(0)
  100%
    transform: translateY(-1000px) rotate(600deg)

// #wrapper
//   position: fixed
//   height: 100%
//   width: 100%

</style>
