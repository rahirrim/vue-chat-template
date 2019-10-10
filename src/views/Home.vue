<template>
    <div class="Home">
        <ThreadsList />
    </div>
</template>

<script>
import ThreadsList from '@/components/ThreadsList.vue';

export default {
    name:       'Home',
    components: {
        ThreadsList,
    },
    computed: {},
    methods:  {
        /**
         * Method description.
         */
        setThreadList() {
        },
    },
};
</script>

<style scoped lang="scss">
    .Home {
        width: 100%;
        height: 100%;
    }
</style>
