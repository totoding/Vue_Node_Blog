<template >
    <div class="blog_nav">
        <div class="blog_nav_title">
            <span class="nav_container">文章列表</span>
        </div>
        <div class="blog_nav_list">
            <div class="nav_list_item" v-for="(item,index) in mockList" :key="index" >
                <div class="list_item_container" :class="active==item?'active':''" @click="showArticle(item)">
                    <div class="article_title article_common">@ blog的首次模板撒旦金卡沙发上法啊啊士大夫立刻就撒旦反；拉萨的咖啡机阿迪斯阿三地方了；啊螺丝钉咖啡碱；阿斯兰的看法就S撒阿斯兰的看法就S撒</div>
                    <div class="article_tags article_common">
                         <div class="tag_title">
                             标签:
                         </div>
                         <div class="tag_container">
                             <div class="tag_item">
                                   html
                             </div>
                               <div class="tag_item">
                                   vue
                             </div>
                               <div class="tag_item">
                                   javascript
                             </div>
                         </div>    
                    </div>
                    <div class="article_time article_common">
                        2020-11-13 12 : 32
                    </div>
                </div>
            </div>
             <div class="nav_list_item">
                <div class="list_item_container">
                    <div class="article_title article_common">@ blog的首次模板撒旦金卡沙发</div>
                    <div class="article_tags article_common"> 标签: html</div>
                    <div class="article_time article_common">2020.11.13</div>
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
export default {
     data(){
        return {
            mockList : [1,2,3,4,5,6],
            active : 1
        }
    },
    methods: {
        showArticle(id){
            this.active = id
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