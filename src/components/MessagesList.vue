<template>
    <div class="MessageList">
        <MessageItem
            v-for="message in messagesList"
            :key="message.id"
            :message="message"
        />
    </div>
</template>

<script>
import MessageItem from '@/components/MessageItem.vue';

export default {
    name:       'MessagesList',
    components: {
        MessageItem,
    },
    props: {
        messagesList: {
            type:    Array,
            default: () => []
        },
    },
};
</script>

<style scoped lang="scss">
.MessageList {

}
</style>
