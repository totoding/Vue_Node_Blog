<template>
    <div id="editor">
        
        <mavon-editor style="height: 100%" @save="save" ></mavon-editor>
    </div>
</template>
<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
    name: "editor",
   
    components: {
        mavonEditor,
    },
    data(){
        return {
            content : ""
        }
    },
    methods: {
        save(val,html){
            console.log(e)
            console.log(f)
            this.content = html
        }
    },
};
</script>
    <style>
#editor {
    margin: 30px auto;
    width: 80%;
    height: 580px;
}
</style>