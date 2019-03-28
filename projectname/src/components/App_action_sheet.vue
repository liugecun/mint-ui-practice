<template>
  <div class="page-actionsheet">
    <h1 class="page-title">Action Sheet</h1>
    <div class="page-actionsheet-wrapper">
      <mt-button @click.native="sheetVisible = !sheetVisible" size="large">点击上拉 action sheet</mt-button>
      <mt-button @click.native="sheetVisible2 = !sheetVisible2" size="large">不带取消按钮的 action sheet</mt-button>
    </div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    <mt-actionsheet :actions="actions2" v-model="sheetVisible2" cancel-text=""></mt-actionsheet>
  </div>
</template>

<script type="text/babel">
  export default {
    data(){
      return{
        sheetVisible: false,
        sheetVisible2: false,
        actions: [],
        actions2: []
      }
    },
    methods:{
      takePhoto(){
        console.log('take photo');
      },
      openAlbum(){
        console.log('opening Album')
      },
      goBack(){
        history.go(-1)
      }
    },
    mounted(){
      this.actions = [{
        name: '拍照',
        method:this.takePhoto
      },
      {
        name:'从相册中选组',
        method:this.openAlbum
      },
      {
        name:'******',
      }];
      this.actions2 = [{
        name:'确定',
      },{
        name:'取消',
        method:this.goBack
      }]
    }
  };
</script>

<style scoped lang="postcss">
  @component-namespace page {
    @component actionsheet {
      @descendent wrapper {
        padding: 0 20px;
        position: absolute 50% * * *;
        width: 100%;
        transform: translateY(-50%);
        button:first-child {
          margin-bottom: 20px;
        }
      }
    }
  }
</style>