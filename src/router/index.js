import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import ProposedEstablish from '@/views/ProposedEstablish'
import ContinueEstablish from '@/views/ContinueEstablish'
import ProposedNotself from '@/views/ProposedNotself'
import BusinessConfirm from '@/views/BusinessConfirm'
import BusinessConfirmShow from '@/views/BusinessConfirmShow'
import BusinessConfirmProcess from '@/views/BusinessConfirmProcess'
import Register from '@/views/Register'
import Authority from '@/views/Authority'
import MyBusiness from '@/views/MyBusiness'
// import MySearch from '@/components/MySearch'
// import MyCheckBox from '@/components/MyCheckBox'
// import MyBottom from '@/components/MyBottom'
// import MyRadio from '@/components/MyRadio'
import MyCollapse from '@/components/MyCollapse'
// import MyCard from '@/components/MyCard'
import Record from '@/views/Record'
import RecordCompleted from '@/views/RecordCompleted'
import Contact from '@/views/Contact'
import CompanyBaseinfo from '@/views/CompanyBaseinfo'
import CompanyApproved from '@/views/CompanyApproved'
import BusinessScope from '@/views/BusinessScope'
import BusinessScopeLookup from '@/views/BusinessScopeLookup'
import BusinessScopeModal from '@/views/BusinessScopeModal'
import Shareholder from '@/views/shareholder/Shareholder'
import Fill from '@/views/shareholder/Fill'
import NonNatural from '@/views/shareholder/NonNatural'
import Natural from '@/views/shareholder/Natural'
import Addition from '@/views/Addition'
import ProcessList from '@/views/ProcessList'
import Process from '@/views/Process'
import KeyPersonnel from '@/views/KeyPersonnel'
import KeyPersonnelAdd from '@/views/KeyPersonnelAdd'
import KeyInfo from '@/views/KeyInfo'
import FileUpload from '@/views/FileUpload'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
      path: '/',
      meta: {
        title: '用户登录'
      },
      name: 'login',
      component: Login
    },
    {
      path: '/establish',
      meta: {
        title: '拟设立公司'
      },
      name: 'proposed_establish',
      component: ProposedEstablish
    },
    {
      path: '/notself',
      meta: {
        title: '拟设立公司'
      },
      name: 'proposed_notself',
      component: ProposedNotself
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
      path: '/continue',
      meta: {
        title: '我的业务'
      },
      name: 'continue_establish',
      component: ContinueEstablish
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
      name: 'company_approved',
      component: CompanyApproved
    },
    {
      path: '/scope',
      meta: {
        title: '企业经营范围'
      },
      name: 'business_scope',
      component: BusinessScope
    },
    {
      path: '/lookup',
      meta: {
        title: '企业经营范围'
      },
      name: 'business_scope_lookup',
      component: BusinessScopeLookup
    },
    {
      path: '/modal',
      meta: {
        title: '企业经营范围'
      },
      name: 'business_scope_modal',
      component: BusinessScopeModal
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
          path: 'natural',
          meta: {
            title: '股东信息填报'
          },
          name: 'shareholder_natural',
          component: Natural
        },
        {
          path: 'non_natural',
          meta: {
            title: '股东信息填报'
          },
          name: 'shareholder_non_natural',
          component: NonNatural
        }
      ]
    },
    {
      path: '/personnel',
      meta: {
        title: '主要人员信息'
      },
      name: 'key_personnel',
      component: KeyPersonnel
    },
    {
      path: '/personnel_add',
      meta: {
        title: '主要人员信息'
      },
      name: 'key_personnel_add',
      component: KeyPersonnelAdd
    },
    {
      path: '/personnel_info',
      meta: {
        title: '主要人员信息'
      },
      name: 'key_info',
      component: KeyInfo
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
      path: '/file_upload',
      meta: {
        title: '文件上传'
      },
      name: 'file_upload',
      component: FileUpload
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
      path: '/process',
      meta: {
        title: '进度查看'
      },
      name: 'process',
      component: Process
    },
    {
      path: '/process_list',
      meta: {
        title: '进度查看'
      },
      name: 'process_list',
      component: ProcessList
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
      path: '*',
      meta: {
        title: '其他'
      },
      name: 'any',
      component: MyCollapse
    }
  ]
})
