<template>
    <div class="admin">
        <div class="title center">
            <input type="text" placeholder="文章标题" v-model="title">
        </div>
        <div class="tag center">
            <input type="text" placeholder="标签" v-model="tag">
            <i class="el-icon-plus" @click="addTag"></i>
            <div class="tag_container">
                <div class="tag_item" v-for="(item,index) in tagList" :key="index">
                    <span>
                        {{item}}
                    </span>
                    <i class="el-icon-close" @click="removeTag(index)"></i>
                </div>
            </div>
        </div>
        <div class="center">
            <button @click="submit">提交</button>
        </div>
   
        <div id="editor">
            <mavon-editor style="height: 100%" @save="save" ></mavon-editor>
        </div>

    </div>
</template>
<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import * as articleServe  from '@/service/articleServe';
export default {
    name: "editor",
   
    components: {
        mavonEditor,
    },
    data(){
        return {
            content : "",
            title : "",
            tag : "",
            author : "",
            tagList : []
        }
    },
    methods: {
        save(val,html){
            this.content = html
        },
        addTag(){
            if(this.tag){
                if(this.tagList.length > 0){
                    if(this.tagList.includes(this.tag)){
                        alert("有了")
                    }else{
                        this.tagList.push(this.tag)
                        this.tag = ""
                    }
                }else{
                     this.tagList.push(this.tag)
                       this.tag = ""
                }  
            }else{
                alert("你填啊")   
            } 
        },
        removeTag(index){
            this.tagList.splice(index, 1)　
        },
        submit(){
            const data = {
                title : this.title,
                tags : JSON.stringify(this.tagList),
                content : this.content,
                author : "totoding"
            }
            articleServe.addArticle(data)
            .then(res=>{
                if(res){
                    alert("添加陈工")
                }
            })
        }

    },
};
</script>
<style lang="scss" scoped>
.admin{
    width: 100%;
    height: 100%;
    .center{
        margin: 0px auto;
        width: 80%;
    }
    .title{
        margin-top:30px ;
        input{
            width: 600px;
            height: 30px;
            padding-left: 10px;
            outline: none;
        }
    }
    .tag{
        margin-top : 10px;
        input{
            width: 200px;
            height: 30px;
            padding-left: 10px;
            outline: none;
            margin-right: 10px;
        }
        .tag_container{
            display: inline-block;
            height: 60px;
            vertical-align: top;
            margin-left: 20px;
            .tag_item{
                padding: 6px 15px;
                border: 1px solid black;
                font-size: 14px;  
                position: relative; 
                display: inline-block;
                margin-right:10px ;
            }
            
        }
        i{
            font-weight: 700;
            font-size: 16px;
            padding: 5px;
            cursor: pointer;
        }
    }
    #editor {
        margin: 30px auto;
        width: 80%;
        height: 580px;
    }
}   

</style>