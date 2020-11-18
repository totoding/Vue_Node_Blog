<template>
    <div class="admin">
       <div class="left_nar_container">
           <div class="navbar">
               <ul>
                   <li>新增文章</li>
                   <li>文章管理</li>
               </ul>
           </div>
       </div>
        <div class="right_info_container">

        </div>
    </div>
</template>
<script>
import * as articleServe  from '@/service/articleServe';
export default {
    created() {
        articleServe.getArticleList()
        .then(res=>{
            console.log(res)
        })
    },
}
</script>
<style lang="scss" scoped>
    .admin{
        width: 100%;
        height: 100%;
        display: flex;
        .left_nar_container{
            width: 250px;
            height: 100%;
            background: rgb(81, 191, 224);
            .navbar{
                height: 400px;
                // margin-top:  ;
            }
        }
        .right_info_container{
            flex: 1;
            height: 100%;
        }
    }
</style>