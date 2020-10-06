<template>
    <section class="materials container">
        <TitlePage title="Учебные материалы"/>
        <div class="materials__wrapper">
            <Menu @loadPage="loadPage"/>
            <ContentPage :page="pageMetaData"/>
        </div>
    </section>
</template>

<script>
    import TitlePage from "@/components/TitlePage"
    import Menu from "@/components/Menu"
    import ContentPage from "@/components/ContentPage"
    export default {
        data: () => ({
            pageMetaData: {
                id: 1,
                isSubmenu: false,
            },
            currentPage: null
        }),
        methods: {
            loadPage(data) {this.pageMetaData = data}
        },
        components: {ContentPage, TitlePage, Menu}
    }
</script>

<style lang="scss" scoped>
    @import "@/ui/_index";

    .materials {
        @include flex(space-between, initial, column);
        padding: 0 0 5rem 0;
    }

    .materials__wrapper {@include flex(space-between);}

</style>
