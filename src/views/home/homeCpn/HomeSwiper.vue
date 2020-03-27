<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.image923">
      <a :href="item.link">
        <img :src="item.image" @load="SwiperImgLoader" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
// 导入轮播图组件
import { Swiper, SwiperItem } from 'components/common/swiper/index.js'

export default {
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    // 图片加载之后触发获取scroll顶部值
    SwiperImgLoader() {
      this.$emit('getOffsetTop')
    }
  }
}
</script>
