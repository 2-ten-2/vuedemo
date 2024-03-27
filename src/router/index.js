import Vue from "vue";
import VueRouter from 'vue-router'
import Login from '@/pages/Login.vue';

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/Login" },
  {
    path: "/Login",
    name: "Login",
    componet: Login
  }
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