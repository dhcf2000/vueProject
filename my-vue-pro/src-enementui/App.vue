<template>
  <div>
    <el-col id="siderbar" :span="4">
      <router-view name="siderbar"></router-view>
    </el-col>
    <!-- <img src="./assets/logo.png"> -->
    <div style="overflow:hidden;">
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
body,div,p{margin:0;padding:0;}
a{text-decoration: none;}
#header>.el-menu{
  padding:0 50px;
}
.siderbar .elmenu-item:first-child:hover{}

</style>
