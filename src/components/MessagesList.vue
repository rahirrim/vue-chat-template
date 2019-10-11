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
@import '~@/styles/mixins.scss';

.MessageList {
    width: 100%;
    padding: 40px 16px 40px 40px;
    @include flex-block(flex-start, flex-start);
    flex-direction: column;
    align-self: flex-end;
}
</style>
