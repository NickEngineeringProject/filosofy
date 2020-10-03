<template>
    <aside class="menu">
        <MenuItem @loadPage="loadPage" :item="item" :key="i" v-for="(item, i) of menu"/>
    </aside>
</template>

<script>
    import MenuItem from "@/components/MenuItem"
    export default {
        name: 'Menu',
        methods: {
            loadPage(data) {
                this.$emit('loadPage', data)
            }
        },
        computed: {
            menu() {return this.$store.getters['menu/getMenu']}
        },
        components: {MenuItem}
    }
</script>

<style scoped lang="scss">
    @import "@/ui/_index";

    .menu {
        width: 20.833rem;
        height: max-content;
        background-color: $primary-bg;
        padding: 1.5625rem .83rem;
        border-radius: 0 0 .5208rem 0;
        border: 1px solid $primary-border;
    }
</style>
