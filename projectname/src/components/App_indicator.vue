<template>
  <div id="app">
    111
    <button @click="handleClick">{{text}}</button>
    <button class="btn1" @click="handleClick1">{{text1}}</button>
  </div>
</template>

<script>
import { Indicator } from "mint-ui"
import { log } from 'util';
// Vue.component(Loadmore.name, Loadmore)
export default {
  data(){
    return{
      text:'按钮',
      text1:'取消加载'
    }
  },
  methods:{
    handleClick(){
      this.$indicator.open('加载中...')
    },
    handleClick1(){
      console.log("a");
      this.$indicator.close();      
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
.btn1{
  position: absolute;
  z-index: 9;
}
</style>
