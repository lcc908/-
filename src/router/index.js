import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import newList from '@/page/newlist/newList'
import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/newList',
      name: 'newList',
      component: newList
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    }
  ]
})
