<template>
    <div class="Home">
        <ThreadsList :threads-list="threadsList" />
        <router-view />
    </div>
</template>

<script>
import ThreadsList  from '@/components/ThreadsList.vue';
import { mapState } from 'vuex';

export default {
    name:       'Home',
    components: {
        ThreadsList,
    },
    computed: {
        ...mapState([
            'threadsList',
        ]),
    },
    methods: {
    },
};
</script>

<style scoped lang="scss">
@import '~@/styles/mixins.scss';

.Home {
    width: 100%;
    height: 100%;
    @include flex-block(flex-start, flex-start);
}
</style>
