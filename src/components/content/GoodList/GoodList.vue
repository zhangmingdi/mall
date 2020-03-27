<template>
  <div class="goodlist">
    <good-listItem v-for="item in goodList" :key="item.shioId" :goodItem="item" />
  </div>
</template>

<script>
import GoodListItem from './GoodListItem'
export default {
  props: {
    goodList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodListItem
  }
}
</script>

<style scoped>
  .goodlist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>
