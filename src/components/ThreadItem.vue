<template>
    <div class="ThreadItem">
        <h1>{{ thread.text }}</h1>
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
  .ThreadItem {

  }
</style>
