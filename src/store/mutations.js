export default {
  // 增添数量
  addGoodsCount(state, item) {
    item.count += 1
  },
  addNewGood(state, newGood) {
    newGood.checked = true
    newGood.count = 1
    state.goodsCart.push(newGood)
  }
}
