<template>
  <div>
    <div class="order-item order-item-1">
      <div class="order-head">产品名称</div>
    </div>
    <div class="order-item order-item-2">
      <div class="order-head">产品名称</div>
    </div>
    <div class="order-item order-item-3">
      <div class="order-head">产品名称</div>
    </div>
    <div class="order-item order-item-4">
      <div class="order-head">产品名称</div>
    </div>
    <div class="order-item order-item-5">
      <div class="order-head">产品名称</div>
    </div>
  </div>
</template>
<script>

export default {
  data () {
  }
}
</script>
<style lang="stylus">
$mobile-width = 767px

.order-head
  height 45px
  width 100%
  background-color rgba(242, 242, 242, 1)

.order-container
  width 80%
  display flex
  flex-grow 3 1 1 1 2

.order-item-1
  flex-grow 3

.order-item-2
  flex-grow 1

.order-item-3
  flex-grow 1

.order-item-4
  flex-grow 1

.order-item-5
  flex-grow 2

.order-item
  text-align center

@media (max-width: $mobile-width)
  .order-container
    display flex
    flex-wrap wrap
  .order-item
    width 100%
</style>
