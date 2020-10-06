<template>
    <header class="header-layout">
        <div class="header container">
        <router-link to="/">
            <img class="header__logo" src="@/assets/logo.svg"/>
        </router-link>
        <nav class="header__navmenu">
            <router-link to="/" class="header__link">Учебные материалы</router-link>
        </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    @import "@/ui/_index";

    .header-layout {
        padding: 1.0416rem 0;
        border-bottom: 1px solid $primary-border;
    }
    .header {@include flex(space-between, center);}
    .header__logo {width: 11.97916rem;}
    .header__link {
        @include font-size(18);
        transition: .2s all;
        position: relative;
        &:hover {color: $text-content;}
        &:hover::before {
            content: "";
            transform: scale(1);
        }
        &::before {
            content: "";
            width: 100%;
            height: .1rem;
            background-color: $text-content;
            @include position(absolute, initial, 100%);
            transform: scale(0);
            transition: transform .35s ease-out;
            border-radius: 50%;
        }
    }

</style>
