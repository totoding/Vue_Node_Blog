<template>
    <div class="replay_item">
        <div class="item_comments">
            <span class="item_username">{{nickName}}:</span>
            <span class="item_orginal_name"><span v-show="replyName">@</span>{{replyName}}</span>
            <span class="item_content">{{content}}</span>
        </div>
        <div class="item_info">
            <div class="item_info_time">
                {{time}}
            </div>
            <div class="reply_icon" @click="showInput()">
                <span class="reply">回复</span>
                <i class="el-icon-edit-outline"></i> 
            </div>
        </div>
        <div class="reply" v-if="inputSwitch" >
            <ReplyInput :parentId="parentId" :replyName="nickName" :commentId="id" @handleSubmit="handleSubmit"/>
        </div>
    </div>
</template>
<script>
import ReplyInput from "@/components/Comments/Input.vue"
export default {
    props:{
        id:{
            type : Number,
            default : 0
        },
        parentId :{
            type : Number,
            default : 0
        },
        nickName : {
            type : String,
            default : ""
        },
        time : {
            type : String,
            default : ""
        },
        replyName : {
            type : String,
            default : ""
        },
        content:{
            type : String,
            default : "" 
        },
    },
    components:{
        ReplyInput
    },
    data(){
        return {
            inputSwitch : false
        }
    },
    methods: {
        showInput(){
            this.$emit("closeAll", this.id)
            this.inputSwitch  = !this.inputSwitch
        },
        close(){
             this.inputSwitch = false
        },
        handleSubmit(data){
            this.$emit("handleSubmit", data)
        }
    },
}
</script>
<style lang="scss" scoped>
.replay_item{
    font-size: 15px;
    .item_comments{
        padding: 4px 0;
        span{
            display: inline-block;
        }
        .item_username{
            color:  #3BB4F2;
            margin-right: 5px;
        }
        .item_orginal_name{
            color:  #3BB4F2;
            margin-right: 5px;
        }  
    }
    .item_info{
        display: flex;
        color : #A0A0B8;
        .reply_icon{
            margin-left: 10px;
            cursor: pointer;
        }
      
    }
}
</style>