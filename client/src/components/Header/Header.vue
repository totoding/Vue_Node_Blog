<template>
    <header class="header">
        <div class="container">
            <div class="logo">
                Mr.Z 个人博客
            </div>
            <div class="left_navbar">
                <div class="left_navbar_content">
                    <ul>
                        <router-link to="/home" tag="li" >  
                            <i class="el-icon-s-home"></i>首页
                        </router-link>
                        <router-link to="/blog" tag="li" >
                            <i class="el-icon-reading"></i>博客
                        </router-link>
                        <router-link to="/comments" tag="li" >
                            <i class="el-icon-edit-outline"></i>留言
                        </router-link>
                        <router-link to="/about" tag="li" >
                            <i class="el-icon-user"></i>关于我
                        </router-link>
                    </ul>
                </div>
                  <div class="left_navbar_searchbar" v-if="$store.state.search.showSearchBar">
                      <Search/>
                </div>
            </div>
            <div class="right_info">
                <div class="login" v-show="!isLogin">
                    <div class="signin login_item" @click="showLogin('login')">
                        登录
                    </div>
                    <div class="signup login_item" @click="showLogin('register')" >
                        注册
                    </div>
                </div>
                <div class="login" v-show="isLogin">
                     <div class="signin login_item">
                       {{username}}
                    </div>
                    <div class="signup login_item" @click="logout" >
                      注销
                    </div>
                </div>
               
            </div>
        </div>
        <div class="login_container" v-if="logining" @click="close">
            <div class="box">
                <Login @logined="logined" v-if="pathToLogin"/>
                <Register @goLogin="goLogin" v-else />
            </div>
        </div>
    </header>
</template>
<script>
import Login from './Login';
import Register from './Register';
import Search from './Search';
export default {
    components:{
        Login,
        Register,
        Search
    },
    data(){
        return {
            isLogin : false,
            logining : false,
            pathToLogin : false,
            username : "",
        }
    },
    methods: {
        showLogin(event){
            this.logining = true
            event == "login" ? this.pathToLogin = true : this.pathToLogin = false            
          
        },
        goLogin(data){
            data ?  this.pathToLogin = true : this.logining = false   
        },
        logined(data){
            this.username = data
            this.logining = false
            this.isLogin = true
        },
        logout(){
            this.$store.dispatch("user/logout")
        },
        close(e){
  
        },
        async getUser(){
            await this.$store.dispatch("user/whoAmI")
            try {
                const who = this.$store.state.user.data.username
                this.isLogin = true
                this.username = who
            } catch (error) {
                console.log(error)
            }
        }
    },
    created() {
        this.getUser()  
    },
}
</script>

<style lang="scss" scoped>
.header{
    height: 49px;
    widows: 100;
    border-bottom: 2px solid #3BB4F2;
    .container{
        width: 96%;
        margin: 0 auto;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo{
            width: 120px;
            height: 100%;
            line-height: 49px;
            font-weight: bolder;
            cursor: pointer;
            img{
                width: 120px;
                height: 40px;
                vertical-align: center;
            }
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
                ul{
                    display: flex;
                    li {
                        color: #666666;
                        cursor: pointer;
                        font-weight: 600;
                        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
                        padding: 0px 4px;
                        list-style: none;
                        -moz-user-select: none;
                        -webkit-user-select: none;
                        user-select: none;
                        font-size: 16px;
                        width: 70px;
                        height: 49px;
                        line-height: 49px;
                        text-align: center;
                        &:last-of-type{
                            width: 90px;   
                        }
                        &:hover{
                            background: #3BB4F2;
                            color: #fff;
                        }
                        i{
                            font-weight:900;
                        }
                    }
                    li.active{
                        color: #3BB4F2; 
                        &:hover{
                            background: #3BB4F2;
                            color: #fff;
                        }                      
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
    .login_container{
        position: fixed;
        top: 0;
        left: 0;
        right:  0;
        bottom: 0;
        background: rgba(141, 140, 140, 0.6);
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        .box{
            width: 380px;
            height: 380px;
        }
    }
}
</style>