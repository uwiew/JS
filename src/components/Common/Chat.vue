<template>
  <section class="chat" v-if="isShow" @click.self="closeChat">
    <div class="chat-card">
      <header>
        <h3>聊天窗口</h3>
        <!--icon-->
        <span @click.self="closeChat">CLOSE</span>
      </header>
      <main>
        <!-- 聊天界面 -->
        <ul>
          <li v-for="(item,index) in chatList" :key="index" :class="{ isMine: myName === item.name }">
            <h5>{{item.name}}</h5>
            <p>{{item.message}}</p>
          </li>
        </ul>
      </main>
      <footer>
        <el-input v-model="message" @keyup.13.native="send"></el-input>
        <el-button @click.native="send">SEND</el-button>
      </footer>
    </div>
  </section>
</template>

<script>
import io from 'socket.io-client'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      message: '',
      socket: null
    }
  },
  computed: {
    ...mapState({
      isShow: state => state.chat.isShow,
      chatList: state => state.chat.chatList,
      isLogin: state => !!state.mine.mine,
      isAdmin: state => state.mine.mine ? state.mine.mine.isAdmin : false,
      myName: state => state.mine.mine.name
    })
  },
  mounted () { },
  methods: {
    createSocket () {
      if (!this.isAdmin && this.isLogin) {
        this.socket = io()
        this.socket.on('chat', (data) => {
          this.$store.commit('addChat', data)
        })
      }
    },
    toggleChat (isShow) {
      this.isLogin ? this.$store.dispatch('popChat', { isShow }) : this.$router.replace('/login')
    },
    send () {
      // admin用户的处理
      if (this.isAdmin) {
        this.$store.commit('setNewChat', {
          name: 'admin', message: this.message, from: this.chatList[0].from
        })
        this.message = ''
        return
      }
      // 普通用户的处理
      let callback = () => {
        let name = this.$store.state.mine.mine.name
        let data = { name: name, message: this.message, from: this.socket.id }
        this.$store.commit('addChat', data)
        this.socket.emit('chatWithAdmin', data)
        this.message = ''
      }
      if (!this.socket) {
        this.createSocket()
        this.socket.on('connect', () => {
          callback()
        })
        return
      }
      callback()
    },
    closeChat () {
      this.$store.dispatch('popChat', { isShow: false })
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
    display flex
    flex-direction column
    justify-content space-between
    align-items center
    min-width 300px
    max-width 600px
    width 80%
    height 70vh
    border-radius 4px
    background #fff
    box-shadow 1px 2px 5px rgba(0,0,0,0.1)
    box-sizing border-box
    overflow hidden
    position absolute
    left 50%
    top 50%
    margin 0px auto
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
      width 100%
      box-sizing border-box
      position fixed
      top 0
      left 0
      span
        cursor pointer
    main
      padding 86px 20px 76px
      overflow-y auto
      width 100%
      box-sizing border-box
      h5
        margin 0
        font-size 20px
      .isMine
        text-align right
        h5
          color #4688f1
      // p
      //   text-indent 2rem
    footer
      display flex
      justify-content space-between
      align-items center
      position fixed
      width 100%
      padding 20px
      box-sizing border-box
      bottom 0
      background #f7f8fa
      div:first-child
        margin-right 20px
</style>
