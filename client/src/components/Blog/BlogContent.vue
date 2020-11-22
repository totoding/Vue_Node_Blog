<template >
    <div class="blog_content">
        
          
        <div id="editor" style="">
            <div class="content" v-html="currentArticle">
            {{currentArticle}}
        </div>

       
        </div>
    </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

export default {
      components: {
        mavonEditor,
    },
    data(){
        return {
           content : ""
        }
    },
    methods: {
            save(val,html){
            this.content = html
        },
    },
    computed: {
        currentArticle(){
            return this.$store.state.article.currentArticle
        }
    },
    watch: {
        articleId(){
            console.log(this.articleId)
        }
    },
    created() {
        console.log( this.$store.state.article.currentArticle)
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
        overflow-y: scroll;
      
    }
    .content{
        padding: 20px;
        
    }
</style>