<template>
    <div class="default">
        <app-header/>
        <router-view></router-view>
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