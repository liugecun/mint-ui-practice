<template>
  <div>
    <ul>
      <li v-for="item in lists" :key="item.id">
        <router-link :to="{name: item.link }">{{item.content}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
// var lists = ['Toast','Indicator','LoadMore','Infinite','MessageBox','ActionSheet','Prpup','Switch','LazyLoad','Range','Progress','Picker','DateTimePicker','IndexList','PaletteButton','Header','Tabbar','Button','Cell','CellSwiper','Spinner','TabContainer','Search','Switch','CheckList','Radio','Field','Badge'];
var lists = [
  {
    id:1,
    content:'toast',
    link:'toast'
  },
  {
    id:2,
    content:'indicator',
    link:'indicator'
  }
  
  // ,{
  //   name:'LoadMore',
  //   link:'loadMore'
  // },{
  //   name:'Infinite',
  //   link:'infinite'
  // },{
  //   name:'Message',
  //   link:'message'
  // },{
  //   name:'ActionSheet',
  //   link:'actionSheet'
  // },{
  //   name:'Popup',
  //   link:'popup'
  // },{
  //   name:'Switch',
  //   link:'switch'
  // },{
  //   name:'LazyLoad',
  //   link:'lazyLoad'
  // },{
  //   name:'Range',
  //   link:'range'
  // },{
  //   name:'Progress',
  //   link:'progress'
  // },{
  //   name:'Picker',
  //   link:'picker'
  // },{
  //   name:'DateTimePicker',
  //   link:'dateTimePicker'
  // }
];
export default {
  data(){
    return{
      lists:lists
    }
  },
  methods:{
    handleClick(link){
      // console.log(link)
    }
  }
};
</script>

<style lang="css">
  *{margin: 0;padding: 0;}
  ul,li{list-style: none;}
  /* ul{
    width: 100%;
    background-color: #eee;
    display: flex;
    flex-wrap:warp;
    justify-content:center;
    overflow: hidden;
  }
  li{
    width: 33%;
  } */
  ul{
    width: 100%;
    /* display: flex; */
    /* flex-direction: row;
    flex-wrap: wrap; */
    /* flex-wrap: row wrap; */
  }
  ul li{
    float: left;
    width: 33.33%;
  }
  ul li a{
    display: block;
    width: 100%;
    font-size: 18px;
    color: #333;
    text-align: center;
    line-height: 50px;
    text-decoration: none;
  }
</style>