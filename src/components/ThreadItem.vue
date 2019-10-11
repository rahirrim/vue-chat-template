<template>
    <div class="ThreadItem">
        <div class="ThreadItem__title">
            <h1 class="ThreadItem__subject">
                {{ thread.subject }}
            </h1>
            <span class="ThreadItem__date">{{ thread.created }}</span>
        </div>
        <div class="ThreadItem__description">
            <span>{{ thread.parts[thread.parts.length-1].text }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:  'ThreadItem',
    props: {
        thread: {
            type:    Object,
            default: () => {}
        },
    },
};
</script>

<style scoped lang="scss">
@import '~@/styles/mixins.scss';

.ThreadItem {
    width: 100%;
    height: 100px;
    padding: 20px;
    background-color: #F3F6F8;
    border-bottom: 1px solid #E9EDF2;
}

.ThreadItem__title {
    @include flex-block(space-between, flex-start);
}

.ThreadItem__subject {
    color: #35383D;
    font-size: 14px;
    line-height: 20px;
}

.ThreadItem__date {
    color: #B7C0C8;
    font-size: 10px;
    line-height: 14px;
}

.ThreadItem__description {
    color: #7D8790;
    font-size: 13px;
    line-height: 18px;
}
</style>
