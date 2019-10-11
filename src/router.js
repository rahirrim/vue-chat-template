import Vue    from 'vue';
import Router from 'vue-router';
import Thread from '@/views/Thread';

Vue.use(Router);

export default new Router({
    mode:   'history',
    base:   process.env.BASE_URL,
    routes: [
        {
            path:      '/threads',
            name:      'thread',
            component: () => import('./views/Chat.vue'),
            children:  [
                { path: ':id', component: Thread },
            ]
        },
    ],
});
