<template>
    <div class="main">
        <router-view />
    </div>
</template>

<style lang="scss">
    @import '~@/styles/variables.scss';
    @import '~@/styles/mixins.scss';
    @import '~@/styles/reset.scss';

    .main {
        width: 980px;
        height: 720px;
        margin: 0 auto;
        color: #000000;
        background-color: lightgray;
        font-family: 'Roboto', sans-serif;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
