import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    will control the page roles (you can set multiple roles)
    title: 'title'               the name show in sub-menu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if true, the page will no be cached(default is false)
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
    affix: true                  if true, the tag will affix in the tags-view
  }
 **/

export const constantRoutes = [
  { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
  { path: '/401', component: () => import('@/views/errorPage/401'), hidden: true },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '',
    component: Layout,
    redirect: 'platform',
    children: [{
      path: 'platform',
      component: () => import('@/views/platform/index'),
      name: 'Platform',
      meta: { title: 'Platform Summary', icon: 'dashboard', affix: true }
    }]
  }
]

export const asyncRoutes = [
  {
    path: '/generalinfo',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/generalinfo/index'),
        name: 'Generalinfo',
        meta: { title: 'General information', icon: 'tree' }
      }
    ]
  },
  {
    path: '/schedule',
    component: Layout,
    children: [
      {
        path: 'milestone',
        component: () => import('@/views/schedule/milestone'),
        name: 'Milestone',
        meta: { title: 'Key Milestones', icon: 'tree' }
      },
      {
        path: 'ODM',
        component: () => import('@/views/schedule/ODM'),
        name: 'ODM',
        meta: { title: 'ODM L 10 Build', icon: 'tree' }
      },
      {
        path: 'factory',
        component: () => import('@/views/schedule/factory'),
        name: 'Factory',
        meta: { title: 'WW Factory Build', icon: 'tree' }
      },
      {
        path: 'more',
        component: () => import('@/views/schedule/more'),
        name: 'More',
        meta: { title: 'More Schedule', icon: 'tree' }
      }
    ],
    name: 'Schedule',
    meta: { title: 'Schedule', icon: 'tree' }
  },
  {
    path: '/risk',
    component: Layout,
    children: [
      {
        path: 'NUDD',
        component: () => import('@/views/risk/NUDD'),
        name: 'NUDD',
        meta: { title: 'NUDD', icon: 'tree' }
      },
      {
        path: 'DFMAA',
        component: () => import('@/views/risk/DFMAA'),
        name: 'DFMAA',
        meta: { title: 'DFMAA', icon: 'tree' }
      }
    ],
    name: 'Risk',
    meta: { title: 'Risk', icon: 'tree' }
  },
  {
    path: '/issue',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/issue/index'),
        name: 'Issue',
        meta: { title: 'Issue', icon: 'tree' }
      }
    ]
  },
  {
    path: '/KPI',
    component: Layout,
    children: [
      {
        path: 'FPY',
        component: () => import('@/views/KPI/FPY'),
        name: 'FPY',
        meta: { title: 'FPY', icon: 'tree' }
      },
      {
        path: 'UPH',
        component: () => import('@/views/KPI/UPH'),
        name: 'UPH',
        meta: { title: 'UPH', icon: 'tree' }
      }
    ],
    name: 'KPI',
    meta: { title: 'KPI', icon: 'tree' }
  },
  { path: '*', redirect: '/404', hidden: true }
]

/* export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})*/

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
