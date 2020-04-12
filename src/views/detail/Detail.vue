<template>
  <div id="detail">
    <!-- 顶部导航栏 -->
    <detail-nav-bar class="nav-bar" @goTo="scrollTo($event)" />
    <!-- 滚动区域 -->
    <scroll class="wrap-box" ref="scrollRef" @scrolling="scrollingListen($event)" :probeType="3">
      <!-- 轮播图区域 -->
      <detail-swiper :sweiperImgs="sweiperImgs"></detail-swiper>

      <!-- 商品详情信息 -->
      <item-info :goods="goodInfo" />

      <!-- 商铺详细信息 -->
      <detail-shop-info ref="shopRef" :shop="shopInfo" />

      <!-- 商品详细信息 -->
      <detail-goods-info :detailInfo="infoDetail" @imageLoad="refreshImg" />

      <!-- 商品参数信息 -->
      <detail-param-info ref="paramRef" :paramInfo="paramInfo" />

      <!-- 商品数据列表 -->
      <good-list ref="listImgRef" :goodList="recommendGoodsList" />
    </scroll>

    <!-- 底部购车车栏 -->
    <detail-bottom-bar @addCartClick="addCart" />

    <!-- 回到顶部组件 -->
    <back-top @click.native="backTopClick" v-show="isTrue" />
  </div>
</template>

<script>
// 导入请求数据函数, 导入格式化函数
import {
  getDetailData,
  getComments,
  Goods,
  Shop,
  GoodsParam
} from 'network/detail.js'
// 引入滚动区域插件
import Scroll from 'components/common/scroll/Scroll'
// 导入顶部导航栏组件
import DetailNavBar from './detailChildren/DetailNavBar'
// 导入轮播图组件
import DetailSwiper from './detailChildren/DetailSwiper'
// 导入商品信息组件
import ItemInfo from './detailChildren/ItemInfo'
// 导入商铺信息组件
import DetailShopInfo from './detailChildren/DetailShopInfo'
// 导入商品详情组件
import DetailGoodsInfo from './detailChildren/DetailGoodsInfo'
// 导入商品参数组件
import DetailParamInfo from './detailChildren/DetailParamInfo'
// 导入商品列表组件
import GoodList from 'components/content/GoodList/GoodList'
// 导入购物车专栏
import DetailBottomBar from './detailChildren/DetailBottomBar'
// 导入混入
import { mixin, backTop } from 'assets/js/common/minxin'

export default {
  name: 'Detail',
  props: ['id'],
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    ItemInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    GoodList,
    DetailBottomBar
  },
  mixins: [mixin, backTop],
  data() {
    return {
      // 轮播图数据
      sweiperImgs: [],
      // 商品信息
      goodInfo: {},
      // 店铺信息
      shopInfo: {},
      // 商品详情信息
      infoDetail: {},
      // 参数信息
      paramInfo: {},
      // 商品列表
      recommendGoodsList: [],
      offseTopYs: [0],
      // 控制返回顶部按钮是否显示
      isTrue: false
    }
  },
  created() {
    // 发送本页的数据请求
    this.getDetailDatas(this.id)
    // 发送请求本页商品列表数据
    this.getRecommendList()
  },
  destroyed() {
    this.$off('refreshScroll', this.refreshImgHeight)
  },
  methods: {
    // 获取数据
    async getDetailDatas(id) {
      const data = await getDetailData(id)
      const res = data.result
      // 保存轮播图数据
      this.sweiperImgs = res.itemInfo.topImages
      // 保存商品信息数据
      this.goodInfo = new Goods(
        res.itemInfo,
        res.columns,
        res.shopInfo.services
      )
      // 保存店铺详细信息
      this.shopInfo = new Shop(res.shopInfo)
      // 保存商品详情信息
      this.infoDetail = res.detailInfo
      // 保存参数信息
      this.paramInfo = new GoodsParam(res.itemParams.info, res.itemParams.rule)
    },

    // 获取建议商品列表数据
    async getRecommendList() {
      const res = await getComments()
      // console.log(res)
      this.recommendGoodsList = res.data.list
    },

    // 图片全部加载完成后刷新可卷高度
    refreshImg() {
      this.delayRefresh()
      // 图片完成加载之后获取对应的offsetTop
      this.offseTopYs.push(this.$refs.paramRef.$el.offsetTop)
      this.offseTopYs.push(this.$refs.shopRef.$el.offsetTop)
      this.offseTopYs.push(this.$refs.listImgRef.$el.offsetTop)
    },

    // 点击导航栏到对应的地方
    scrollTo(index) {
      console.log(index)
      this.$refs.scrollRef.scrollTo(0, -this.offseTopYs[index], 300)
    },

    // 监听滚动
    scrollingListen(position) {
      this.isShow(position)
    },

    // 监听添加购物车
    async addCart() {
      let product = {}
      product.image = this.sweiperImgs[0]
      product.title = this.goodInfo.title
      product.desc = this.goodInfo.desc
      product.price = this.goodInfo.realPrice
      product.iid = this.id

      // 存储住状态管理
      const res = await this.$store.dispatch('addCart', product)
      this.$toast.show(res)
    }
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.wrap-box {
  position: relative;
  background-color: #fff;
  height: calc(100% - 44px);
}
</style>
