<template>
	<div id="elemswitch">
		<el-switch
	      v-model="value3"
	      on-color="#13ce66"
	      off-color="#ff4949"
	      on-value="100"
	      off-value="0">
	    </el-switch>
	</div>
</template>

<script>
	export default{
		name: 'elemswitch',
		data:function(){
			return {
				value3:'100'
			}
		}
	}
</script>