<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>


export default {
  name: 'Home',

  created() {

    fetch("http://127.0.0.1/p",{
        method : "post",
        headers : {
            "content-type": "application/json",
            a : 1
        },
        credentials : "include"
    }).then(res=>{
        console.log(res)
    })
   
  },
}
</script>
