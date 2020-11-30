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
    created() {
        this.$store.dispatch("search/change", true) // 用于控制展示搜索框
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
        background: #4456A7;
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
                background: #fff;
                border-radius:5px ;
            }
            .article_content{
                width: 65%;
                height: 86%;
                margin-left: 5%;
                background: #fff;
                border-radius:5px ;
            }
        }
    }
</style>