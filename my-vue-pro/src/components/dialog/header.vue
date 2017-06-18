<template>
	<mt-header :title="$route.params.connectName" :fixed="true">
	  <mt-button icon="slider-left" slot="left" v-on:click="revertPrev">返回</mt-button>
	  <router-link :to="'/friendSet/'+$route.params.connectName" slot="right">
	  	<i class="mintui mintui-user"></i>
	  </router-link>
	</mt-header>
</template>

<script>
export default{
	methods:{
		revertPrev:function(){
			this.$router.go(-1);
		}
	},

}
</script>