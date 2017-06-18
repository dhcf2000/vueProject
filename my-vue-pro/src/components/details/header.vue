<template>
	<mt-header :title="$route.params.connectName">
	  <mt-button icon="slider-left" slot="left" v-on:click="revertPrev"></mt-button>
	  <router-link to="/" slot="right">
	    <mt-button icon="field-success"></mt-button>
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