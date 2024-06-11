import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { Message } from 'element-ui'

NProgress.configure({ showSpinner: false })// NProgress configuration

router.beforeEach((to, from, next) => {
  NProgress.start()
  store.dispatch('GenerateRoutes').then(accessRoutes => { // 根据roles权限生成可访问的路由
    console.log(accessRoutes)
    router.addRoutes(accessRoutes) // 动态添加可访问路由表
    next() // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
  }).catch((err) => {
    store.dispatch('FedLogOut').then(() => {
      Message.error(err || 'Verification failed, please login again')
      next({ path: '/' })
    })
  })
})

router.afterEach(() => { // 结束Progress
  NProgress.done() // 结束Progress
})
