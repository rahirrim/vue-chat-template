<template>
    <div class="Chat">
        <ThreadsList :threads-list="threadsList" />
        <div class="Chat__right">
            <router-view
                :key="$route.fullPath"
                @scrollBottom="scrollBottom"
            />
            <form class="Chat__form">
                <input
                    v-model="messageText"
                    class="Chat__input"
                    type="text"
                    placeholder="Введите текст..."
                >
                <input
                    class="Chat__submit"
                    type="submit"
                    value=""
                    @click.prevent="sendMessage"
                >
            </form>
        </div>
    </div>
</template>

<script>
import ThreadsList from '@/components/ThreadsList.vue';
import { mapState, mapActions } from 'vuex';

export default {
    name:       'Chat',
    components: {
        ThreadsList,
    },
    data() {
        return {
            messageText: '',
        };
    },
    computed: {
        ...mapState([
            'threadsList',
            'currentThread',
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

        /**
         * Отправка нового сообщения
         */
        sendMessage() {
            this.setNewMessage({
                message: {
                    id:      this.currentThread.parts[this.currentThread.parts.length - 1].id + 2,
                    author:  this.currentUser.name,
                    created: new Date(),
                    text:    this.messageText,
                }
            }).then(() => {
                this.messageText = '';

                this.scrollBottom()
            });
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

    .Chat__form {
        width: 100%;
        height: 80px;
        border-top: 1px solid #E9EDF2;
        @include flex-block(flex-start, flex-start);
    }

    .Chat__input {
        outline: none;
        border: none;
        width: calc(100% - 80px);
        height: 100%;
        color: #7D8790;
        font-size: 14px;
        line-height: 20px;
        padding: 24px 32px;
    }

    .Chat__submit {
        cursor: pointer;
        outline: none;
        border: none;
        width: 80px;
        height: 100%;
        background-color: #398BFF;
        background-image: url("../assets/vector.svg");
        background-repeat: no-repeat;
        background-position: center;
    }
</style>
