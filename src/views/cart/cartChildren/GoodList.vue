<template>
    <scroll>
      <cart-listItem :itemInfo="item" v-for="item in goodsCart" :key="item.iid" />
    </scroll>
</template>

<script>
// 导入滚动组件
import Scroll from 'components/common/scroll/Scroll'
// 导入列表项
import CartListItem from './CartListItem'
// 导入vuex共享数据
import { mapGetters } from 'vuex'

export default {
  name: 'GoodList',
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['goodsCart'])
  }
}
</script>

<style scoped>
</style>
