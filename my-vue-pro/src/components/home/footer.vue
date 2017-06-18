<template>
	<mt-tabbar v-model="$store.state.selected" v-on:click.native="sendSelected" fixed>
	  <mt-tab-item id="微信">
	    <span slot="icon" class="mintui mintui-comment"></span>
	    微信
	  </mt-tab-item>
	  <mt-tab-item id="通讯录">
	  	<span slot="icon" class="mintui mintui-avatar2"></span>
	    通讯录
	  </mt-tab-item>
	  <mt-tab-item id="发现" icon="back">
	  	<i slot="icon" class="mintui mintui-yanjing"></i>
	    <!-- <img slot="icon" src="../../assets/logo.png"> -->
	    发现
	  </mt-tab-item>
	  <mt-tab-item id="我的">
		<i slot="icon" class="mintui mintui-user"></i>
	    我的
	  </mt-tab-item>
	</mt-tabbar>
</template>
<script>
export default{
	data:function(){
		return{
			
		}
	},
	methods:{
		sendSelected:function(){
			//this.$store.state.selected = this.selected;
			this.$store.commit('indexTabbarid',{amount:this.$store.state.selected})
		}
	}
}
</script>