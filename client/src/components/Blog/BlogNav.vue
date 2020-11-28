<template >
    <div class="blog_nav">
        <div class="blog_nav_title">
            <div class="time">
                19 ：24
            </div>
            <div class="right">
                <div class="signal">
                    <svg t="1606219235660" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5504" width="20" height="20"><path d="M144 768v64H64v-64h80m64-64H0v192h208V704zM416 576v256h-80V576h80m64-64H272v384h208V512zM688 352v480h-80V352h80m64-64H544v608h208V288zM960 192v640h-80V192h80m64-64H816v768h208V128z" p-id="5505"></path></svg>
                </div>
               <div class="berry">
               <svg t="1606219361543" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7079" width="20" height="20"><path d="M812.8 767.9v167.8c0 13.3-10.7 24-24 24h-552c-13.3 0-24-10.7-24-24V767.9h600z" fill="#F0FAF5" p-id="7080"></path><path d="M624 94.5l48 71.4c10 15 26.8 23.9 44.8 23.9h66.1v740.7h-540V189.8h64.3c18 0 34.8-8.9 44.8-23.9l48-71.4h224m3.2-30H396.7c-8 0-15.5 4-19.9 10.6l-49.7 74c-4.5 6.6-11.9 10.6-19.9 10.6h-70.3c-13.3 0-24 10.8-24 24v752.7c0 13.3 10.7 24 24 24h552c13.3 0 24-10.8 24-24V183.8c0-13.3-10.7-24-24-24h-72.1c-8 0-15.5-4-19.9-10.6l-49.7-74c-4.6-6.7-12-10.7-20-10.7z" fill="" p-id="7081"></path><path d="M713.8 859.1h-402c-13.3 0-24-10.7-24-24v-54c0-13.3 10.7-24 24-24h402c13.3 0 24 10.7 24 24v54c0 13.3-10.7 24-24 24zM713.8 715.5h-402c-13.3 0-24-10.7-24-24v-54c0-13.3 10.7-24 24-24h402c13.3 0 24 10.7 24 24v54c0 13.2-10.7 24-24 24zM713.8 571.8h-402c-13.3 0-24-10.7-24-24v-54c0-13.3 10.7-24 24-24h402c13.3 0 24 10.7 24 24v54c0 13.2-10.7 24-24 24zM729.4 383.9c-8 0-14.5-6.5-14.5-14.5v-71.1c0-8 6.5-14.5 14.5-14.5s14.5 6.5 14.5 14.5v71.1c-0.1 8-6.5 14.5-14.5 14.5z" fill="#6DE49D" p-id="7082"></path></svg>
               </div>
       

            </div>
              
                  
            
        </div>
        <div class="blog_nav_list">
            <div class="nav_list_item" v-for="item in titleList" :key="item.id" >
                <div class="list_item_container" :class="active==item.id?'active':''" @click="showArticle(item.id)">
                    <div class="article_title article_common">@ {{item.title}}</div>
                    <!-- <div class="article_tags article_common">
                         <div class="tag_title">
                             标签:
                         </div>
                         <div class="tag_container">
                             <div class="tag_item" v-for="(ele, index) in item.tags" :key="index">
                                  {{ele}}
                             </div>
                         </div>    
                    </div> -->
                    <div class="article_time article_common">
                        <div class="left_time">
                              {{item.createdAt}}
                        </div>
                        <!-- <div class="right_tags">
                              <div class="tag_container">
                             <div class="tag_item" v-for="(ele, index) in item.tags" :key="index">
                                  {{ele}}
                             </div>
                         </div>    
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="blog_nav_footer">
            <div class="left_prev footer_item" ></div>
            <div class="middle_num footer_item">
                <input type="number" value="" class="page_num">
            </div>
            <div class="right_next footer_item"></div>
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
                ele.time = ele.createdAt.split("T")[0]
                return {
                    id : ele.id,
                    tags : ele.tags.includes("[") ? JSON.parse(ele.tags) : ele.tags.split(" "),
                    title : ele.title,
                    createdAt : ele.time
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
        border: 3px solid #3BB4F2;
        box-sizing: border-box;
        border-radius: 5px ;
        position: relative;      
        .blog_nav_title{
            height: 40px;
            width: 100%;
            line-height: 40px;
            font-size: 12px;
            box-sizing: border-box;
            padding: 0 5px;
            display: flex;
            border-bottom:3px solid #3BB4F2 ;
            justify-content: space-between;
            font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
            .right{
                display : flex
            }
        }
        .blog_nav_list{
            width: 100%;
            height: calc(100% - 80px);
            overflow-y: scroll;;
            .nav_list_item{
                width: 96%;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .list_item_container{
                    width: 100%;
                    padding: 10px 0;
                    border-radius: 20px;
                    cursor: pointer;
                    margin: 5px;
               
                    &.active{
                        background: #FFD03F;
                    }
                    &:hover{
                       
                    }
                    .article_common{
                        margin: 5px;
                        padding: 0 10px;
                        box-sizing: border-box;
                        width: 100%;
                    }
                    .article_title{
                     
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        font-weight: bolder;
                        font-size: 16px;
                        letter-spacing: .8px;
                        width: 96%;
                        margin: 5px auto;
                        font-family: "PingFang SC","Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
                    }
                    .article_tags{
                        font-size: 14px;
                        display: flex;
                       
                    }
                    .article_time{
                        font-size: 13px;
                        color : rgba(0,0,0,.4);
                        display: flex;
                        justify-content: space-between;
                        margin-left:8px ;
                        .right_tags{
                            margin-right:30px ;
                            .tag_container{
                            display: flex;
                            .tag_item{
                                margin: 0 5px;
                                // border: 1px solid;
                                font-size: 12px;
                                padding: 0 10px;
                                // border-radius: 20px;
                                text-align: center;
                                color: #000;
                                font-weight: 500;
                                color: #92fabc;
                            }
                        }
                        }
                    }
                }
            }

        }
        .blog_nav_footer{
            box-sizing: border-box;
            height: 40px;
            border-top:3px solid #3BB4F2;
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
                        margin: 10px;
                }
            }
        }
    }
</style>