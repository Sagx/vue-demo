<template>
  <div id="RuleDemo">
    <!-- 指令带有前缀 v-，以表示它们是Vue提供的特殊特性 -->
    <span v-bind:title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
    <!-- 是否展示 -->
    <p v-if="seen">现在你看到我了</p>
    <!-- list型数据遍历 -->
    <ol>
      <li v-for="r in results">
        {{ r.text }}
      </li>
    </ol>
    <!-- vue指令可以以冒号的形式绑定标签属性 -->
    <p><a v-bind:href="aUrl">这个a标签的url是可以动态改变的</a></p>
    <!-- 上边v-bind的缩写用法 -->
    <p><a :href="aUrl">这个a标签的url是可以动态改变的</a></p>
    <!-- 按钮绑定方法 -->
    <p>{{ egMsg }}</p>
    <button v-on:click="reverseMsg">逆转上边的消息</button>
    <!-- 上边v-on的缩写用法 -->
    <button @click="reverseMsg">逆转上边的消息</button>
    <!-- 数据的双向绑定 -->
    <label>
      数据的双向绑定:
      <input v-model="egMsg">
    </label>
    <!-- 使用别的组件，并实现参数传递 -->
    <ol>
      <todo-item v-for="item in results" v-bind:todo="item" v-bind:key="item.id"></todo-item>
    </ol>
    <!--
       在一个大型应用中，有必要将整个应用程序划分为组件，以使开发更易管理。
       这里有一个假想的例子，以展示使用了组件的应用模板是什么样的：
        <div id="app">
          <app-nav></app-nav>
          <app-view>
            <app-sidebar></app-sidebar>
            <app-content></app-content>
          </app-view>
        </div>
     -->
  </div>
</template>

<script>
    export default {
      data() {
        return {
          egMsg: '123456',
          aUrl: 'https://www.bilibili.com',
          message: '页面加载于 ' + new Date().toLocaleString(),
          seen: true,
          results: [
            {text: 'data1'},
            {text: 'data2'},
            {text: 'data3'}
          ]
        }
      },
      methods: {
        //逆转字符串
        reverseMsg: function () {
          this.egMsg = this.egMsg.split('').reverse().join('')
        }
      }
    }
</script>

<style>
  label {
    display: block;
  }
</style>
