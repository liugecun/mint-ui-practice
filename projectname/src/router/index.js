import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import App_toast from '@/components/App_toast'
import App_indicator from '@/components/App_indicator'
// import App_LoadMore from '@/components/App_LoadMore'
// import App_infinite from '@/components/App_infinite'
// import App_message from '@/components/App_message'
// import App_action_sheet from '@/components/App_action_sheet'
// import App_popup from '@/components/App_popup'
// import App_switch from '@/components/App_switch'
// import App_lazyLoad from '@/components/App_lazyLoad'
// import App_progress from '@/components/App_progress'
// import App_picker from '@/components/App_picker'
// import App_dateTimePicker from '@/components/App_dateTimePicker'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/toast',
      name: 'toast',
      component: App_toast
    },
    {
      path: '/indicator',
      name: 'indicator',
      component: App_indicator
    }
    // {
    //   path: '/LoadMore',
    //   name: 'LoadMore',
    //   component: App_LoadMore
    // },
    // {
    //   path: '/infinite',
    //   name: 'infinite',
    //   component: App_infinite
    // },
    // {
    //   path: '/message',
    //   name: 'message',
    //   component: App_message
    // },
    // {
    //   path: '/actionSheet',
    //   name: 'actionSheet',
    //   component: App_action_sheet
    // },
    // {
    //   path: '/popup',
    //   name: 'popup',
    //   component: App_popup
    // },
    // {
    //   path: '/switch',
    //   name: 'switch',
    //   component: App_switch
    // },
    // {
    //   path: '/lazyLoad',
    //   name: 'lazyLoad',
    //   component: App_lazyLoad
    // },
    // {
    //   path: '/range',
    //   name: 'range',
    //   component: App_range
    // },
    // {
    //   path: '/progress',
    //   name: 'progress',
    //   component: App_progress
    // },
    // {
    //   path: '/picker',
    //   name: 'picker',
    //   component: App_picker
    // },
    // {
    //   path: '/dateTimePicker',
    //   name: 'dateTimePicker',
    //   component: App_dateTimePicker
    // }
  ]
})
