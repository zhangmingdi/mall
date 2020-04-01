<template>
  <div id="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="left-back">
        <img src="~assets/img/common/back.svg" alt @click="getBack" />
      </div>
      <div slot="center" class="titlesBox">
        <div
          class="titles"
          v-for="(item, index) in titles"
          :key="item + '1'"
          :class="index === indexCurrent ? 'active' : ' '"
          @click="getActive(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
// 导入顶部导航栏组件
import NavBar from 'components/common/navBar/NavBar'
export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      // 标记要点亮的标题
      indexCurrent: 0
    }
  },
  methods: {
    // 激活标题
    getActive(index) {
      this.indexCurrent = index
      // 跳转到对应的地方
      this.$emit('goTo', index)
    },
    // 返回历史页
    getBack() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.titlesBox {
  display: flex;
  font-size: 13px;
}
.titles {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.left-back {
  margin-top: 6px;
}
</style>
