<template>
  <div id="goodItem">
    <img :src="goodItem.show.img" alt="" @load="imgLoaded">
    <p>{{goodItem.title}}</p>
    <span class="price">{{goodItem.price}}</span>
    <span class="star">{{goodItem.cfav}}</span>
  </div>
</template>

<script>
export default {
  props: {
    goodItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoaded() {
      // 图片每刷新一次就刷新可卷高度
      this.$bus.$emit('refreshScroll')
    }
  }
}
</script>

<style scoped>
  #goodItem {
    padding-bottom: 4px;
    width: 48%;
    text-align: center;
  }

  #goodItem img {
    width: 100%;
    border-radius: 5px;
  }

  #goodItem p {
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .price {
    color: var(--color-high-text);
  }
  .star::before {
    content: '';
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
