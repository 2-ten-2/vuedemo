import Vue from "vue";
import Router from 'vue-router'
import Login from '@/pages/Login.vue';
import Home from '@/pages/Home'
Vue.use(Router);

const routes = [
  { path: "/", redirect: "/Login" },
  {
    path: "/Home", name: "Home", component: Home,
    children: [
      {
        path: "/Login",
        name: "Login",
        component: Login
      }
    ]
  },

]

const router = new Router({
  routes
})
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

export default router;