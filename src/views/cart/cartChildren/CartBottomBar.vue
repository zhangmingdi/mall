<template>
  <div class="cart-bottom-bar">
    <div class="all-checked-button">
      <check-button :isChecked="isAllSelect" class="check-button" @click.native="CheckClick" />
      <span>全选</span>
    </div>
    <div class="priceCount">合计￥{{totalPrice}}</div>
    <div class="goodsCount" @click="goodsCountClick">去结算{{totalGoods}}</div>
  </div>
</template>

<script>
// 导入按钮组件
import CheckButton from 'components/content/checkButton/CheckButton'
// 导入vueX
import { mapGetters } from 'vuex'

export default {
  components: {
    CheckButton
  },
  name: 'CartBottomBar',
  // 导入购物车列表
  computed: {
    ...mapGetters(['goodsCart']),
    // 计算总价格
    totalPrice() {
      if (this.goodsCart.length > 0) return this.goodsCart.filter(item => item.checked === true).reduce((preValue, item) => preValue + item.price * item.count, 0)
      return 0
    },
    // 计算商品个数
    totalGoods() {
      return this.goodsCart.filter(item => item.checked === true).reduce((preValue, item) => preValue + item.count, 0)
    },
    // 是否要全部选择
    isAllSelect() {
      if (this.goodsCart.length === 0) return false
      return !this.goodsCart.find(item => !item.checked)
    }
  },
  methods: {
    // 改变所有商品的选中状态
    CheckClick() {
      if (this.isAllSelect) {
        this.goodsCart.forEach(item => { item.checked = false })
      } else {
        this.goodsCart.forEach(item => { item.checked = true })
      }
    },
    // 监听去结算按钮
    goodsCountClick() {
      if (this.goodsCart.find(item => item.checked === true)) return
      this.$toast.show('请选择购物车')
    }
  }
}
</script>

<style scoped>
  .cart-bottom-bar {
    display: flex;
    height: 40px;
    background-color: #fff;
  }

  .all-checked-button {
    display: flex;
    width: 100px;
    align-items: center;
  }
  .all-checked-button .check-button{
    width: 20px;
    height: 20px;
    margin: 0 15px;
  }
  .all-checked-button span {
    flex: 1;
  }

  .priceCount {
    flex: 1;
    line-height: 40px;
  }

  .goodsCount {
    width: 100px;
    line-height: 40px;
    background-color: red;
    text-align: center;
    color: blanchedalmond;
    font-weight: 700;
  }
</style>
