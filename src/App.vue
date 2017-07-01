<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
$mobile-width = 767px

*
  padding: 0
  margin: 0
ul
  list-style-type: none
a
  color: #4688f1
  text-decoration: none

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  .viewport
    width: 100vw
    min-height: 100vh
    overflow: hidden
    h3, p
      margin-bottom: 10px
</style>
