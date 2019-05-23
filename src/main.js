import Vue from 'vue'
import App from './App.vue'

//注册一个组件
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})


new Vue({

  el: '#app',
  render: h => h(App),

  //生命周期钩子函数，用户可以在不同阶段添加自己的代码
  created: function () {
    console.log('Vue实例创建后执行')
  }

})
