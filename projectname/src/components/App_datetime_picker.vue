<template>
 <div>
   <div class="pickerDemo">
    <span @click="dateClick1()" v-if="!isDateClick1">{{ date1}}</span>
    <span @click="dateClick1()" v-if="isDateClick1">{{ date1 }}</span>
    <!-- <span @click="dateClick1()" v-if="isDateClick1">{{ date1 | dateYMD}}</span></p> -->

    <mt-datetime-picker 
      v-model="dataVal1" 
      type="date" 
      ref="picker1" 
      year-format="{value} 年" 
      month-format="{value} 月" 
      date-format="{value} 日" 
      @confirm="handleConfirm1">
    </mt-datetime-picker>
   </div>
  
 </div>
</template>

<script>
// import Vue from 'vue'
// import {formatDateMin} from '@/assets/js/dateformat-npm.js'
// import {DatetimePicker} from 'mint-ui'
// Vue.component(DatetimePicker.name, DatetimePicker)
 export default {
   name: 'pickerDome',
   data () {
     return {
      dataVal1: new Date(),
      isDateClick1: false, //默认没有点击
      date1: "开始日期", //默认值
     }
   },
   components: {

   },
   mounted(){
     let that = this;
   },
   methods:{
      dateClick1() {
          this.$refs.picker1.open();
      },

      handleConfirm1(value) {
          console.log(value);
          this.date1 = value;
          this.isDateClick1 = true;
      },
   }
 }
</script>


<style scoped>
  
</style>
