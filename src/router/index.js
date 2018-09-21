import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import layout from '@/views/layout'
Vue.use(Router)

const routers = [
  {
    path: '/',
    component: layout
  },
  {
    path: '/index',
    component: index
  }
]
export default new Router({
  mode: 'history',
  routes: routers
})
