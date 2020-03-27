<template>
  <div class="tabs-control">
    <div class="tab-item" v-for="(item, index) in titles" :key="item
    + '1'" :class="activeIndex === index ? 'active' : ''" @click="getActive(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      activeIndex: 0
    }
  },
  methods: {
    getActive(index) {
      this.activeIndex = index
      // 传递值给父组件
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
  .tabs-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    background-color: #fff;
  }
  .tab-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .tab-item span {
    padding: 10px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>
