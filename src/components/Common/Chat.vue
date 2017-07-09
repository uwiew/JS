<template>
  <section class="chat" v-if="isShow" @click.self="toggleChat(false)">
    <div class="chat-card">
      <header>
        <h3>HIS NAME</h3>
        <!--icon-->
        <span>CLOSE</span>
      </header>
      <main>
        <!-- 聊天界面 -->
        <ul>
          <li>HI</li>
          <li>HELLO</li>
          <li>FUCKU</li>
        </ul>
      </main>
      <footer>
        <el-input></el-input>
        <el-button>SEND</el-button>
      </footer>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    isShow () {
      return this.$store.state.chat.isShow
    }
  },
  mounted () {
    console.log(this.$store.state.chat.isShow)
  },
  methods: {
    toggleChat (isShow) {
      this.$store.dispatch('popChat', { isShow })
    }
  }
}
</script>

<style lang="stylus">
$mobile-width 767px

.chat
  width 100vw
  height 100vh
  background rgba(0, 0, 0, .65)
  position fixed
  top 0
  left 0
  bottom 0
  right 0
  z-index 999
  .chat-card
    min-width 300px
    max-width 600px
    width 80%
    height 80vh
    border-radius 4px
    background #fff
    box-shadow 1px 2px 5px rgba(0,0,0,0.1)
    box-sizing border-box
    overflow hidden
    position absolute
    left 50%
    top 50%
    margin 30px auto
    transform translate(-50%, -50%)
    z-index 999
    @media (max-width $mobile-width)
      width 96%
    header
      display flex
      align-items center
      justify-content space-between
      background #4688f1
      padding 10px 20px
      color #fff
    main
      padding 20px
    footer
      padding 20px
</style>
