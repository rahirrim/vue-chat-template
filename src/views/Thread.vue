<template>
    <div class="Thread">
        <MessagesList />
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import MessagesList from '@/components/MessagesList.vue';

export default {
    name:       'Thread',
    components: {
        MessagesList,
    },
    mounted() {
        this.setCurrentThread(this.$route.params.id);
        this.$nextTick(() => this.$emit('scrollBottom'))
    },
    methods: {
        ...mapActions([
            'setCurrentThread',
        ]),
    },
};
</script>

<style scoped lang="scss">
@import '~@/styles/mixins.scss';

.Thread {
    width: 100%;
    height: 100%;
    @include flex-block(flex-start, flex-start);
}
</style>

