<template >
    <div class="blog_nav">
        <div class="blog_nav_title">
            <span class="nav_container">文章列表</span>
        </div>
        <div class="blog_nav_list">
            <div class="nav_list_item" v-for="item in titleList" :key="item.id" >
                <div class="list_item_container" :class="active==item.id?'active':''" @click="showArticle(item.id)">
                    <div class="article_title article_common">@ {{item.title}}</div>
                    <div class="article_tags article_common">
                         <div class="tag_title">
                             标签:
                         </div>
                         <div class="tag_container">
                             <div class="tag_item" v-for="(ele, index) in item.tags" :key="index">
                                  {{ele}}
                             </div>
                         </div>    
                    </div>
                    <div class="article_time article_common">
                       {{item.createdAt}}
                    </div>
                </div>
            </div>
        </div>
        <div class="blog_nav_footer">
            <div class="left_prev footer_item" >上一页</div>
            <div class="middle_num footer_item">
                <input type="number" value="1" class="page_num">
            </div>
            <div class="right_next footer_item">下一页</div>
        </div>
    </div>
</template>

<script>
import * as articleServ from '@/service/articleServe';
export default {
     data(){
        return {
            titleList : [],
            active : 1
        }
    },
    methods: {
        showArticle(id){
            this.active = id
            // console.log(id)
            this.$store.dispatch("article/getArticleById",id)
        },
        async getTitleList(){
            const list =  await articleServ.getArticleList()
            this.titleList =  list.data.map(ele => {
                return {
                    id : ele.id,
                    tags : ele.tags.includes("[") ? JSON.parse(ele.tags) : ele.tags.split(" "),
                    title : ele.title,
                    createdAt : ele.createdAt
                }
            })
            this.titleList.reverse()
            this.active = this.titleList[0].id
            this.$store.dispatch("article/getArticleById",this.active) 
        }
    },
    created() {
        
        this.getTitleList()
  

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
    .blog_nav{
        -moz-user-select: none; /*火狐*/
        -webkit-user-select: none; /*webkit浏览器*/
        user-select: none;
        width: 100%;
        height: 100%;
        border: 3px solid black;
        box-sizing: border-box;
        border-radius: 5px ;
        position: relative;      
        .blog_nav_title{
            height: 40px;
            width: 100%;
            border-bottom: 3px solid black ;
            line-height: 40px;
            font-weight: 600;
            font-size: 16px;
            box-sizing: border-box;
            .nav_container{
                display: block;
                width: 96%;
                margin: 0 auto;
            }
        }
        .blog_nav_list{
            width: 100%;
            height: calc(100% - 80px);
            overflow-y: scroll;;
            .nav_list_item{
                width: 96%;
                margin: 0 auto;
                height: 90px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
             
                .list_item_container{
                    width: 100%;
                    height: 90%;
                    border: 1px solid ;
                    cursor: pointer;
                    &.active{
                        background: seagreen;
                    }
                    .article_common{
                        margin: 5px;
                        padding: 0 10px;
                        box-sizing: border-box;
                        width: 100%;
                    }
                    .article_title{
                        height: 30%;  
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        font-weight: bold;
                        font-size: 15px;
                        color: #1a1a1a;
                        letter-spacing: .8px;
                    }
                    .article_tags{
                        height: 26%;
                        font-size: 14px;
                        display: flex;
                        .tag_container{
                            display: flex;
                            .tag_item{
                                margin: 0 5px;
                                border: 1px solid;
                                font-size: 12px;
                                padding: 0 10px;
                                border-radius: 20px;
                                text-align: center;
                                // color: ;
                            }
                        }
                    }
                    .article_time{
                        font-size: 12px;
                        color : rgba(0,0,0,.4);
                        
                    }
                }
            }

        }
        .blog_nav_footer{
            box-sizing: border-box;
            height: 40px;
            border-top:3px solid black;
            display: flex;
            justify-content: space-between;
            line-height: 40px;
            padding: 0 2%;
            .footer_item{
                flex: 1;
                text-align: center;
                cursor: pointer;
                font-weight: 600;
            }
            .middle_num{
                display: flex;
                justify-content: center;
                align-items: center;
                .page_num{
                    width: 30px;
                    height: 30px;
                    outline: none;
                    border: 3xp solid black;
                    border-radius:50% ;
                    text-align: center;
                    font-weight: 600;
                }
            }
        }
    }
</style>