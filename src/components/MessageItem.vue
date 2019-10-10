<template>
    <div class="MessageItem">
        <h1>{{ message.text }}</h1>
    </div>
</template>

<script>
export default {
    name:  'MessageItem',
    props: {
        message: {
            type:    Object,
            default: () => {}
        },
    },
};
</script>

<style scoped lang="scss">
  .MessageItem {
      width: 380px;
      height: 114px;
      font-size: 14px;
      line-height: 20px;
      color: #475453;
  }
</style>
