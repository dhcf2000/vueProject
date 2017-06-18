<template>
  <!-- <div class="navbar navbar-default">
    <div class="navbar-header"><a class="navbar-brand" href="javascript:;">vue实例</a></div>
    <div>
      <ul class="nav navbar-nav">
        <li v-for="(item,index) in msgArr" v-bind:class="{dropdowm:item.parts}">
          <a v-bind:href="item.src ? item.src : 'javascript:;'" v-bind:class="{'dropdown-toggle':!item.src}">
            {{item.productName}}<span class="glyphicon glyphicon-user"></span>
          </a>
          <ul v-if="item.parts" class="dropdown-menu">
            <li v-for="(ite,ind) in item.parts"><a href="ite.src">{{ite.partsName}}</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div> -->
<!--  <el-menu theme="dark" :default-active="activeIndex" class="el-menu-dem" mode="horizontal" @select="handleSelect" router>
  <el-menu-item index="1">Vue实例</el-menu-item>
  <el-submenu v-for="(item,index) in msgArr" v-bind:index="''+2+index" v-if="item.parts" :key="index">
    <template slot="title">{{item.productName}}</template>
    <el-menu-item v-bind:index="2+index+'-'+(ind+1)" v-for="(ite,ind) in item.parts" :key="index">
     <a v-bind:href="ite.src">{{ite.partName}}</a>
    </el-menu-item>
  </el-submenu>
  <el-menu-item v-for="(item,index) in msgArr" v-if="!item.parts" v-bind:index="''+3+index" :key="index">
    <a v-bind:href="item.src">{{item.productName}}</a>
  </el-menu-item>
</el-menu> -->
<el-menu theme="dark" :default-active="activeIndex" class="el-menu-dem" mode="horizontal" @select="handleSelect" :router="true" menu-trigger="click">
   <el-menu-item index="1">Vue实例</el-menu-item>
   <el-submenu v-for="(item,index) in msgArr" v-bind:index="''+2+index" v-if="item.childs" :key="index">
     <template slot="title">{{item.name}}</template>
     <el-menu-item v-bind:index="ite.src" v-for="(ite,ind) in item.childs" :key="index">
      <!-- <a v-bind:href="ite.src"> -->{{ite.cname}}<!-- </a> -->
     </el-menu-item>
   </el-submenu>
   <el-menu-item v-else v-bind:index="''+3+index" :key="index">
     <!-- <a v-bind:href="item.src"> -->{{item.name}}<!-- </a> -->
   </el-menu-item>
 </el-menu>
</template>

<script>
//import elnav from 'el-anv.vue'
//import axios from 'axios'
export default {
  //name: 'vnavbar',
 //props:['index'],
  data: function(){
    return{
      //activeIndex:'1',
      activeIndex:'1',
      msgArr:[{
        "id":"234565",
        "name":"智能视屏",
        "childs":[
          {
            "cid":"33333",
            "cname":"人脸识别",
            "src":"/faceRecogn"
          },{
            "cid":"44444",
            "cname":"客流应用",
            "src":"/flowApp"
          },{
            "cid":"55555",
            "cname":"WIFI嗅探",
            "src":"/wifiSniffer"
          },{
            "cid":"66666",
            "cname":"智能设置",
            "src":"/smartSet"
          }
        ]
      },{"name":'vvv',src:"dddd"}]
    }
  },
  mounted:function(){
   this.$nextTick(function(){

          this.getData(); 
    })
  },
  methods:{
    getData:function(){

      var _this = this;
     /* axios.get('static/cartData.json').then(function(res){
        //console.log(res.data.result);
        console.log(res)
        _this.msgArr=res.data.result.list;
        
      })*/

     this.$http.get("static/cartData.json").then(function(res){ //vue-resource插件请求
       console.log(res)
          _this.msgArr = res.body.result.list;
         
      })
    },
    handleSelect:function(key,keyPath){
      /*window.location.hash = key;*/
      console.log(key,keyPath)
    }
  },
  //components:{elnav}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body,div,ul,li{
  padding:0;margin:0;
}
#header>.el-menu{
  padding:0 50px;
}
</style>