export default {
  addCart(context, product) {
    return new Promise((resolve, reject) => {
      // 查询此物品是否在购物车里
      let oldProduct = context.state.goodsCart.find(value => value.iid === product.iid)
      // 判断是否在购物车里面
      if (oldProduct) {
        context.commit('addGoodsCount', oldProduct)
        resolve('此商品+1')
      } else {
        context.commit('addNewGood', product)
        resolve('成功添加此商品')
      }
    })
  }
}
