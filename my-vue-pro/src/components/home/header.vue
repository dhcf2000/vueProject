<template>
	<!-- <div>
	<mt-navbar v-model="selected">
	  <mt-tab-item id="1">选项一</mt-tab-item>
	  <mt-tab-item id="2">选项二</mt-tab-item>
	  <mt-tab-item id="3">选项三</mt-tab-item>
	</mt-navbar>
	<mt-tab-container v-model="selected">
	  <mt-tab-container-item id="1">
	    <mt-cell v-for="n in 10" :title="'内容 ' + n" />
	  </mt-tab-container-item>
	  <mt-tab-container-item id="2">
	    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
	  </mt-tab-container-item>
	  <mt-tab-container-item id="3">
	    <mt-cell v-for="n in 6" :title="'选项 ' + n" />
	  </mt-tab-container-item>
	</mt-tab-container>
	</div> -->
	<mt-header :fixed="true">
	  <mt-button slot="left">微信(2)</mt-button>
	  <router-link to="/" slot="right">
	    <mt-button icon="back"></mt-button>
	  </router-link>
	  <mt-button icon="search" slot="right"></mt-button>
	</mt-header>
</template>
<script>
export default{
	data:function(){
		return{
			selected:1
		}
	},
	methods:{
		handleClose:function(e){
			console.log(e)
		}
	}
}
</script>