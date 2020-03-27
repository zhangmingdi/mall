<template>
  <div class="recommends">
    <div class="recommendItem" v-for="item in recommends" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommends {
    display: flex;
    text-align: center;
    font-size: 12px;

    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }
  .recommendItem {
    flex: 1;
  }
  .recommendItem img{
    width: 70px;
    height: 70px;
  }
</style>
