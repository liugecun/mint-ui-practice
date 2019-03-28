<template>
  <div class="mint-centent">
    <ul class="mint-ul">
      <li class="mint-li" v-for="item in lists" :key="item.id">
        <router-link :to="{name: item.link }">{{item.content}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
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
  },
  {
    id:3,
    content:'LoadMore',
    link:'LoadMore'
  },
  {
    id:4,
    content:'infinite',
    link:'infinite'
  },
  {
    id:5,
    content:'message',
    link:'message'
  },
  {
    id:6,
    content:'actionSheet',
    link:'actionSheet'
  },
  {
    id:7,
    content:'Popup',
    link:'popup'
  },
  {
    id:8,
    content:'Switch',
    link:'switch'
  },
  {
    id:9,
    content:'LazyLoad',
    link:'lazyLoad'
  },
  {
    id:10,
    content:'Progress',
    link:'progress'
  },
  {
    id:11,
    content:'Picker',
    link:'picker'
  },
  {
    id:12,
    content:'DateTimePicker',
    link:'dateTimePicker'
  },
  {
    id:13,
    content:'IndexList',
    link:'IndexList'
  },
  {
    id:14,
    content:'PaletteButton',
    link:'PaletteButton'
  },
  {
    id:15,
    content:'Header',
    link:'Header'
  },
  {
    id:16,
    content:'Tabbar',
    link:'tabbar'
  },
  {
    id:17,
    content:'Button',
    link:'Button'
  },
  {
    id:18,
    content:'Cell',
    link:'Cell'
  },
  {
    id:19,
    content:'CellSwipe',
    link:'CellSwipe'
  },
  {
    id:20,
    content:'Spinner',
    link:'Spinner'
  },
  {
    id:21,
    content:'TabContainer',
    link:'TabContainer'
  },
  {
    id:22,
    content:'Search',
    link:'Search'
  },
  {
    id:23,
    content:'CheckList',
    link:'CheckList'
  }
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

<style scoped lang="css">
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
  .mint-ul{
    width: 100%;
    overflow: hidden;
    border-bottom: 3px solid #CCC;
    /* display: flex; */
    /* flex-direction: row;
    flex-wrap: wrap; */
    /* flex-wrap: row wrap; */
  }
  .mint-li{
    float: left;
    width: 33.33%;
  }
  .mint-li a{
    display: block;
    width: 100%;
    font-size: 18px;
    color: #333;
    text-align: center;
    line-height: 50px;
    text-decoration: none;
  }
</style>