<template>
    <h2 class="title">{{title}}</h2>
</template>

<script>
    export default {
        name: 'TitlePage',
        props: {
            title: String
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/ui/_index";

    .title {
        width: 100%;
        text-align: center;
        @include font-size(28);
        @extend .m-def;
        color: $text-heading;
    }
</style>
