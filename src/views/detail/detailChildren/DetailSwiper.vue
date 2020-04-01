<template>
  <div id="DetailSwiper">
    <swiper class="detail-swiper-box">
      <swiper-item v-for="item in sweiperImgs" :key="item + '1'">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index'
export default {
  name: 'DetailSwiper',
  props: {
    sweiperImgs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
  .detail-swiper-box {
    height: 300px;
    overflow: hidden;
  }

</style>
