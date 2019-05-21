import Vue from 'vue'
import App from './App.vue'

//注册一个组件
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

new Vue({
  el: '#app',
  render: h => h(App)
})
