import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
/* other import */
import { MainPage, AboutPage } from './pages';

Vue.config.productionTip = false

Vue.use(VueRouter); // router 기능 확장 선언


// 이곳에 router 를 등록할 것 입니다.
const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/about',
        component: AboutPage
    }

];

// router 객체생성
const router = new VueRouter({
    routes
});

new Vue({
    render: h => h(App),
    router // router 추가
}).$mount('#app')

