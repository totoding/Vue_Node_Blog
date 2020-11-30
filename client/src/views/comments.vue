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
                        <div class="reply_btn" @click="showInput(item.id)">
                            <span class="reply">回复</span>
                            <i class="el-icon-edit-outline"></i> 
                        </div>
                    </div>
                    <div class="reply_input" v-if="inputTarget==item.id">
                        <ReplyInput :parentId="item.id" @handleSubmit="handleSubmit" :replyName="item.nickName" :type="1"/>
                    </div>
                    <div class="reply_content"  v-for="ele in item.children" :key="ele.id">
                        <Replay ref="reply"  :content="ele.content" :id="ele.id" :nickName="ele.nickName" :commentName="item.name" :time="ele.createdAt" :parentId="ele.parentId" :replyName="ele.replyNickName" :inputSwitch="inputSwitch" @closeAll="closeAll" @handleSubmit="handleSubmit"/>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import * as commentsServe from '@/service/commentsServe';
import Replay from "@/components/Comments/Reply.vue"
import ReplyInput from "@/components/Comments/Input.vue"
export default {
    components:{
        Replay,
        ReplyInput
    },
    data(){
        return {
            comments_list : [],
            newCommentContent : "",
            total : 0,
            inputTarget : 0,
            inputSwitch : false      
        }
    },
    methods: {
        showInput(id){
            this.closeAll()
            this.inputTarget == id ? this.inputTarget = 0 : this.inputTarget = id   
        },
        async initComments(){
            const result = await commentsServe.getComments()
            const treeData = this.arrToTree(result.data, "id", "parentId", "children" )
            treeData.reverse()
            this.comments_list = treeData
            this.total = treeData.length
        },
        async newComment(){
            const data = {
                content : this.newCommentContent,
                nickName : this.$store.state.user.data ? this.$store.state.user.data.username : "" ,
            }
            const result = await commentsServe.addComments(data)
            if(result.data){
                this.newCommentContent = ""
                alert("添加成功")
                this.initComments()
                this.closeAll()
            }
        },
        async handleSubmit(data){
            const result = await commentsServe.addComments(data) 
            if(result.data){
                this.newCommentContent = ""
                alert("添加成功")
                this.initComments()
                this.closeAll()
            }
        },
        closeAll(id){
            this.inputTarget = 0
            this.$refs.reply.forEach(ele=>{
                ele.close()
            })
        },
        arrToTree(data, id, parentId, children) {
            let arr = JSON.parse(JSON.stringify(data))
            const listChildren = (obj, filter) => {
                [arr, obj[children]] = arr.reduce((res, val) => {
                    if (filter(val))
                        res[1].push(val)
                    else
                        res[0].push(val)
                    return res
                }, [
                    [],
                    []
                ])
                obj[children].forEach(val => {
                    if (arr.length){
                        listChildren(val, obj => obj[parentId] === val[id])
                    }      
                })
            }
            const tree = {}
            listChildren(tree, val => arr.findIndex(i => i[id] === val[parentId]) === -1)
            return tree[children]
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
            .reply_input{
                width: 90%;
                margin-left:10% ;
                box-sizing: border-box;
                padding: 5px;
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