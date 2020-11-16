<template >
    <div class="blog_content">
        123
    </div>
</template>

<script>
export default {
    data(){
        return {
            clientHeight : "",
        }
    },
    mounted() {
        this.clientHeight = document.documentElement.clientHeight
        // console.log((this.clientHeight - 51)*0.86)
    },
}
</script>
<style lang="scss" scoped>
    .blog_content{
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        width: 100%;
        height: 100%;
        border: 2px solid black;
        border-radius: 5px;
    }
</style>