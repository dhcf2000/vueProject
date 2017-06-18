<template>
	<mt-header :title="$route.params.connectName">
	  <mt-button icon="slider-left" slot="left" v-on:click="revertPrev"></mt-button>
	  <router-link :to="'/friendSet/'+$route.params.connectName" slot="right">
	  	<i class="mintui-icon-user"></i>
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