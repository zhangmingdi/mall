// 导入防抖函数
import { debounce } from 'assets/js/common/utils'
// 导入回到顶部组件
import BackTop from 'components/content/backTop/BackTop'

export const mixin = {
  data() {
    return {
      refreshImgHeight: null,
      delayRefresh: null
    }
  },
  mounted() {
    // 当图片加载一次就刷新scrollHeight
    this.delayRefresh = debounce(this.$refs.scrollRef.refreshScrollHeight, 300)
    this.refreshImgHeight = () => {
      this.delayRefresh()
    }
    this.$bus.$on('refreshScroll', this.refreshImgHeight)
  }
}

export const backTop = {
  components: {
    BackTop
  },
  data() {
    return {
      // 控制返回顶部组件是否显示
      isTrue: false
    }
  },
  methods: {
    // 回到顶部方法
    backTopClick() {
      // 调用scroll组件的方法
      this.$refs.scrollRef.scrollTo(0, 0, 500)
    },
    isShow(position) {
      this.isTrue = -position.y > 1000
    }
  }
}
