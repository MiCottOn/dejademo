import Vue from 'vue';
import App from './App.vue';
import Contact from './Contact.vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: App },
    { path: '/contact', component: Contact }
  ]
})

new Vue({
  router,
  el: '#app'
})
