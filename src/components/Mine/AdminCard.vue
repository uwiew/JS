<template>
  <section class="user-card card admin-card">
    <el-tabs v-model="activeName">
      <el-tab-pane label="订单" name="order">
        <p>
          <el-table :data="orderList" border style="width: 100%">
            <el-table-column prop="goods.name" label="商品名字" width="200">
              <template scope="scope">
                <router-link :to="`/goods/${scope.row.goods._id}`"> {{scope.row.name}} </router-link>
              </template>
            </el-table-column>
            <el-table-column prop="price" label="价格"> </el-table-column>
            <el-table-column prop="num" label="数量" width="100"> </el-table-column>
            <el-table-column prop="cost" label="总计" width="100"> </el-table-column>
            <el-table-column prop="address" label="地址" width="100"></el-table-column>
            <el-table-column prop="express" label="快递" width="100"> </el-table-column>
            <el-table-column prop="expressId" label="快递号" width="225"> </el-table-column>
            <el-table-column prop="_id" label="订单号" width="225">
              <template scope="scope">
                <router-link :to="`/orderStatus/${scope.row._id}`"> {{scope.row._id}} </router-link>
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template scope="scope">
                <el-button @click.native="beforeShip(scope)" v-if="scope.row.status === 0" style="color: #d85a63; font-size: 12px;"> 发货 </el-button>
                <p v-if="scope.row.status === 2" style="color: #4688f1; font-size: 12px;"> 已确认收货 </p>
                <p v-if="scope.row.status === 1" style="color: #41b783; font-size: 12px;"> 已发货 </p>
              </template>
            </el-table-column>
          </el-table>
        </p>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
          <el-form :model="expressForm">
            <el-form-item label="快递" label-width="40px">
              <!--<el-input v-model="expressForm.express" auto-complete="off"></el-input>-->
              <el-select v-model="expressForm.express">
                <el-option v-for="item in expressOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="单号" label-width="40px">
              <el-input v-model="expressForm.expressId" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click.native="ship">发 货</el-button>
          </div>
        </el-dialog>
      </el-tab-pane>
      <el-tab-pane label="商品" name="info" v-if="goodsList">
        <el-collapse>
          <el-collapse-item title="新增商品" name="1">
            <div class="create-goods">
              <el-input v-model="newGoods.name" placeholder="商品名"></el-input>
              <el-input v-model="newGoods.color" placeholder="颜色"></el-input>
              <el-input v-model="newGoods.memory" placeholder="内存(G)"></el-input>
              <el-input v-model="newGoods.agent" placeholder="代理商"></el-input>
              <el-input v-model="newGoods.price" placeholder="价格"></el-input>
              <el-input v-model="newGoods.pic" placeholder="图片"></el-input>
              <el-input type="textarea" :rows="2" placeholder="描述性图片，多个图片请用 ; 隔开" v-model="detailPicList"> </el-input>
              <el-button @click.native="createGoods" type="primary">添加商品</el-button>
            </div>
          </el-collapse-item>
        </el-collapse>
        <el-table :data="goodsList" border style="width: 100%" :row-class-name="checkDisable">
          <el-table-column prop="name" label="商品名" width="150">
            <template scope="scope">
              <router-link :to="`/goods/${scope.row._id}`"> {{scope.row.name}} </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="color" label="颜色" width="120"></el-table-column>
          <el-table-column prop="memory" label="内存(G)" width="100"></el-table-column>
          <el-table-column prop="agent" label="代理商" width="300"></el-table-column>
          <el-table-column prop="salesNum" label="销量" width="100"></el-table-column>
          <el-table-column prop="price" label="价格" width="100"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template scope="scope">
              <el-button :disabled="!scope.row.disable" @click="onsale(scope.$index)" type="text" size="small">上架</el-button>
              <el-button :disabled="scope.row.disable" @click="offsale(scope.$index)" type="text" size="small">下架</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="私信" name="chat">
        <ul class="chat-list" @click="popChat($event)">
          <li v-for="(value,key) in chatList" :key="key" :f-listKey="key">
            <h3>{{ value[0].name }}</h3>
            <p>{{ value[value.length - 1].message }}</p>
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </section>
</template>
<script>
import http from 'axios'
import io from 'socket.io-client'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      activeName: 'order',
      goodsList: [],
      newGoods: {
        detailPicList: []
      },
      dataOrderList: [],
      dialogFormVisible: false,
      expressFormIndex: 0,
      expressForm: {
        id: 0,
        express: '',
        expressId: ''
      },
      expressOptions: [
        { value: '不通', label: '不通' },
        { value: '援通', label: '援通' },
        { value: '噗通', label: '噗通' },
        { value: '马通', label: '马通' },
        { value: '吮峰', label: '吮峰' },
        { value: '孕达', label: '孕达' },
        { value: '上通', label: '上通' },
        { value: '下通', label: '下通' }
      ],
      chatData: require('../../store/mock_chat'),
      socket: null
    }
  },
  computed: {
    detailPicList: {
      set (val) {
        this.newGoods.detailPicList = val.split(';')
      },
      get () {
        let detailPicList = this.newGoods.detailPicList
        return detailPicList.length ? detailPicList.reduce((ele, e) => {
          return ele + ';' + e
        }) : ''
      }
    },
    ...mapState({
      chatList: state => state.adminChat.chatList
    }),
    orderList () {
      return this.dataOrderList.map(function (ele) {
        let { name, color, agent } = ele.goods
        ele.name = name + ' ' + color + ' ' + agent
        ele.price = ele.cost / ele.num
        return ele
      })
    }
  },
  watch: {
    '$store.state.adminChat.newChat': function (newValue) {
      this.socket.emit('chatWithUser', newValue)
      this.$store.commit('addAdminChat', newValue)
    }
  },
  async created () {
    this.goodsList = (await http.get('/goods/all')).data
    this.dataOrderList = (await http.get('/admin/orderList')).data
  },
  methods: {
    checkDisable (row, index) {
      if (row.disable) {
        return 'disable-row'
      }
    },
    async createGoods () {
      let goods = (await http.post('/admin/createGoods', this.newGoods)).data
      this.$message('创建新的商品成功')
      this.newGoods = {
        detailPicList: []
      }
      this.goodsList.unshift(goods)
    },
    async onsale (index) {
      let phone = this.goodsList[index]
      await http.post('/admin/modifyGoods', {
        id: phone._id,
        disable: false
      })
      this.$message({ type: 'success', message: `已上架 ${phone.name} ${phone.memory}G ${phone.color}` })
      phone.disable = false
    },
    async offsale (index) {
      let phone = this.goodsList[index]
      await http.post('/admin/modifyGoods', {
        id: phone._id,
        disable: true
      })
      this.$message({ type: 'success', message: `已下架 ${phone.name} ${phone.memory}G ${phone.color}` })
      phone.disable = true
      this.goodsList[index].disable = true
    },
    async ship () {
      this.expressForm.status = 1
      await http.post('/admin/modifyOrder', this.expressForm)
      let order = this.dataOrderList[this.expressFormIndex]
      order.status = 1
      order.express = this.expressForm.express
      order.expressId = this.expressForm.expressId
      this.expressForm = {
        express: '',
        expressId: 0
      }
      this.dialogFormVisible = false
      this.$message('已发货')
    },
    beforeShip (scope) {
      this.expressForm.expressId = Date.now()
      this.dialogFormVisible = true
      this.expressForm.id = scope.row._id
      this.expressFormIndex = scope.$index
    },
    popChat (e) {
      let key = e.target.getAttribute('f-listKey')
      this.$store.commit('setChatList', this.chatList[key])
      this.$store.commit('popChat', true)
    }
  },
  async mounted () {
    this.socket = io()
    this.socket.on('connect', () => {
      this.socket.emit('admin')
    })
    this.socket.on('orderCreate', (data) => {
      this.$message('您有新的订单请及时处理塞')
      this.dataOrderList.unshift(data)
    })
    this.socket.on('chat', (data) => {
      this.$store.commit('addAdminChat', data)
      // console.log(data)
      // socket.emit('chatWithUser', {from: data.from, hello: 'world'})
    })
  }
}
</script>

<style lang="stylus">
$mobile-width = 767px
.admin-card
  a
    color #4688f1

.create-goods
  margin-bottom 10px
  .el-input
    width 150px
    margin-bottom 10px
  .el-textarea
    width 300px
    margin-bottom 10px
  .el-button
    margin-bottom 10px

.user-card
  animation fade-mine-card .85s ease-in-out
  margin 10px auto 0
  padding 20px
  .disable-row
      color #d85a63
      a
        color #d85a63

.chat-list
  margin 0
  border 1px solid #dfe6ec
  li
    border-bottom 1px dashed #dfe6ec
    cursor pointer
    display flex
    align-items center
    justify-content space-between
    padding 20px
    p
      color #abb0bc
    &:last-child
      border-bottom none
  @media (max-width $mobile-width)
    width 100% !important
</style>
