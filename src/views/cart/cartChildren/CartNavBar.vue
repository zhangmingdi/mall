<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">
        购物车({{cartLength}})
      </div>
    </nav-bar>
  </div>
</template>

<script>
// 导入顶部导航栏组件
import NavBar from 'components/common/navBar/NavBar'

// 导入vuex计算
import { mapGetters } from 'vuex'

export default {
  name: 'CartNavBar',
  components: {
    NavBar
  },
  computed: {
    ...mapGetters(['cartLength'])
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: pink;
  color: #fff;
  font-weight: 700;
}
</style>
