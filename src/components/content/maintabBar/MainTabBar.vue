<template>
  <div id="tab-bar-box">
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="../../../assets/img/tabBar/home.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabBar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="../../../assets/img/tabBar/category.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabBar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="../../../assets/img/tabBar/profile.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabBar/profile_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="cart">
        <img slot="item-icon" src="../../../assets/img/tabBar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabBar/shopcart_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '../../common/tabs/TabBar'
import tabBarItem from '../../common/tabs/tabBarItem'
export default {
  components: {
    tabBarItem,
    TabBar
  }
}
</script>

<style scoped>
  .tab-bar-box {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
