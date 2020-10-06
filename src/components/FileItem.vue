<template>
    <div class="file">
        <div class="file__links">
            <a v-if="item.link && type === 'ppt'" :href="item.link" class="btn btn-orange" target="_blank">Открыть</a>
            <a v-if="item.link && type === 'docx'" :href="item.link" class="btn btn-sky" target="_blank">Открыть</a>
            <a v-if="item.link && type === 'pdf'" :href="item.link" class="btn btn-red" target="_blank">Открыть</a>

            <a download v-if="item.link && type === 'ppt'" :href="item.link" class="btn btn-orange" target="_blank">Скачать</a>
            <a download  v-if="item.link && type === 'docx'" :href="item.link" class="btn btn-sky" target="_blank">Скачать</a>
            <a download  v-if="item.link && type === 'pdf'" :href="item.link" class="btn btn-red" target="_blank">Скачать</a>
        </div>
        <div class="file__wrapper">
            <img v-if="type === 'ppt'" class="file__icon" src="@/assets/icon/ppt.svg"/>
            <img v-if="type === 'docx'" class="file__icon" src="@/assets/icon/docx.svg"/>
            <img v-if="type === 'pdf'" class="file__icon" src="@/assets/icon/pdf.svg"/>

            <div v-if="item.title && type === 'ppt'" class="file__title orange">{{item.title}}</div>
            <div v-if="item.title && type === 'docx'" class="file__title sky">{{item.title}}</div>
            <div v-if="item.title && type === 'pdf'" class="file__title red">{{item.title}}</div>
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
        width: 70%;
        display: flex;
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
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .btn:first-child {margin: 0 1rem 0 0;}
    .file__links:hover + .file__wrapper {transform: scale(1.015);}
    .file__links:hover + .file__wrapper > .file__title.orange {color: $color-orange;}
    .file__links:hover + .file__wrapper > .file__title.sky {color: $color-blue;}
    .file__links:hover + .file__wrapper > .file__title.red {color: $color-red;}
    .file__wrapper:hover .file__title.orange {color: $color-orange;}
    .file__wrapper:hover .file__title.sky {color: $color-blue;}
    .file__wrapper:hover .file__title.red {color: $color-red;}
</style>
