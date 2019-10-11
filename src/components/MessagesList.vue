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
import MessageItem    from '@/components/MessageItem.vue';
import { mapGetters } from 'vuex';

export default {
    name:       'MessagesList',
    components: {
        MessageItem,
    },
    computed: {
        ...mapGetters([
            'messagesList',
        ]),
    }
};
</script>

<style scoped lang="scss">
@import '~@/styles/mixins.scss';

.MessageList {
    width: 100%;
    max-height: 100%;
    overflow-y: scroll;
    padding: 40px 16px 40px 40px;
    @include flex-block(flex-start, flex-start);
    flex-direction: column;
    align-self: flex-end;
}
</style>
