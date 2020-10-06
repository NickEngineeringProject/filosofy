<template>
    <div class="menu__item">
        <router-link :data-id="item.id" @mouseup.native="loadPage" @click.native="menu" class="menu__wrapper" to="#" :class="item.submenu ? 'isSubmenu' : null">
            <div class="menu__chapter">{{item.title}}</div>
            <img v-if="item.submenu" :class="`menu__icon ${!render ? 'icon-active' : ''}`" src="@/assets/icon/arrow.svg"/>
        </router-link>
        <div class="menu__items" v-show-slide="item.submenu && render">
            <router-link :data-id="submenu.id" @click.native="loadPage" v-for="submenu of item.submenu" to="#" class="menu__subitem">{{submenu.title}}</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MenuItem',
        props: {
            item: Object
        },
        data: () => ({
            render: false,
        }),
        methods: {
            loadPage(e) {
                const id = +e.currentTarget.getAttribute('data-id')
                if (this.item.submenu) {
                    if (e.currentTarget.classList.contains('isSubmenu'))
                        return
                    this.$emit('loadPage', {isSubmenu: true, id})
                }
                else this.$emit('loadPage', {isSubmenu: false, id})
            },
            menu() {this.render = !this.render}
        },
    }
</script>

<style lang="scss" scoped>
    @import "@/ui/_index";
    .menu__item {
        margin: 0 0 1.04166rem 0;
        &:last-child {margin: 0;}
    }
    .menu__wrapper {
        @include flex(initial, center);
        transition: .2s all;
        position: relative;
        width: max-content;
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
    .menu__items {@include flex(initial, initial, column);}
    .menu__subitem {
        @include font-size(16, 160%);
        color: $text-content;
        margin: .9375rem  0 0 .416rem;
        transition: .3s all;
        position: relative;
        &:hover {
            color: $text-heading;
            animation: littleJump .35s ease-in-out .05s;
            transform: scale(1.01);
        }
    }
    .menu__icon {
        width: .625rem;
        height: .416rem;
        margin: 0 0 0 .416rem;
        transition: .4s all;
    }
    .icon-active {transform: rotate(180deg);}

    @keyframes littleJump {
        0% {bottom: 0;}
        50% {bottom: .052083rem;}
        100% {bottom: 0;}
    }
</style>
