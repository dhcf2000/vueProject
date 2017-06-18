<template>
  <el-menu :router="true" default-active="/faceRecogn/RTV">
        <li class="el-menu-item">人脸识别</li>
        <el-menu-item v-for="(item,index) in msgArr" v-bind:index="item.src" :key="index">
          <i class="el-icon-message"></i>{{item.text}}
        </el-menu-item>
         
      </el-menu>

</template>

<script>
import axios from 'axios'
import router from '../router'
  export default{
    data:function(){
      return{
        msgArr:[],
      }
    },
    mounted:function(){
      this.$nextTick(function(){
            this.getData(); 
      })
    },
    router,
    methods:{
      getData:function(){
        var _this = this;
        axios.get('/faceRecogn').then(function(res){
          //console.log(typeof res.data);
          _this.msgArr=res.data.mag;
          console.log(res.data);
        })
      }
    }
  }
</script>

