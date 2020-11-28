<template>
    <div class="replay_item">
        <div class="item_comments">
            <span class="item_username">神人灰太狼:</span>
            <span class="item_orginal_name">@totoding</span>
            <span class="item_content">你好啊兄嘚？</span>
        </div>
        <div class="item_info">
            <div class="item_info_time">
                2020-05-23
            </div>
            <div class="replay_icon">
                <span class="reply">回复</span>
                <i class="el-icon-edit-outline"></i> 
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{},
    data(){
        return {}
    },
}
</script>
<style lang="scss" scoped>
.replay_item{
    font-size: 15px;
    .item_comments{
        padding: 4px 0;
        span{
            display: inline-block;
        }
        .item_username{
            color:  #3BB4F2;
            margin-right: 5px;
        }
        .item_orginal_name{
            color:  #3BB4F2;
            margin-right: 5px;
        }  
    }
    .item_info{
        display: flex;
        color : #A0A0B8;
        .replay_icon{
            margin-left: 10px;
            cursor: pointer;
        }
      
    }
}
</style>