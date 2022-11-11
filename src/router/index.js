import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NotFoundView from '../views/NotFoundView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Home' },
  },
  {
    path: '/about',
    name: 'About',
    meta: { title: 'About' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/post',
    name: 'post',
    component: () =>
      import(/* webpackChunkName: "post" */ '../views/PostView.vue'),
  },
  {
    path: '/post/:id',
    name: 'PostShow',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/PostShowView.vue'),
    props: true,
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
