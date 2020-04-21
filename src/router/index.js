
const Vue = require('vue')
const Router = require('vue-router')

import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

import skeleton from '@/views/skeleton/skeleton.vue'

Vue.use(Router)

/* Layout */
//import Layout from '@/layout'

//路由懒加载
const home = r => require.ensure([], () => r(require('@/views/index.vue')))
const icons = r => require.ensure([], () => r(require('@/views/icons/index.vue')))


export const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: { title: '主页', keepAlive: false, auth: false }
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: { title: '主页', keepAlive: false, auth: false }
  },
  {
    path: '/icons',
    name: 'icons',
    component: icons,
    meta: { title: '图标列表', keepAlive: true, auth: false }
  },
  { // 插入骨架屏路由
    path: '/skeleton',
    name: 'skeleton',
    component: skeleton
  },
]


const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}



/* set global route */

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {

  // set page title
  document.title = getPageTitle(to.meta.title);

  // determine whether the user has logged in
  const hasToken = getToken();

  if (hasToken) {

    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })

    } else {

      next()
    }

  } else {

    next();

    /* has no token*/
    // if (whiteList.indexOf(to.path) !== -1) {
    //   // in the free login whitelist, go directly
    //   next()
    // } else {
    //   // other pages that do not have permission to access are redirected to the login page.
    //   next(`/login?redirect=${to.path}`)
    // }
  }
})

router.afterEach(() => {
})

export default router;
