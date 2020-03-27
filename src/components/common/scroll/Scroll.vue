<template>
  <div class="wrap" ref="wrapRef">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 引入滚动插件
import BScroll from 'better-scroll'
export default {
  props: {
    probeType: {
      type: Number,
      default() {
        return 0
      }
    },
    pullUploadis: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      // 滚动插件对象
      scroll: null
    }
  },
  mounted() {
    // 创建插件对象
    this.getScroll()
    // 监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', positon => {
        this.$emit('scrolling', positon)
      })
    }
    // 监听上拉加载
    this.scroll.on('pullingUp', () => {
      this.$emit('pulllingLoad')
      // console.log(1)
    })
  },
  methods: {
    // 创建滚动对象
    getScroll() {
      this.scroll = new BScroll(this.$refs.wrapRef, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: true
      })
    },
    // 回到顶部方法
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    },
    // 完成加载
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    // 刷新scrollHeight
    refreshScrollHeight() {
      this.scroll.refresh()
    },
    // 返回scrollheight的高度
    scrollheight() {
      return this.scroll.y
    }
  }
}
</script>
