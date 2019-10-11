<template>
    <form class="MessageSendForm">
        <input
            v-model="messageText"
            class="MessageSendForm__input"
            :disabled="messageSendLoading"
            type="text"
            placeholder="Введите текст..."
        >
        <input
            v-if="!messageSendLoading"
            class="MessageSendForm__submit"
            type="submit"
            value=""
            @click.prevent="sendMessage"
        >
        <div
            v-else
            class="MessageSendForm__loading"
        >
            <div />
            <div />
            <div />
            <div />
        </div>
    </form>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
    name: 'MessageSendForm',
    data() {
        return {
            messageText: '',
        };
    },
    computed: {
        ...mapState([
            'currentUser',
            'currentThread',
            'messageSendLoading',
        ]),
    },
    methods: {
        /**
         * Отправка нового сообщения
         */
        sendMessage() {
            if (!this.messageText || !this.messageText.replace(/\s/g, '').length) {
                this.messageText = '';
                return;
            }

            this.setMessageSendLoading(true);

            setTimeout(() => {
                this.setNewMessage({
                    message: {
                        id:      this.currentThread.parts[this.currentThread.parts.length - 1].id + 2,
                        author:  this.currentUser.name,
                        created: new Date(),
                        text:    this.messageText,
                    }
                }).then(() => {
                    this.messageText = '';

                    this.$emit('scrollBottom')
                });
                this.setMessageSendLoading(false)
            }, 1000)


        },

        ...mapActions([
            'loadInitialState',
            'setNewMessage',
        ]),
        ...mapMutations([
            'setMessageSendLoading',
        ]),
    },
};
</script>

<style scoped lang="scss">
    @import '~@/styles/mixins.scss';

    .MessageSendForm {
        width: 100%;
        height: 80px;
        border-top: 1px solid #E9EDF2;
        @include flex-block(flex-start, flex-start);
    }

    .MessageSendForm__input {
        outline: none;
        border: none;
        width: calc(100% - 80px);
        height: 100%;
        color: #7D8790;
        font-size: 14px;
        line-height: 20px;
        padding: 24px 32px;

        &:disabled {
            background-color: #E9EDF2;
        }
    }

    .MessageSendForm__submit {
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

    .MessageSendForm__loading {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 100%;
        background-color: #398BFF;
    }

    .MessageSendForm__loading div {
        position: absolute;
        top: 27px;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background: #fff;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }

    .MessageSendForm__loading div:nth-child(1) {
        left: 14px;
        animation: lds-ellipsis1 0.6s infinite;
    }
    .MessageSendForm__loading div:nth-child(2) {
        left: 14px;
        animation: lds-ellipsis2 0.6s infinite;
    }
    .MessageSendForm__loading div:nth-child(3) {
        left: 34px;
        animation: lds-ellipsis2 0.6s infinite;
    }
    .MessageSendForm__loading div:nth-child(4) {
        left: 54px;
        animation: lds-ellipsis3 0.6s infinite;
    }

    @keyframes lds-ellipsis1 {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes lds-ellipsis3 {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }
    @keyframes lds-ellipsis2 {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(19px, 0);
        }
    }
</style>
