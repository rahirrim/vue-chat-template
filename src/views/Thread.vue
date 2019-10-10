<template>
    <div class="Thread">
        <h2>the product id is: {{ $route.params }}</h2>
        <MessagesList />
    </div>
</template>

<script>
import MessagesList from '@/components/ThreadsList.vue';

export default {
    name:       'Thread',
    components: {
        MessagesList,
    },
};
</script>
