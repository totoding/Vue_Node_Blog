<template>
    <div class="input">
        <textarea class="reply_input" rows="3" v-model="replyContent"></textarea>
        <button @click="submit">留言</button>
    </div>
</template>
<script>
export default {
    props:{
        parentId :{
            type : Number,
            default : 0
        },
        commentId : {
            type : Number,
            default : 0
        },
        replyName :{
            type : String,
            default : ""
        },
        type :{
            type : Number,
            default : 0
        }
    },
    data(){
        return {
            replyContent : ""
        }
    },
    methods: {
        submit(){
            const data = {
                parentId : this.parentId,
                commentId : this.commentId,
                content : this.replyContent,
                replyNickName : this.replyName,
                nickName : this.$store.state.user.data ? this.$store.state.user.data.username : "" ,
            }
            if(this.type == 1){
                data.replyNickName = ""
            }
            this.$emit("handleSubmit", data)
        }
    },
};
</script>
<style lang="scss" scoped>
.input {
    width: 100%;
    .reply_input {
        width: 80%;
        vertical-align: bottom;
        outline: none;
        border: 2px solid #3bb4f2;
        border-radius:2px ;
        display: inline-block;
        margin-right: 5px ;
    }

    button{
        cursor: pointer;
        border: none;
        color: #fff;
        background: #3bb4f2;
        font-size: 14px;
        padding: 2px 10px;
        outline: none;
    }
}
</style>