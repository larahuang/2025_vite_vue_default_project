import { createRouter,createWebHistory } from 'vue-router'
import type { RouteRecordRaw, RouterOptions, Router } from 'vue-router'
import Layout from "../layout/Layout.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/index",
        component: Layout,
        children: [
            {
                path: "index",
                component: () => import("../views/Home.vue"),
                name: "Home",
                meta: { title: "首頁", noAauth: true },
            },
            {
                path: '/about_us',
                name: 'AboutUs',
                component: () => import('../views/AboutUs.vue')
            },
        ]
    },
    {
         path: "/:catchAll(.*)",
    name: "404",
    component: () => import("../views/errorPage/404.vue"),
    meta: {
      title: "404",
    },
    }
]
const options: RouterOptions = {
  history: createWebHistory(), //井字號不顯示
  // history: createWebHashHistory(),//井字號顯示
  routes,
}

// Router是路由對象類型
const router: Router = createRouter(options);
// 導航守衛
router.beforeEach(async (to, from, next) => {
  const isAuthenticated = localStorage.getItem("token")
  if (to.name == "Home" || to.name == "AboutUs" || to.name == "Login") {
    console.log('from', from)
    next()
  } else {
    if (isAuthenticated === null || isAuthenticated === "") {
     alert("你還沒有登入 請先登入")
      to.name !== "Admin"
      next({ name: "Login" })
    } else {
      next()
    }
  }
})
export default router