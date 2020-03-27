<template>
  <div class="tabBarItem" @click="get">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {}
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    get() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style lang="css" scoped>
.tabBarItem {
  flex: 1;
}
.tabBarItem img {
  width: 24px;
  height: 24px;
}
.active {
  color: red;
}
</style>
