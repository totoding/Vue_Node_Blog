<template>
    <div class="comments">
        <div class="container">
            <div class="comments_input">
                <textarea
                    rows="7"
                    placeholder="未登录为游客留言,富强、民主、文明、和谐."
                ></textarea>
                <button>发表留言</button>
            </div>
            <div class="comments_title">
                <div class="top_title">
                    <div class="left">留言</div>
                    <div class="right"></div>
                </div>
            </div>
            <div class="comments_container">
                <div class="total">
                    全部留言
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.comments {
    width: 100%;
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
    }
}
</style>