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
        }
    },
    computed: {
        currentArticle(){
            return this.$store.state.article.currentArticle
        }
    },
}
</script>
<style lang="scss" scoped>

    ::-webkit-scrollbar {
        display: none;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type="number"]{
        -moz-appearance: textfield;
    }
    .blog_content{
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        width: 100%;
        height: 100%;
        border: 3px solid #3BB4F2;
        border-radius: 5px;
        overflow-y: scroll;  
    }
    .content{
        padding: 20px;   
    }
</style>