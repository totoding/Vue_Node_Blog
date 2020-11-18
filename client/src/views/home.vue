<template>
    <div class="home">
        主页施工中
        <h1>1</h1>
        <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
    </div>
</template>
<script>
import * as loginServ from "@/service/loginService"
import * as articleServe  from '@/service/articleServe';
export default {
    methods: {
            
    },
    created() {
        articleServe.getArticleList()
        .then(res=>{
            console.log(res)
        })
        // loginServ.login("admin","Hny158405")
        //     .then(res=>{
        //         console.log(res)
        //     })

        // loginServ.whoAmI()
        // .then(res=>{
        //     console.log(res.data)
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })
    },
}
</script>
<style lang="scss" scoped>
    
</style>