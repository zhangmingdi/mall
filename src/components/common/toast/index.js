import Toast from './Toast'

const obj = {}

obj.install = function(Vue) {
  // 1.创建组件构造器
  const TotastConstructor = Vue.extend(Toast)

  // 2.使用New的方式，根据组件构造器，可以创建一个组件对象
  const toast = new TotastConstructor()

  // 3.将组件对象， 手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj
