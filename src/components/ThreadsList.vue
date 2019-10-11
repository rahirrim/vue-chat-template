<template>
    <div class="ThreadsList">
        <div class="ThreadsList__title">
            <span class="ThreadsList__title-text">Сообщения</span>
            <span class="ThreadsList__title-count">151</span>
        </div>
        <router-link
            v-for="thread in threadsList"
            :key="thread.id"
            :to="`/threads/${thread.id}`"
            class="ThreadsList__link"
        >
            <ThreadItem :thread="thread" />
        </router-link>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import ThreadItem from '@/components/ThreadItem.vue';

export default {
    name:       'ThreadsList',
    components: {
        ThreadItem,
    },
    props: {
        threadsList: {
            type:    Array,
            default: () => []
        },
    },
    methods: {
        ...mapActions([
            'setCurrentThread',
        ]),
    }
};
</script>

<style scoped lang="scss">
@import '~@/styles/mixins.scss';

.ThreadsList {
    width: 300px;
    height: 100%;
    background-color: #F3F6F8;
    border: 1px solid #E9EDF2;
}

.ThreadsList__title {
    width: 100%;
    height: 60px;
    padding: 20px;
    border-bottom: 1px solid #E9EDF2;
    @include flex-block(flex-start, center);
}

.ThreadsList__title-text {
    color: #656B77;
    font-size: 14px;
    line-height: 20px;
    margin-right: 10px;
}

.ThreadsList__title-count {
    color: #D2D8DE;
    font-size: 14px;
    line-height: 20px;
}

.ThreadsList__link {
    text-decoration: none;
}
</style>
