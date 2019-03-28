import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import App_toast from '@/components/App_toast'
import App_indicator from '@/components/App_indicator'
import App_LoadMore from '@/components/App_Loadmore'
import App_infinite from '@/components/App_infinite'
import App_message from '@/components/App_message'
import App_action_sheet from '@/components/App_action_sheet'
import App_popup from '@/components/App_popup'
import App_switch from '@/components/App_switch'
import App_lazyLoad from '@/components/App_lazyload'
import App_progress from '@/components/App_progress'
import App_picker from '@/components/App_picker'
import App_dateTimePicker from '@/components/App_datetime_picker'
import App_index_list from '@/components/App_index_list'
import App_palette_button from '@/components/App_palette_button'
import App_header from '@/components/App_header'
import App_tabbar from '@/components/App_tabbar'
import App_button from '@/components/App_button'
import App_cell from '@/components/App_cell'
import App_CellSwipe from '@/components/App_CellSwipe'
import App_spinner from '@/components/App_spinner'
import App_tabContainer from '@/components/App_tabContainer'
import App_search from '@/components/App_search'
import App_checkList from '@/components/App_checkList'

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
    },
    {
      path: '/LoadMore',
      name: 'LoadMore',
      component: App_LoadMore
    },
    {
      path: '/infinite',
      name: 'infinite',
      component: App_infinite
    },
    {
      path: '/message',
      name: 'message',
      component: App_message
    },
    {
      path: '/actionSheet',
      name: 'actionSheet',
      component: App_action_sheet
    },
    {
      path: '/popup',
      name: 'popup',
      component: App_popup
    },
    {
      path: '/switch',
      name: 'switch',
      component: App_switch
    },
    {
      path: '/lazyLoad',
      name: 'lazyLoad',
      component: App_lazyLoad
    },
    {
      path: '/progress',
      name: 'progress',
      component: App_progress
    },
    {
      path: '/picker',
      name: 'picker',
      component: App_picker
    },
    {
      path: '/dateTimePicker',
      name: 'dateTimePicker',
      component: App_dateTimePicker
    },
    {
      path: '/IndexList',
      name: 'IndexList',
      component: App_index_list
    },
    {
      path: '/PaletteButton',
      name: 'PaletteButton',
      component: App_palette_button
    },
    {
      path: '/Header',
      name: 'Header',
      component: App_header
    },
    {
      path: '/tabbar',
      name: 'tabbar',
      component: App_tabbar
    },
    {
      path: '/Button',
      name: 'Button',
      component: App_button
    },
    {
      path: '/Cell',
      name: 'Cell',
      component: App_cell
    },
    {
      path: '/CellSwipe',
      name: 'CellSwipe',
      component: App_CellSwipe
    },
    {
      path: '/Spinner',
      name: 'Spinner',
      component: App_spinner
    },
    {
      path: '/TabContainer',
      name: 'TabContainer',
      component: App_tabContainer
    },
    {
      path: '/Search',
      name: 'Search',
      component: App_search
    },
    {
      path: '/CheckList',
      name: 'CheckList',
      component: App_checkList
    }
  ]
})
