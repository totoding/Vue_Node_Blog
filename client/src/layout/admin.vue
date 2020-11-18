<template>
    <div class="blog">
        <app-header/>
        <router-view></router-view>
        <h1>1</h1>
    </div>
</template>

<script>
import appHeader from '@/components/Header/Header.vue';
export default {
    components :{
        appHeader
    }
}
</script>