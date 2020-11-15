<template>
    <div class="login">
        <div class="login_title">注册</div>
        <div class="item">
            <input type="text" placeholder="请输入昵称" v-model="username" />
        </div>
        <div class="item">
            <input
                type="password"
                placeholder="请输入木马"
                v-model="password"
            />
        </div>
        <button @click="login">登录</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: "totoding",
            password: "158405",
        };
    },
    methods: {
        login() {
            if (!this.username) {
                alert("没昵称");
                return false;
            }
            if (!this.password) {
                alert("没密码");
                return false;
            }
            this.$store
                .dispatch("user/login", {
                    username: this.username,
                    password: this.password,
                })
                .then((res) => {
                    if (res) {
                        alert("登录成功");
                        this.$emit("logined", res.username);
                    } else {
                        alert("失败了,我也不知道为什么。密码错了？");
                    }
                })
        },
    },
};
</script>

<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 2px;
    box-sizing: border-box;
}
</style>