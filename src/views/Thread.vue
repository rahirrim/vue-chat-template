<template>
    <div class="Thread">
        <MessagesList :messages-list="messagesList" />
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import MessagesList from '@/components/MessagesList.vue';

export default {
    name:       'Thread',
    components: {
        MessagesList,
    },
    computed: {
        ...mapState([
            'messagesList',
        ]),
    },
    mounted() {
        this.loadInitialState({ threadId: this.$route.params.id });
    },
    methods: {
        /**
         * Method description.
         */
        doSomthing() {
        },
        ...mapActions([
            'loadInitialState',
        ]),
    },
};
</script>

<style scoped lang="scss">
@import '~@/styles/mixins.scss';

.Thread {
    width: calc(100% - 300px);
    height: 100%;
    @include flex-block(flex-start, flex-start);
    background-color: #ffffff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
</style>

