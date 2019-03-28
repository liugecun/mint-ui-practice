<template>
  <div id="app">
    111
    <!-- Toast('提示信息'); -->
    {{data1}}
    <button @click="ShoeMsg">{{btnVal}}</button>
  </div>
</template>

<script>
import {Toast} from "mint-ui"

export default {
  data(){
    return {
      data1:"我是Toast",
      btnVal:"点我"
    }
  },
  methods:{
    ShoeMsg(){
      Toast({
        message:this.data1 + '2',
        duration: 1500
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
