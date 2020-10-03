<template>
    <div class="video" v-if="item.title && item.link">
<!--        <img class="video__media" src="@/assets/video-2.png"/>-->
        <iframe class="video__media" :src="item.link" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="video__title">{{item.title}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            item: Object
        },
        name: 'VideoItem'
    }
</script>

<style lang="scss" scoped>
    @import "@/ui/_index";

    .video {
        width: 18.22916rem;
        height: 13.54166rem;
        background-color: $primary-bg;
        border-radius: .5208rem;
        border: 1px solid $primary-border;
        @extend .mb-def;
    }
    .video__media {
        width: 100%;
        height: 10.416rem;
        border-radius: .5208rem .5208rem 0 0;
    }
    .video__title {
        font-weight: 300;
        margin: .5rem 1rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        text-align: center;
    }
</style>
