<template>
    <div class="Chat">
        <ThreadsList :threads-list="threadsList" />
        <div class="Chat__right">
            <template v-if="!threadLoading">
                <router-view
                    @scrollBottom="scrollBottom"
                />
                <MessageSendForm @scrollBottom="scrollBottom" />
            </template>
            <template v-else>
                <div class="Chat__loading">
                    <div class="lds-facebook">
                        <div /><div /><div />
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import ThreadsList from '@/components/ThreadsList.vue';
import MessageSendForm from '@/components/MessageSendForm.vue';
import { mapState, mapActions } from 'vuex';

export default {
    name:       'Chat',
    components: {
        ThreadsList,
        MessageSendForm,
    },
    computed: {
        ...mapState([
            'threadsList',
            'threadLoading',
            'currentUser',
        ]),
    },
    mounted() {
        this.loadInitialState(this.$route.params.id);
    },
    methods: {
        /**
         * Скроллинг до последнего сообщения.
         */
        scrollBottom() {
            const container = this.$el.querySelector('.MessageList');

            container.scrollTop = container.scrollHeight;
        },

        ...mapActions([
            'loadInitialState',
            'setNewMessage',
        ]),
    },
};
</script>

<style scoped lang="scss">
    @import '~@/styles/mixins.scss';

    .Chat {
        width: 100%;
        height: 100%;
        @include flex-block(flex-start, flex-start);
    }

    .Chat__right {
        width: calc(100% - 300px);
        height: 100%;
        @include flex-block(flex-start, flex-start);
        flex-direction: column;
        background-color: #ffffff;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }

    .Chat__loading {
        width: 100%;
        height: 100%;
        @include flex-block(center, center);
    }

    .lds-facebook {
        display: inline-block;
        position: relative;
        width: 64px;
        height: 64px;
    }
    .lds-facebook div {
        display: inline-block;
        position: absolute;
        left: 6px;
        width: 13px;
        background-color: #00c661;
        animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }
    .lds-facebook div:nth-child(1) {
        left: 6px;
        animation-delay: -0.24s;
    }
    .lds-facebook div:nth-child(2) {
        left: 26px;
        animation-delay: -0.12s;
    }
    .lds-facebook div:nth-child(3) {
        left: 45px;
        animation-delay: 0;
    }
    @keyframes lds-facebook {
        0% {
            top: 6px;
            height: 51px;
        }
        50%, 100% {
            top: 19px;
            height: 26px;
        }
    }
</style>
