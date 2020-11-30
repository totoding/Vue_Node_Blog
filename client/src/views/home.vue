<template>
    <div class="home">
        <div class="left_text">
            <div class="text_container">
                <h1>Code Is Poetry</h1>
                <h2>多年以后,愿你的城市,</h2>
                <h2>有清风，有烈酒，也有人是你的归途。</h2>
            </div>
            
        </div>
        <div class="right_btn">
            <div class="pic_container">
                <div class="pic_item" @click="sup">
                    <img src="@/assets/images/sup.png" alt="">
                    <div class="img_name" >点赞</div>
                </div>
                <div class="pic_item">
                    <img src="@/assets/images/readme.png" alt="">
                    <div class="img_name">说明</div>
                </div>
                <div class="pic_item" @click="msg">
                    <img src="@/assets/images/msg.png" alt="">
                    <div class="img_name">聊天</div>
                </div>
                <div class="pic_item" @click="setting">
                    <img src="@/assets/images/setting.png" alt="">
                    <div class="img_name">设置</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import * as loginServ from "@/service/loginService"
import * as articleServe  from '@/service/articleServe';
export default {
    methods: {
        sup(){
            alert("收到了你的赞， 谢谢")
        },
        msg(){
            alert("聊天室施工中")
        },
        setting(){
            alert("没啥可设置的。")
        }
    },
    created() {
    },
}
</script>
<style lang="scss" scoped>
    .home{
        width: 100%;
        height: calc(100% - 51px);
        background: #4456A7;
        display: flex;
        .left_text{
            flex: 1;
            .text_container{
                margin: 40px;
                color: #fff;
                h1{
                    font-size: 60px;
                }
                h2{
                    margin-top: 5px;
                }
            }
        }
        .right_btn{
            width: 220px;
            height: 100%;
            .pic_container{
                margin-top: 100px ;
                .pic_item{
                    margin: 20px;
                    cursor: pointer;
                    .img_name{
                        margin-left: 16px ;
                        font-weight: bold;
                        color: #fff;
                    }

                }
            }
        }
    }
</style>