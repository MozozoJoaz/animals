import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import { routes } from './route.js'

const router = createRouter({
    history : createWebHistory(),
    routes,
});

//await router.isReady();

const app = createApp(App);
app.use(router);
app.mount('#app');
