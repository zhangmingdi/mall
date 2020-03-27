<template>
  <div>
    <div class="tabBar">
    <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  @import '../../../assets/css/base.css';
  .tabBar {
    display: flex;
    height: 49px;
    text-align: center;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(0, 0, 0, .1);
  }
</style>
