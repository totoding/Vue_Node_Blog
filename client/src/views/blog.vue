<template>
    <div class="blog">
        <div class="container">
            <div class="article_nav">
                <BlogNav/>
            </div>
            <div class="article_content">
                <BlogContent/>
            </div>
        </div>
    </div>
</template>
<script>
import BlogNav from '@/components/Blog/BlogNav.vue';
import BlogContent from '@/components/Blog/BlogContent.vue';
export default {
    components:{
        BlogNav,
        BlogContent
    },
     data(){
        return {  
        }
    },
    created() {
        this.$store.dispatch("search/change", true)
    },
    destroyed() {
        this.$store.dispatch("search/change", false)
    },
}

</script>
<style lang="scss" scoped>
    .blog{
        width: 100%;
        height: calc(100% - 51px);
        .container{
            width: 96%;
            margin: 0 auto;
            height: 100%;
            display: flex;
            align-items: center;
            .article_nav{
                max-width: 400px;
                width: 30%;
                height: 86%;
                box-sizing: border-box;
            }
            .article_content{
                width: 65%;
                height: 86%;
                margin-left: 5%;
            }
        }
    }
</style>