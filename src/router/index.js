import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import SetupCompany from '@/views/SetupCompany'
import NotSelf from '@/views/NotSelf'
import Register from '@/views/Register'
import Authority from '@/views/Authority'
import MyBusiness from '@/views/MyBusiness'
// import MySearch from '@/components/MySearch'
// import MyCheckBox from '@/components/MyCheckBox'
// import MyInput from '@/components/MyInput'
import MyBottom from '@/components/MyBottom'
import Record from '@/views/Record'
import RecordCompleted from '@/views/RecordCompleted'
import Contact from '@/views/Contact'
import Approved from '@/views/Approved'
import CompanyBaseinfo from '@/views/CompanyBaseinfo'
import Lookup from '@/views/Lookup'
import NonNatural from '@/views/NonNatural'

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
      path: '/setup_company',
      meta: {
        title: '拟设立公司'
      },
      name: 'setup_company',
      component: SetupCompany
    },
    {
      path: '/not_self',
      meta: {
        title: '拟设立公司'
      },
      name: 'not_self',
      component: NotSelf
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
    },
    {
      path: '/record',
      meta: {
        name: '备案填报'
      },
      name: 'record',
      component: Record
    },
    {
      path: '/record_completed',
      meta: {
        name: '备案填报'
      },
      name: 'record_completed',
      component: RecordCompleted
    },
    {
      path: '/contact',
      meta: {
        name: '企业联系人'
      },
      name: 'contact',
      component: Contact
    },
    {
      path: '/approved',
      meta: {
        name: '企业基本信息'
      },
      name: 'approved',
      component: Approved
    },
    {
      path: '/company_baseinfo',
      meta: {
        name: '企业基本信息'
      },
      name: 'company_baseinfo',
      component: CompanyBaseinfo
    },
    {
      path: '/lookup',
      meta: {
        name: '企业经营范围'
      },
      name: 'lookup',
      component: Lookup
    },
    {
      path: '/non_natural',
      meta: {
        name: '企业经营范围'
      },
      name: 'non_natural',
      component: NonNatural
    },
    {
      path: '*',
      meta: {
        name: '其他'
      },
      name: 'any',
      component: MyBottom
    }
  ]
})
