<template>
  <div class="Cart">
    <!-- 顶部 -->
    <cart-nav-bar />

    <!-- 商品列表区域 -->
    <good-list class="wrap" />

    <!-- 结算区域 -->
    <cart-bottom-bar />
  </div>
</template>

<script>
// 导入顶部组件区域
import CartNavBar from './cartChildren/CartNavBar'
// 导入商品列表组件
import GoodList from './cartChildren/GoodList'
// 导入结算组件
import CartBottomBar from './cartChildren/CartBottomBar'

export default {
  components: {
    CartNavBar,
    GoodList,
    CartBottomBar
  }
}
</script>

<style scoped>
  .Cart {
    height: 100vh
  }
  .wrap {
    height: calc(100% - 93px - 40px);
    overflow: hidden
  }
</style>
