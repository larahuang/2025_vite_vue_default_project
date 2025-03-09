<template>
    <ul class="navMenu">
        <li v-for="(item, index) in homeMenu" :key="item.id" :class="active == index ? 'isActive' : ''"
            @click="clickActive(index)">
            <router-link :to="item.href" class="hvr-underline-from-center">
                {{ item.title }}
            </router-link>
        </li>
    </ul>
    <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
    </router-view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const active = ref<number>(0)
const isActive = ref<boolean>(false)
const clickActive = (index: number) => {
    active.value = index
}

interface homeMenuType {
    id?: string,
    title?: string,
    href?: string,
}

const homeMenu = ref<homeMenuType[]>([
    { id: 'home', title: '首頁', href: '/' },
    { id: 'about_us', title: '關於我', href: 'about_us' },
])
</script>


<style lang="css">
.navMenu {
    list-style-type: none;
    display: flex;
}
.navMenu li{
    list-style-type: none;
        display: flex;
        margin: auto 10px;
}
.navMenu li a{
text-decoration: none;
}
</style>
