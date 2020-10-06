<template>
    <div class="content">
        <h3 v-if="menuItem" class="content__title">{{menuItem.title}}</h3>

        <div class="content__wrapper" v-if="payload.materials">
            <div class="content__subtitle">Материалы</div>
            <div class="content__files">
                <FileItem type="pdf" :key="i" v-for="(item, i) of payload.materials" :item="item"/>
            </div>
        </div>

        <div class="content__wrapper" v-if="payload.videos">
            <div class="content__subtitle">Видео</div>
            <div class="content__videos">
                <VideoItem :key="i" v-for="(item, i) of payload.videos" :item="item"/>
            </div>
        </div>

        <div class="content__wrapper" v-if="payload.presentations">
            <div class="content__subtitle">Презентации</div>
            <div class="content__files">
                <FileItem type="ppt" :key="i" v-for="(item, i) of payload.presentations" :item="item"/>
            </div>
        </div>

        <div class="content__wrapper" v-if="payload.works">
            <div class="content__subtitle">Документы</div>
            <div class="content__files">
                <FileItem type="docx" :key="i" v-for="(item, i) of payload.works" :item="item"/>
            </div>
        </div>

    </div>
</template>

<script>
    import VideoItem from "@/components/VideoItem"
    import FileItem from "@/components//FileItem"
    export default {
        name: 'ContentPage',
        props: {
            page: Object
        },
        computed: {
            menu() {return this.$store.getters['menu/getMenu']},
            menuItem() {
                const {id} = this.page
                if (this.page.isSubmenu) {
                    return this.menu.map(item => {
                        if (item.submenu) {
                            const submenu = item.submenu.find(subitem => subitem.id === id)
                            if (submenu) return submenu
                        }
                    }).find(item => item !== undefined) || {}
                }
                else
                    return this.menu.find(item => item.id === id) || {}
            },
            payload() {
                const payload = this.menuItem.payload
                if (payload) return payload
                else return {}
            }
        },
        components: {VideoItem, FileItem},
    }
</script>

<style lang="scss" scoped>
    @import "@/ui/_index";

    .content {width: 41.6rem;}
    .content__title {
        @extend .m-def;
        text-align: center;
        font-weight: 400;
        color: $text-content;
    }
    .content__wrapper {
        margin: 0 0 2.083rem 0;
        &:last-child {margin: 0;}
    }
    .content__subtitle {
        @include font-size(20);
        color: $text-heading;
        margin: 0 0 1.0416rem 0;
    }
    .content__videos {@include flex(space-between, initial, initial, wrap);}
    .content__files {@include flex(initial, initial, column);}
    .file {@include flex(initial, center);}
    .file__icon {
        width: 1.14583rem;
        height: 1.14583rem;
        margin: 0 .52083rem 0 0;
    }
    .file__title {
        @include font-size(16);
        color: $text-content;
        margin: 0 .9375rem 0 0;
    }
</style>
