<template>
    <div class="file">
        <div class="file__links">
            <a v-if="item.link" :href="item.link" class="btn" :class="type === 'ppt' ? 'btn-orange' : type === 'docx' ? 'btn-sky' : null" target="_blank">Открыть</a>
            <a download v-if="item.link" :href="item.link" class="btn" :class="type === 'ppt' ? 'btn-orange' : type === 'docx' ? 'btn-sky' : null" target="_blank">Скачать</a>
        </div>
        <div class="file__wrapper">
            <img v-if="type === 'ppt'" class="file__icon" src="@/assets/icon/ppt.svg"/>
            <img v-if="type === 'docx'" class="file__icon" src="@/assets/icon/docx.svg"/>
            <div v-if="item.title" class="file__title" :class="type === 'ppt' ? 'orange' : type === 'docx' ? 'blue' : null">{{item.title}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FileItem',
        props: {
            type: {
                type: String,
                default: 'ppt'
            },
            item: {
                type: Object,
                default: () => ({})
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/ui/_index";

    .file {
        @include flex(space-between, center, row-reverse);
        margin: 0 0 .9375rem 0;
        &:last-child {margin: 0;}
    }
    .file__links {
        @include flex(center);
    }
    .file__wrapper {
        @include flex(space-between);
        transition: transform .25s;
    }
    .file__icon {
        width: 1.14583rem;
        height: 1.14583rem;
        margin: 0 .52083rem 0 0;
    }
    .file__title {
        @include font-size(16);
        color: $text-content;
        margin: 0 .9375rem 0 0;
        transition: .4s all;
    }
    .btn:first-child {margin: 0 1rem 0 0;}
    .file__links:hover + .file__wrapper {transform: scale(1.015);}
    .file__links:hover + .file__wrapper > .file__title.orange {color: $color-orange;}
    .file__links:hover + .file__wrapper > .file__title.blue {color: $color-blue;}
    .file__wrapper:hover .file__title.orange {color: $color-orange;}
    .file__wrapper:hover .file__title.blue {color: $color-blue;}
</style>
