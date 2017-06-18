<template>
	<mt-tab-container v-model="$store.state.selected">
		<mt-tab-container-item id="微信">
			<mt-cell title="Aaron" to="/dialog/Aaron"></mt-cell>
		    <mt-cell title="Alden" value="dd" to="/dialog/Alden">
		   		<img slot="icon" src="../../assets/images/3.jpg">
		    </mt-cell>
		    <mt-cell title="Austin"></mt-cell>
		    <mt-cell title="Baldwin"></mt-cell>
		    <mt-cell title="Braden"></mt-cell>
		    <mt-cell title="Zack"></mt-cell>
		    <mt-cell title="Zane"></mt-cell>
		</mt-tab-container-item>
		<mt-tab-container-item id="通讯录">
			<mt-index-list>
			  <mt-index-section index="A">
			    <mt-cell title="Aaron"></mt-cell>
			    <mt-cell title="Alden"></mt-cell>
			    <mt-cell title="Austin"></mt-cell>
			  </mt-index-section>
			  <mt-index-section index="B">
			    <mt-cell title="Baldwin"></mt-cell>
			    <mt-cell title="Braden"></mt-cell>
			  </mt-index-section>
			  ...
			  <mt-index-section index="Z">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			  </mt-index-section>
			</mt-index-list>
		</mt-tab-container-item>
		<mt-tab-container-item id="发现">
			<mt-cell v-for="n in 10" :title="'发现' + n"></mt-cell>
		</mt-tab-container-item>
		<mt-tab-container-item id="我的">
			<mt-cell v-for="n in 10" :title="'我的' + n"></mt-cell>
		</mt-tab-container-item>
	</mt-tab-container>
</template>
<script>
export default{
	data:function(){
		return{
			selected:this.$store.state.selected,
		}
	},
	mounted:function(){
		this.$nextTick(function(){
			//this.setSelected();
		})
	},
	/*computed: {
	    selected:function(){
	      return this.$store.state.selected
	    }
	},*/
	methods:{
		setSelected:function(){
			this.selected = this.$store.state.selected;
		},
		inDetails:function(name){
			//window.location.hash = '/details/'+name;
			this.$router.push({name:'dialog',params:{connectName:name}});
		}
	}
}
</script>

<style type="text/css">
.mint-tab-container .mint-cell{
	border-bottom:0.5px solid #f9f0f0;
}
.mint-tab-container .mint-cell>.mint-cell-wrapper{
	padding:3px 10px;
}
.mint-tab-container .mint-cell img{
	width:45px;height:45px;
}
.mint-indexlist-nav{
	border:none;
	background:none;
}
</style>