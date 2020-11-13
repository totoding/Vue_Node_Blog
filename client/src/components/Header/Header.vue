<template>
    <header class="header">
        <div class="container">
            <div class="mini_nav">
                三
            </div>
            <div class="logo">LOGO</div>
            <div class="left_navbar">
                <div class="left_navbar_searchbar">
                    <input class="search" type="text" placeholder="Search or jump to...">
                    <i class="el-icon-search"></i>
                </div>
                <div class="left_navbar_content">
                    <ul>
                        <!-- <li class="active">HOME</li>
                        <li>BLOG</li>
                        <li>PROJECT</li>
                        <li>ABOUT</li> -->
                        <router-link to="/home" tag="li" class="active" >HOME</router-link>
                        <router-link to="/blog" tag="li" >BLOG</router-link>
                        <router-link to="/archive" tag="li" >Archive</router-link>
                        <router-link to="/about" tag="li" >ABOUT</router-link>
                    </ul>
                </div>
            </div>
            <div class="right_info">
                <div class="login">
                    <div class="signin login_item">
                        登录
                    </div>
                    <div class="signup login_item">
                        注册
                    </div>
                </div>
                <div class="userInfo" v-show="isLogin">

                </div>
               
            </div>
        </div>
    </header>
</template>
<script>
export default {
    data(){
        return {
            isLogin : false,
            screenWidth: document.body.clientWidth
        }
    },
    mounted() {
        const _this = this
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth
                _this.screenWidth = window.screenWidth
            })()
        }
    },
    watch: {
        screenWidth(val){
              if(!this.timer){
                // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
                this.screenWidth = val
                this.timer = true
                let _this = this
                setTimeout(function(){
                    // 打印screenWidth变化的值
                    console.log(_this.screenWidth)
                    _this.timer = false
                },400)
            }
        }
    },
}
</script>

<style lang="scss" scoped>


.header{
    height: 50px;
    widows: 100;
    border-bottom: 1px solid black;
    .container{
        width: 96%;
        margin: 0 auto;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .mini_nav{
            display: none;
        }
        .logo{
            width: 50px;
        }
        .left_navbar{
            flex: 1;
            display: flex;
            height: 100%;
            align-items: center;
            .left_navbar_searchbar{
           
                position: relative;
                margin-left: 2%;
                .search{
                    width: 200px;
                    height: 28px;
                    border: 1px solid rgb(182, 180, 177);
                    outline: none;
                    padding: 0 5px;
                }
                i{
                    position: absolute;
                    right: 4px;
                    top: 7px;
                    color: rgb(182, 180, 177) ;
                    cursor: pointer;
                }
            }
            .left_navbar_content{
                margin-left:2% ;
                ul{
                    display: flex;
                    li {
                        margin-left: 4%;
                        cursor: pointer;
                        font-weight: 600;
                        font-family: Consolas,"monospace","Microsoft Yahei";
                        padding: 8px 2px;
                        list-style: none;
                        -moz-user-select: none; /*火狐*/
                        -webkit-user-select: none; /*webkit浏览器*/
                        user-select: none;
                    }
                    li.active{
                        color: blue;
                       
                    }
                }
            }
        }
        .right_info{
            width: 150px;
            .login{
                width: 100%;
                display: flex;
                align-items: center;
                .login_item{
                    margin-left:3% ;
                    width: 60px;
                    height: 28px;
                    text-align: center;
                    cursor: pointer;
                    line-height: 30px;
                    color: rgb(54, 54, 53);
                    font-size: 13px;
                    font-weight: 600;
                    font-size: "Microsoft Yahei";
                }
                .signup{
                    border: 1px solid rgb(192, 191, 189);
                    border-radius: 5px ;
                }
            }

        }
    }
}

@media screen and (max-width: 620px) {
    .header {
        background-color:lightblue;
        position: relative;
        width: 100vw;
        .container{
            width: 100vw;
            .mini_nav{
                display: block;
                cursor: pointer;
            }
            .logo{
                display: none;
            }
            .left_navbar{
                display: block;
                position: absolute;
                top: 50px;
                left: 0;
                width: 45vw;
                height: 55vw;
                background: chocolate;
                .left_navbar_searchbar{
                    margin:0 ;
                    height: 40px;
                    width: 42vw;
                    display: flex;
                    align-items: center;
                    border-bottom:1px solid ;
                    padding-left:1% ;
                    .search{
                        height: 28px;
                        width: 40vw;
                        border: 1px solid rgb(182, 180, 177);
                        outline: none;
                        padding: 0 5px;
                    }
                }
                .left_navbar_content{
                    margin-left:0% ;
              
                    ul{
                        display: block;
                        margin: 0;
                        li {
                            padding-left:2% ;
                            height: 40px;
                            line-height: 40px;
                            margin-left: 0%;
                            cursor: pointer;
                            font-weight: 600;
                            font-family: Consolas,"monospace","Microsoft Yahei";
                            border-bottom:1px solid ;
                            width: 42vw;
                        }
                        li.active{
                            color: blue;
                        }
                    }
                }
            }
        }
    }
}
</style>