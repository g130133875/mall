import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Profile = () => import('@/views/profile/Profile')
const Shopcar = () => import('@/views/shopcar/Shopcar')
Vue.use(VueRouter)
//push
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shopcar',
    component: Shopcar
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router