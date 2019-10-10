<template>
    <div class="ThreadsList">
        <ThreadItem
            v-for="thread in threadsList"
            :key="thread.id"
            :message="thread"
        />
    </div>
</template>

<script>
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
};
</script>

<style scoped lang="scss">
  .ThreadsList {
    width: 300px;
    height: 100%;
    background-color: #F3F6F8;
  }
</style>
