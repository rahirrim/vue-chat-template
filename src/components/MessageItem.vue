<template>
    <div
        class="MessageItem"
        :class="{ author: message.author === 'vasya'}"
    >
        <div class="MessageItem__text">
            <h1>{{ message.text }}</h1>
        </div>
        <div class="MessageItem__info">
            <p class="MessageItem__author-name">
                {{ message.author }}
            </p>
            <p class="MessageItem__date">
                {{ message.created }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name:  'MessageItem',
    props: {
        message: {
            type:    Object,
            default: () => {
            }
        },
    },
};
</script>

<style scoped lang="scss">
@import '~@/styles/mixins.scss';

.MessageItem {
    width: 380px;
    height: auto;

    margin-bottom: 48px;
    align-self: flex-start;

    &:last-child {
        margin-bottom: 0;
    }

    &.author {
        align-self: flex-end;

        .MessageItem__text {
            background-color: #E9F5F4;
            border-radius: 8px 8px 0 8px;
        }

        .MessageItem__info {
            justify-content: flex-end;
        }
    }
}

.MessageItem__text {
    color: #475453;
    font-size: 14px;
    line-height: 20px;
    padding: 16px;
    margin-bottom: 8px;
    background-color: #F6F7F9;
    border-radius: 8px 8px 8px 0;
}

.MessageItem__info {
    height: 20px;
    @include flex-block(flex-start, center);
}

.MessageItem__author-name {
    font-size: 13px;
    line-height: 18px;
    color: #000000;
    margin-right: 12px;
}

.MessageItem__date {
    color: #B7C0C8;
    font-size: 10px;
    line-height: 14px;
}
</style>
