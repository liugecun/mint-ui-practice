<template>
  <div class="page-picker">
    <h1 class="page-title">Picker</h1>
    <div class="page-picker-wrapper">
      <mt-picker :slots="yearSlot" @change="onYearChange" :visible-item-count="3"></mt-picker>
    </div>
    <p class="page-picker-desc">出生年份: {{ year }}</p>

    <div class="page-picker-wrapper">
      <mt-picker :slots="dateSlots" @change="onDateChange" :visible-item-count="3"></mt-picker>
    </div>
    <p class="page-picker-desc">在校时间: {{ dateStart }} 至 {{ dateEnd }}</p>

    <div>{{pickerValue}}</div>
    <mt-datetime-picker
      ref="picker"
      type="time"
      @confirm="handleConfirm"
      v-model="pickerValue"
    >
    </mt-datetime-picker>
  </div>
</template>

<script type="text/babel">
  export default{
    data() {
      return {
        year: '1984',
        yearSlot: [{
          flex: 1,
          values: ['1980', '1981', '1982','1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995'],
          className: 'slot1'
        }],
        dateSlots: [
          {
            flex:1,
            values:['2012','2013','2014','2015','2016','2017','2018'],
            className:'slot1',
            textAlign: 'right'
          },
          {
            divider: true,
            content:'-',
            className:'slot2'
          },
          {
            flex:1,
            values:['1月','2月','3月','4月','5月','6月','7月'],
            className:'slot3',
            textAlign: 'left'
          },
          {
            divider: true,
            content:'-',
            className:'slot4'
          },
          {
            flex:1,
            values:['1号','2号','3号','4号','5号','6号','7号'],
            className:'slot5',
            textAlign: 'left'
          }
        ],
        dateStart:'2012',
        dateEnd:'2012',
        pickerValue:'02:00',
      };
    },
    methods: {
      onYearChange(picker,values){
        this.year = values[0]
        console.log(values);
      },
      onDateChange(picker, values){
        if(values[0]>values[1]){
          picker.setSlotValue(1, values[0])
        };
        this.dateStart = values[0],
        this.dateEnd = values[1],
        console.log(values[3])
      },
      formatDate(date) {
        const y = date.getFullYear()
        let m = date.getMonth() + 1
        m = m < 10 ? '0' + m : m
        let d = date.getDate()
        d = d < 10 ? ('0' + d) : d
        return y + ' ' + m + ' ' + d
      },
      handleConfirm(){
        let a = this.pickerValue
        this.formatDate(this.$refs.picker.value)
      },
    }
  }
</script>

<style>
  .page-picker {
    padding: 0 10px 20px;
  }
  .page-picker-wrapper {
      background-color: #fff;
      text-align: center;
    }
  .page-picker-wrapper {
    margin: 10px 0 50px;
  }
  .mint-button {
    margin-top: 15px;
  }
</style>

