<template>
    <div>
        <Header/>
        <router-view/>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    export default {
        components: {Header}
    }
</script>

<style lang="scss">
    @import "@/ui/_index";
    html {font-size: 1.1vw;}
    body {font-family: Roboto, sans-serif;}
</style>
