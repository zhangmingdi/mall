<template>
  <div id="home">
    <!-- 导航栏头部 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- tabs标题区域 -->
      <tabs-control :titles="['流行', '新款', '精选']" class="tab-control0" @tabClick="tabClick($event)"
      ref="tabsControlRef0" v-show="tabscontrolShow" />

    <!-- 滚动区域 -->
    <scroll
      class="wrap"
      ref="scrollRef"
      :probeType="3"
      :pullUploadis="true"
      @scrolling="scrollingListen($event)"
      @pulllingLoad="pullUpLoad"
    >
      <!-- 轮播图部分 -->
      <home-swiper :banners="banners" @getOffsetTop="getScrollOfsTop" />

      <!-- 建议区域 -->
      <home-recommends :recommends="recommends" />

      <!-- 排行榜区域 -->
      <feature-views />

      <!-- tabs标题区域 -->
      <tabs-control :titles="['流行', '新款', '精选']" class="tab-control" @tabClick="tabClick($event)"
      ref="tabsControlRef" />

      <!-- 商品展示区 -->
      <good-list :goodList="getGoodsType" />
    </scroll>

    <!-- 回到顶部组件 -->
    <back-top @click.native="backTopClick" v-show="isTrue" />
  </div>
</template>

<script>
// 导入顶部导航栏组件a
import NavBar from 'components/common/navBar/NavBar'
// 导入轮播图区域
import HomeSwiper from './homeCpn/HomeSwiper'
// 导入图片建议区域
import HomeRecommends from './homeCpn/HomeRecommends'
// 导入排行榜区域
import FeatureViews from './homeCpn/FeatureViews'
// 导入tabs标题区域
import TabsControl from 'components/content/tabs/TabsControl'
// 导入商品展示组件
import GoodList from 'components/content/GoodList/GoodList'
// 引入滚动组件
import Scroll from 'components/common/scroll/Scroll'
// 导入回到顶部组件
import BackTop from 'components/content/backTop/BackTop'
// 导入发送请求文件
import { getHomeDataList, getAllGoodsData } from 'network/home.js'

export default {
  name: 'home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommends,
    FeatureViews,
    TabsControl,
    GoodList,
    Scroll,
    BackTop
  },
  data() {
    return {
      // 请求的首页的数据
      banners: [],
      recommends: [],

      // 请求的首页商品数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },

      // 改变展示商品类型数据
      currentType: 'pop',

      // 控制返回顶部组件是否显示
      isTrue: false,
      // 滑动组件距离顶部的距离
      scrollOffsetTop: 0,
      // 控制获取顶部值一次
      isValid: true,
      // 控制tabscontrol0的显示与隐藏
      tabscontrolShow: false,
      // 记录当前scroll位置,
      saveY: 0
    }
  },
  created() {
    // 请求轮播图数据
    this.getDataList()
    // 请求商品数据
    this.getAllGoods('pop')
    this.getAllGoods('new')
    this.getAllGoods('sell')
  },
  mounted() {
    // 当图片加载一次就刷新scrollHeight
    const delayRefresh = this.debounce(this.$refs.scrollRef.refreshScrollHeight, 300)
    this.$bus.$on('refreshScroll', () => {
      delayRefresh()
    })
  },
  methods: {
    // 防抖函数
    debounce(fn, delay) {
      let timer = null
      return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          fn.apply(this, args)
        }, delay)
      }
    },

    // 获取数据方法
    // 获取轮播图数据
    async getDataList() {
      // 获取数据
      const res = await getHomeDataList()

      // 数据不请求成功
      if (!res.success) return

      // console.log(res.data)
      // 请求数据成功
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    },
    // 获取商品数据
    async getAllGoods(type) {
      // 配置请求参数
      const page = this.goods[type].page + 1
      // 发送请求
      const res = await getAllGoodsData(type, page)

      // 输出请求成功之后的数据
      // console.log(res)
      this.goods[type].list.push(...res.data.list)
    },

    // 普通方法
    // 切换tab
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }

      // 同步更新tab-control0的按键值
      this.$refs.tabsControlRef0.activeIndex = index
      this.$refs.tabsControlRef.activeIndex = index
    },
    // 回到顶部方法
    backTopClick() {
      // 调用scroll组件的方法
      this.$refs.scrollRef.scrollTo(0, 0, 500)
    },
    // 监听滚动的位置
    scrollingListen(position) {
      // console.log(position)
      if (-position.y > 1000) {
        this.isTrue = true
      } else {
        this.isTrue = false
      }

      // 如果下拉位置大于tab的
      if (-position.y >= this.scrollOffsetTop) {
        // 显示tabscontrol0
        this.tabscontrolShow = true
      } else {
        this.tabscontrolShow = false
      }
    },
    // 监听上拉加载
    pullUpLoad() {
      // 再次发送请求
      this.getAllGoods(this.currentType)
      // console.log(1)
      this.$refs.scrollRef.finishPullUp()
    },
    // 获取tabscontrol的offsetTop值
    getScrollOfsTop() {
      if (this.isValid) {
        this.scrollOffsetTop = this.$refs.tabsControlRef.$el.offsetTop
        // console.log(this.scrollOffsetTop)
        this.isValid = false
      }
    }
  },
  computed: {
    getGoodsType() {
      return this.goods[this.currentType].list
    }
  },
  destroyed() {
    console.log('home is destoryed')
  },
  deactivated() {
    this.saveY = this.$refs.scrollRef.scrollheight()
  },
  activated() {
    this.$refs.scrollRef.refreshScrollHeight()
    this.$refs.scrollRef.scrollTo(0, this.saveY, 0)
  }
}
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  position: relative;
  height: 100vh;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; */
}

/* .tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
} */

.tab-control0 {
  position: relative;
  z-index: 9;
}

.wrap {
  position: absolute;
  overflow: hidden;

  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
