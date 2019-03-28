<template>
  <div class="page-cell">
    <div class="page-title">Cell Swipe</div>
    <mt-cell-swipe
      v-for="(n,i) in list.length"
      :key="i"
      :right="rightButtons"
      title="swipe me">
    </mt-cell-swipe>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        list:[],
        dataCount:'10'
      }
    },
    created() {
      this.rightButtons = [
        {
          content: 'Mark as Unread',
          style: { background: 'lightgray', color: '#fff' }
        },
        {
          content: 'Delete',
          style: { background: 'red', color: '#fff' },
          handler: () => this.$messagebox('delete')
          // handler: () => this.style.display="none"
          // handler: () => {
          //   console.log(this.$children);
          // }
        }
      ];
    },
    methods: {
      leftButtonHandler(evt) {
        console.log(123);
      }
    },
    mounted(){
      for(let i = 1; i < this.dataCount; i++){
        this.list.push(i)
      }
    }
  };
</script>