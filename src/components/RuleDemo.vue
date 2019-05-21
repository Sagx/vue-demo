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
  <!-- 按钮绑定方法 -->
  <p>{{ egMsg }}</p>
  <button v-on:click="reverseMsg">逆转上边的消息</button>
  <!-- 数据的双向绑定 -->
    <label>
      数据的双向绑定:
      <input v-model="egMsg">
    </label>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          egMsg: '123456',
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
