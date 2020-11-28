<template>
    <div class="comments">
        <div class="container">
            <div class="comments_input">
                <textarea
                    rows="7"
                    placeholder="未登录为游客留言,富强、民主、文明、和谐."
                    v-model="newCommentContent"
                ></textarea>
                <button @click="newComment()">发表留言</button>
            </div>
            <div class="comments_title">
                <div class="top_title">
                    <div class="left">留言</div>
                    <div class="right"></div>
                </div>
            </div>
            <div class="comments_container">
                <div class="total">
                    全部留言（{{total}}）
                </div>
                <div class="comments_item" v-for="(item, index) in comments_list" :key="index">
                    <div class="user_info">
                        <div class="user_name">
                            {{item.nickName}} <span class="floor">#{{index+1}}楼</span>
                        </div>
                        <div class="comments_time">
                            {{item.createdAt}}
                        </div>
                    </div>
                    <div class="comments_content">
                            {{item.content}}
                    </div>
                    <div class="reply_bar">
                        <!-- <div class="nice">
                            <svg t="1606530155273" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1922" width="20" height="20"><path d="M588.346091 563.555233h235.338436c71.624742 0 127.901324 56.276583 127.901325 127.901324v20.464212l-30.696318 204.642119c-10.232106 61.392636-61.392636 107.437112-127.901324 107.437112h-204.642119C516.721349 1024 460.444767 967.723417 460.444767 896.098676v-204.642119c0-71.624742 56.276583-127.901324 127.901324-127.901324z" fill="#5AC8FA" p-id="1923"></path><path d="M209.758172 972.83947v-414.40029H102.321059c-30.696318 0-51.16053 25.580265-51.160529 51.16053V921.678941c0 30.696318 25.580265 51.16053 51.160529 51.160529h107.437113z m51.160529 0h588.346091c25.580265 0 46.044477-20.464212 51.16053-40.928423l71.624741-414.400291v-10.232105c0-30.696318-25.580265-51.16053-51.160529-51.16053h-276.26686c-56.276583 0-102.321059-46.044477-102.32106-102.321059v-204.642119c0-40.928424-25.580265-71.624742-66.508688-81.856847l-51.16053-15.348159-86.9729 424.632396c-10.232106 40.928424-35.812371 71.624742-76.740795 81.856847V972.83947z m-51.160529-465.560819h25.580264c25.580265 0 46.044477-15.348159 51.16053-40.928424L373.471866 41.717831c5.116053-25.580265 30.696318-46.044477 56.276583-40.928424l51.16053 10.232106c61.392636 15.348159 102.321059 71.624742 102.321059 133.017377v204.642119c0 30.696318 25.580265 51.16053 51.16053 51.160529H920.889534c56.276583 0 102.321059 46.044477 102.321059 102.32106v15.348158l-71.624741 414.400291c-10.232106 51.16053-51.16053 86.9729-102.32106 86.9729H102.321059c-56.276583 0-102.321059-46.044477-102.321059-102.321059v-312.079231c0-56.276583 46.044477-102.321059 102.321059-102.321059h107.437113z" fill="" p-id="1924"></path></svg>
                            0 人赞
                        </div> -->
                        <div class="reply_btn" @click="replayMian(item.id)">
                            <span class="reply">回复</span>
                            <i class="el-icon-edit-outline"></i> 
                        </div>
                    </div>
                    <div class="reply_content">
                        <Replay/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import * as commentsServe from '@/service/commentsServe';
import Replay from "@/components/Comments/Reply.vue"

export default {
    components:{
        Replay
    },
    data(){
        return {
            comments_list : [],
            newCommentContent : "",
            total : 0
        }
    },
    methods: {
        async replayMian(id){
            console.log(id)
        },
        async initComments(){
            const result = await commentsServe.getComments()
            console.log(result.data)
            const initList = []
            result.data.forEach(ele => {
                if(ele.parentId == 0){
                   initList.push(ele) 
                }
            })
            this.comments_list = initList
            this.total = initList.length
        },
        async newComment(){
            const data = {
                content : this.newCommentContent,
                nickName : this.$store.state.user.data.username,
            }
            const result = await commentsServe.addComments(data)
            if(result.data){
                this.newCommentContent = ""
                alert("添加成功")
                this.initComments()
            }
        }
    },
    created() {
        this.initComments()
    },
}
</script>
<style lang="scss" scoped>
.comments {
    width: 100%;
    padding-bottom: 50px ;
    .container {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        .comments_input {
            margin-top: 40px;
            width: 600px;
            textarea {
                resize: none;
                width: 600px;
                border-radius: 5px;
                padding: 10px;
                outline: none;
                border: 2px solid #3BB4F2 ;
            }
            button {
                margin: 5px 0;
                width: 120px;
                height: 40px;
                background: #3BB4F2;
                border: none;
                color: #fff;
                outline: none;
                cursor: pointer;
            }
        }
        .comments_title{
            width: 620px;
            margin-top: 40px;
            padding: 10px;
            margin-left:25px ;
            .top_title{
                display: flex;
                height: 40px;
                .left{
                    width: 60px;
                    border: 2px solid #3BB4F2;
                    line-height: 40px;
                    text-align: center;
                    border-bottom:none ;
                    border-top-left-radius: 10px ;
                    border-top-right-radius: 10px ;
                    color: #3BB4F2;
                }
                .right{
                    flex: 1;
                    border-bottom: 2px solid #3BB4F2;
                }
            }
        }
        .comments_container{
            width: 620px;
            padding: 10px;
            margin-left:25px;
            display: flex;
            flex-direction: column;
            .total{
               color: #3BB4F2;
            }
            .comments_item{
                margin-top: 10px ;
                padding: 5px 0px;
                border-bottom:1px solid #EEEEEE;
                .user_info{
                    display: flex;
                    justify-content: space-between;
                    padding: 3px 0;
                    .user_name{
                        color: #3BB4F2 ;
                        .floor{
                            color: black;
                            display: inline-block;
                            margin-left: 4px
                        }
                    }
                    .comments_time{
                        color : #A0A0B8
                    }
                }
                .comments_content{
                    padding: 5px 0;
                }
            }
            .reply_bar{
                cursor: pointer;
                i{
                    vertical-align: bottom;
                }
                .reply{
                    font-size:14px;
                    display: inline-block;
                    margin-right:5px ;
                    color : #A0A0B8
                }
            }
            .reply_content{
                width: 90%;
                border-left: 2px solid #D9D9D9;
                margin-left:10% ;
                box-sizing: border-box;
                padding: 5px;
            }
        }
     
    }
}
</style>