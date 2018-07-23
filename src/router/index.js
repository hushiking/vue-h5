import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Company from '@/components/Company'
import Others from '@/components/Others'
import Register from '@/components/Register'
import Authority from '@/components/Authority'
import MyBusiness from '@/components/MyBusiness'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta: {
        title: '用户登录'
      },
      name: 'login',
      component: Login
    },
    {
      path: '/company',
      meta: {
        title: '拟设立公司'
      },
      name: 'company',
      component: Company
    },
    {
      path: '/others',
      meta: {
        title: '拟设立公司'
      },
      name: 'others',
      component: Others
    },
    {
      path: '/register',
      meta: {
        name: '注册'
      },
      name: 'register',
      component: Register
    },
    {
      path: '/authority',
      meta: {
        name: '企业开办'
      },
      name: 'authority',
      component: Authority
    },
    {
      path: '/my_business',
      meta: {
        name: '我的业务'
      },
      name: 'my_business',
      component: MyBusiness
    }
  ]
})
