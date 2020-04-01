<template>
  <div id="toast" v-show="isShow">
    <div class="text">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  data() {
    return {
      isShow: false,
      message: ''
    }
  },
  methods: {
    show(text, duration = 2000) {
      this.isShow = true
      this.message = text
      setTimeout(() => {
        this.isShow = false
      }, duration)
    }
  }
}
</script>

<style scoped>
#toast {
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px 15px;
  color: #fff;
  text-align: center;
  z-index: 999;
}
</style>
