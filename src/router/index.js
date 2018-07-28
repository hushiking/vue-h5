import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import SetupCompany from '@/views/SetupCompany'
import ContinueSetup from '@/views/ContinueSetup'
import BusinessConfirm from '@/views/BusinessConfirm'
import BusinessConfirmShow from '@/views/BusinessConfirmShow'
import BusinessConfirmProcess from '@/views/BusinessConfirmProcess'
import NotSelf from '@/views/NotSelf'
import Register from '@/views/Register'
import Authority from '@/views/Authority'
import MyBusiness from '@/views/MyBusiness'
// import MySearch from '@/components/MySearch'
// import MyCheckBox from '@/components/MyCheckBox'
// import MyBottom from '@/components/MyBottom'
// import MyRadio from '@/components/MyRadio'
// import MyInput from '@/components/MyInput'
import MyCard from '@/components/MyCard'
import Record from '@/views/Record'
import RecordCompleted from '@/views/RecordCompleted'
import Contact from '@/views/Contact'
import CompanyBaseinfo from '@/views/CompanyBaseinfo'
import Approved from '@/views/Approved'
import Lookup from '@/views/Lookup'
import Shareholder from '@/views/shareholder/Shareholder'
import Fill from '@/views/shareholder/Fill'
import NonNatural from '@/views/shareholder/NonNatural'
import Natural from '@/views/shareholder/Natural'
import Addition from '@/views/Addition'
import ProcessShow from '@/views/ProcessShow'
import Process from '@/views/Process'
import KeyPersonnel from '@/views/KeyPersonnel'
import KeyInfo from '@/views/KeyInfo'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      meta: {
        title: '用户登录'
      },
      name: 'login',
      component: Login
    },
    {
      path: '/plan_setup',
      meta: {
        title: '拟设立公司'
      },
      name: 'plan_setup',
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
      path: '/continue_setup',
      meta: {
        title: '我的业务'
      },
      name: 'continue_setup',
      component: ContinueSetup
    },
    {
      path: '/business_confirm',
      meta: {
        title: '业务确认'
      },
      name: 'business_confirm',
      component: BusinessConfirm
    },
    {
      path: '/business_confirm_show',
      meta: {
        title: '业务确认'
      },
      name: 'business_confirm_show',
      component: BusinessConfirmShow
    },
    {
      path: '/business_confirm_process',
      meta: {
        title: '业务确认'
      },
      name: 'business_confirm_process',
      component: BusinessConfirmProcess
    },
    {
      path: '/register',
      meta: {
        title: '注册'
      },
      name: 'register',
      component: Register
    },
    {
      path: '/authority',
      meta: {
        title: '企业开办'
      },
      name: 'authority',
      component: Authority
    },
    {
      path: '/my_business',
      meta: {
        title: '我的业务'
      },
      name: 'my_business',
      component: MyBusiness
    },
    {
      path: '/record',
      meta: {
        title: '备案填报'
      },
      name: 'record',
      component: Record
    },
    {
      path: '/record_completed',
      meta: {
        title: '备案填报'
      },
      name: 'record_completed',
      component: RecordCompleted
    },
    {
      path: '/contact',
      meta: {
        title: '企业联系人'
      },
      name: 'contact',
      component: Contact
    },
    {
      path: '/baseinfo',
      meta: {
        title: '企业基本信息'
      },
      name: 'company_baseinfo',
      component: CompanyBaseinfo
    },
    {
      path: '/approved',
      meta: {
        title: '企业基本信息'
      },
      name: 'approved',
      component: Approved
    },
    {
      path: '/lookup',
      meta: {
        title: '企业经营范围'
      },
      name: 'lookup',
      component: Lookup
    },
    {
      path: '/shareholder',
      name: 'shareholder',
      component: Shareholder,
      redirect: {
        name: 'shareholder_fill'
      },
      children: [{
          path: 'fill',
          meta: {
            title: '股东信息填报'
          },
          name: 'shareholder_fill',
          component: Fill
        },
        {
          path: '/natural',
          meta: {
            title: '股东信息填报'
          },
          name: 'shareholder_natural',
          component: Natural
        },
        {
          path: '/non_natural',
          meta: {
            title: '股东信息填报'
          },
          name: 'shareholder_non_natural',
          component: NonNatural
        }
      ]
    },
    {
      path: '/addition',
      meta: {
        title: '补充信息'
      },
      name: 'addition',
      component: Addition
    },
    {
      path: '/process',
      meta: {
        title: '进度查看'
      },
      name: 'process',
      component: Process
    },
    {
      path: '/process_show',
      meta: {
        title: '进度查看'
      },
      name: 'process_show',
      component: ProcessShow
    },
    {
      path: '/key_personnel',
      meta: {
        title: '主要人员信息'
      },
      name: 'key_personnel',
      component: KeyPersonnel
    },
    {
      path: '/key_info',
      meta: {
        title: '主要人员信息'
      },
      name: 'key_info',
      component: KeyInfo
    },
    {
      path: '*',
      meta: {
        title: '其他'
      },
      name: 'any',
      component: MyCard
    }
  ]
})
