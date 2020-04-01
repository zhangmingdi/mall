<template>
  <div class="detail-bottom-bar">
    <div class="icon-box">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
    <div class="buy-box">
      <div class="buy-car" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addCart() {
      // console.log(1)
      this.$emit('addCartClick')
    }
  }
}
</script>

<style scoped>
  .detail-bottom-bar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 58px;
    background-color: #fff;
  }
  .icon-box {
    flex: 1;
    display: flex;
  }
  .icon-box div {
    flex: 1;
  }
  .buy-box {
    flex: 1;
    display: flex;
  }
  .buy-box .buy-car {
    flex: 1;
    background-color: pink;
    text-align: center;
    line-height: 58px;
  }
  .buy-box .buy {
    flex: 1;
    background-color: orange;
    text-align: center;
    line-height: 58px;
  }
</style>
