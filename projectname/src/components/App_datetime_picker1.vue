<template>
 <div>
   <div class="pickerDemo">
     <div class="showTime">
       <p class="timeDes">当前\\时间是：{{selectedValue | fliterDateTime}}</p>
       <div class="selectTime" @click="selectDate">选择时间</div>
     </div>
     <div class="pickerPop">
       <mt-datetime-picker
          lockScroll="true"
          ref="datePicker"
          v-model="selectedValue"
          class="myPicker"
          type="datetime"
          year-format="{value}年"
          month-format="{value}月"
          date-format="{value}日"
          hour-format="{value}时"
          minute-format="{value}分"
          second-format="{value}秒"
          @confirm="dateConfirm"
       >
       </mt-datetime-picker>
     </div>
   </div>
  
 </div>
</template>

<script>
 var moment = require('moment');
 export default {
   name: 'pickerDome',
   data () {
     return {
      //  dateVal:new Date(),//默认当前日期
       selectedValue:''
     }
   },
   filters:{
     fliterDateTime(value){
       return moment().format('YYYY-MM-DD hh:mm');
     }
   },
   methods:{
      selectDate(){
        // if(!this.selectedValue){
        //   this.selectedValue = new Date()
        // }else{
        //   this.selectedValue = this.selectedValue
        // }
        this.$refs['datePicker'].open();
      },
      dateConfirm(value){
        console.log(value+" 1111")
        // this.dateVal = this.selectedValue
        this.selectedValue = value
      }
   }
 }
</script>

<style scoped>
  .pickerDemo{
      width: 100%;
      height: 100%;
  }
  .pickerDemo .showTime{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
  }
  .pickerDemo .showTime  .timeDes{
        font-size: 18px;
        color: red;
    }
  .pickerDemo .showTime .selectTime{
      display: inline-block;
      width: 100px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      padding: 10px;
      background-color: #ff776d;
      color: #fff;
      font-size: 24px;
      border-radius: 8px;
      margin-top: 12px;
  }
  .picker-toolbar{
    background-color: #eee;
  }
  .picker-toolbar .mint-datetime-action{
    font-size: 0.26rem;
    color: #000!important;
  }
</style>
