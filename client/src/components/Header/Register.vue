<template>
    <div class="register">
        <div class="register_title">
            注册
        </div>
        <div class="item">
            <input type="text" placeholder="请输入昵称" v-model="username">
        </div>
        <div class="item">
            <input type="password" placeholder="请输入木马" v-model="password">
        </div>
          <div class="item">
            <input type="password" placeholder="再次输入密码" v-model="testPassword">
        </div>
        <button @click="register">注册</button>
    </div>
</template>
<script>
import * as loginServive from '@/service/loginService';
export default {
    data(){
        return {
            username : "",
            password : "",
            testPassword : ""
        }
    },
    methods: {
        register(){
            const result = this.checkInfo()
            if(result){
                loginServive.register(
                    this.username,
                    this.password
                ).then(res=>{
                    if(res.code == 0){
                        const goLogin = confirm("注册成功， 跳转登录?")
                        this.$emit("goLogin", goLogin)
                    }
                })
            }
        },
        checkInfo(){
            if(!this.username){
                alert("没填用户名")
                return false
            }
            if(!this.password){
                alert("没写密码")
                return false
            }
            // if(this.password != this.testPassword){
            //     alert("两次密码不一致")
            //     return false
            // }
            return true
        }
    },
}
</script>
<style lang="scss" scoped>
    .register{
        width: 100%;
        height: 100%;
        background: #fff;
        border-radius: 2px;
        box-sizing: border-box;
    }
</style>