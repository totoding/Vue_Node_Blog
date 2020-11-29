<template>
    <div class="searchbar">
        <input class="search" :class="searching?'searching':''" type="text" placeholder="Search or jump to..."  v-model="searchContent" />
        <i class="el-icon-search"></i>
        <div class="search_cate_container"   :class="searching?'searching':''"  >
            <div class="searh_item" @click="searchByTitle">
                <div class="search_item_left">
                    {{searchContent}}
                </div>
                <div class="search_item_right">
                    搜标题
                </div>
            </div>
             <div class="searh_item"  @click="searchByTag">
                <div class="search_item_left">
                      {{searchContent}}
                </div>
                <div class="search_item_right">
                     搜标签
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import  debounce  from '@/utils/util';
export default {
    data() {
        return {
            searchContent : "",
            searching : false
        }
    },
    methods: {
        watchSearch : debounce(({vm, val})=>{
            val.length < 1 ? vm.searching = false : vm.searching = true
        },300),

        async searchByTitle(){
            this.$store.dispatch("article/getArticleByFilter",{
                type : "title",
                value :  this.searchContent
            }).then(res=>{
                this.searching = false
                this.searchContent = ""
            })
        },

        async searchByTag(){
             this.$store.dispatch("article/getArticleByFilter",{
                type : "tag",
                value :  this.searchContent
            }).then(res=>{
                this.searching = false
                this.searchContent = ""
            })
        }
    },
    watch: {
        searchContent(val){
            this.watchSearch({vm : this, val})
        },
    },
}
</script>
<style lang="scss" scoped>
.searchbar {
    position: relative;
    margin-left: 2%;
    .search {
        width: 200px;
        height: 28px;
        border: 1px solid rgb(182, 180, 177);
        outline: none;
        padding: 0 5px;
        transition: all 0.5s;
        &.searching{
            width: 300px;
        }
    }
    i {
        position: absolute;
        right: 4px;
        top: 7px;
        color: rgb(182, 180, 177);
        cursor: pointer;
    }
    .search_cate_container{
        position: absolute;
        height: 84px;
        width: 200px;
        border: 1px solid #B6B4B1;
        background: #fff;
        padding: 0 5px;
        opacity: 0;
        transition: width 0.5s;
        z-index: -1;
        &.searching{
            opacity: 1;
            width: 300px;
            z-index: 99;
        }
        .searh_item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid black ; 
            .search_item_right{
                padding: 1px 4px;
                border: 1px solid;
                font-size: 12px;
                height: 20px;
                line-height: 20px;
            }
        }
    }
}
</style>