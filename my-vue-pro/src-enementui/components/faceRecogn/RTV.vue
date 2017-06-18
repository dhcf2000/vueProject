<template>
<transition name="fade">
  <div class="content">
    <div class="content-header">
      <div class="content-title">
        <b>人脸入库</b>
      </div>
      <el-form :inline="true" :model="fields">
        <el-form-item label="摄像机：">
          <el-select v-model="fields.sxjVal" placeholder="-摄像机-">
            <el-option v-for="item in fields.sxjOptions" :key="item.value" :value="item.value" :label="item.label"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="查询时间：">
          <el-date-picker
            v-model="fields.queryData"
            type="daterange"
            placeholder="选择日期范围">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-radio-group v-model="fields.userType">
            <el-radio-button label="VIP"></el-radio-button>
            <el-radio-button label="黑名单"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
      <div class="content-body">
          <el-card v-for="item in fields.customers" :body-style="{ padding: '0px' }" v-on:click.native="selectFun(item)">
            <img src="../../assets/logo.png" class="image">
            <div style="padding: 14px;">
              <p>性别：{{item.sex}}</p>
              <p>年龄：{{item.age}}</p>
              <div class="bottom clearfix">
                <time class="time">日期：{{ fields.currentDate | formatDate('yyyy-MM-dd hh:mm')}}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
            <i class="selectedIcon el-icon-circle-check" v-show="item.selected"></i>
          </el-card>
      </div>
      <div>
        <span v-pre>{{ this will not be compiled }}</span>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      fields:{
        sxjOptions:[{value:'摄像机1',label:'aaaa'},{value:'摄像机2',label:'bbb'},{value:'摄像机3',label:'ccc'}],
        customers:[{'imgSrc':'../../assets/logo.png','age':'20~30','sex':'女'},{'imgSrc':'../../assets/logo.png','age':'20~30','sex':'女'},{'imgSrc':'../../assets/logo.png','age':'20~30','sex':'女'},{'imgSrc':'../../assets/logo.png','age':'20~30','sex':'女'},{'imgSrc':'../../assets/logo.png','age':'20~30','sex':'女'},{'imgSrc':'../../assets/logo.png','age':'20~30','sex':'女'}],
        sxjVal:'',
        queryData:'',
        userType:'',
        currentDate:new Date(),
        selected:true
      }
    }
  },
  filters:{
    formatDate:function(date,fmt){
      function padLeftZero(str){
        return ('00' + str).substr(str.length);
      };
      if(/(y+)/.test(fmt)){
        fmt = fmt.replace(RegExp.$1,(date.getFullYear()+'').substr(4 - RegExp.$1.length));
      };
      let o={
        'M+':date.getMonth()+1,
        'd+':date.getDate(),
        'h+':date.getHours(),
        'm+':date.getMinutes(),
        's+':date.getSeconds()
      }
      for(let k in o){
        if(new RegExp(`(${k})`).test(fmt)){
          var str = o[k] + '';
          fmt = fmt.replace(RegExp.$1,(RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
      };
      return fmt;
    }
  },
  methods:{
    selectFun:function(obj){
     if(!obj.selected){
        this.$set(obj,'selected',true)
     }else{
        obj.selected = !obj.selected;
     }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
.fade-enter-active,.fade-leave-active{
  transition:background 600ms;
}
.fade-enter,.fade-leave-active{
  background:red;
}
.content{
  padding:15px;
}
.content-title{
  padding:15px;
  border-bottom:2px solid #ccc;
  color:green;
}
.el-form{
  border-bottom:2px solid #ccc;
  padding-top:22px;
  text-align: justify;
}
.el-form:after{
  content:'';
  display:inline-block;
  width:100%;
}
.content-body{
  padding:10px 0;
}

.el-card{
  width:18%;
  float:left;
  margin:1.81% 1.81% 0 0;
  position:relative;
}
.el-card .image{
  width:100%;height:150px;
}
.el-card .selectedIcon{
  position: absolute;
  left:50%;top:30%;
  margin-top:-10px;margin-left: -10px;
  font-size:30px;
  color:#fff;
}
</style>