//引入路由对象
import { createRouter, createWebHistory,createWebHashHistory, RouteRecordRaw } from 'vue-router'
 
// 路由类型 RouteRecordRaw
// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/index.vue'),  /* 路由懒加载 */
        meta: { transition: 'home' },
    },
    {
        path: '/tags',
        name: 'tags',
        component: () => import('@/views/tags/index.vue'),  /* 路由懒加载 */
        meta: { transition: 'tags' },
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about/index.vue'),  /* 路由懒加载 */
        meta: { transition: 'about' },
    },
    {
        path: '/article',
        name: 'article',
        component: () => import('@/views/article/index.vue'),  /* 路由懒加载 */
        meta: { transition: 'article' },
    },
]
 
/* 路由模式 
  createWebHistory: h5
  createWebHashHistory: HASH
  createMemoryHistory: 服务端渲染时
*/
 
const router = createRouter({
    history: createWebHistory(),
    routes
})
 
//导出router
export default router