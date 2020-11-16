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
                        <router-link to="/home" tag="li"  >主页</router-link>
                        <router-link to="/blog" tag="li" >博客</router-link>
                        <router-link to="/archive" tag="li" >归档</router-link>
                        <router-link to="/about" tag="li" >关于</router-link>
                    </ul>
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
export default {
    components:{
        Login,
        Register
    },
    data(){
        return {
            isLogin : false,
            logining : false,
            pathToLogin : false,
            username : ""
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
            console.log(this.$store.state.user.data)
            this.logining = false
            this.isLogin = true
        },
        logout(){
            this.$store.dispatch("user/logout")
        },
        close(e){
            if(e.target.className == "login_container"){
                this.logining = false
            }
        },
        async getUser(){
            await this.$store.dispatch("user/whoAmI")
            try {
                const who = this.$store.state.user.data.username
                this.isLogin = true
                this.username = who
                console.log(who)
            } catch (error) {
                console.log(error)
            }
        }
    },
    created() {
        // this.getUser()
       
    },
  
       
    watch: {
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
                        width: 40px;

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
            // background: #fff;
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