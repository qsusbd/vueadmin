import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import layout from '@/views/layout'
import economy from '@/views/economy'
Vue.use(Router)

const routers = [
  {
    path: '/',
    component: layout
  },
  {
    path: '/index',
    component: index
  },
  {
    path: '/index',
    component: economy
  }
]
export default new Router({
  mode: 'history',
  routes: routers
})
