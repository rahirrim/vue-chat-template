import Vue    from 'vue';
import Router from 'vue-router';
import Thread from '@/views/Thread';

Vue.use(Router);

export default new Router({
    mode:   'history',
    base:   process.env.BASE_URL,
    routes: [
        {
            path:      '/',
            name:      'home',
            component: Home,
        },
        {
            path:      '/thread/:id',
            name:      'thread',
            component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
            children:  [
                { path: '', component: Thread },
            ]
        },
    ],
});
