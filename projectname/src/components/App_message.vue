<template>
  <div>
    <h1>mint-uiexample</h1>
    <mt-button
      type="primary"
      @click="!sheetVisible">
      选择操作
    </mt-button>
    <mt-actionsheet
      cancel-text=""
      :actions="actions"
      :visible.sync="sheetVisible">
    </mt-actionsheet>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sheetVisible: true,
        actions: [{
          name: '展示 Toast',
          method: this.showToast
        }, {
          name: '展示 Message Box',
          method: this.showMsgbox
        }]
      };
    },

    methods: {
      showToast() {
        Toast('这是一个 Toast');
      },
      showMsgbox() {
        MessageBox('提示', '这是一个 Message Box');
      }
    },
    mounted(){
      // this.$messagebox.alert('提示11111111111', '操作成功');
      // this.$messagebox({
      //   title: '提示',
      //   message: '确定执行此操作?',
      //   showCancelButton: true
      // });
      this.$MessageBox.alert('操作成功').then(action => {
        
      })
    }
  };
</script>
