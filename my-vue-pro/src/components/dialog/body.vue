<template>
	<div id="dialog-wrap">
		<div class="dialog-content">
			kkkkkkkkkkkkkkkk
			
		</div>
		<div class="dialog-bottom">
			<div class="dialog-input" style="width:100%;">
				<div class="leftBtnBox"><span class="mintui mintui-feedback"></span></div>
				<div class="elInput"><input></div>
				<div class="rightBtnBox">
					<span class="mintui mintui-face"></span>
					<span class="mintui mintui-add2" v-on:click="isShow= ! isShow"></span>
				</div>
			</div>
			<div class="dialog-dropdown" style="width:100%;height:200px;color:#585757;" v-show="isShow">
				<mt-swipe :auto="0" :continuous="false">
				  <mt-swipe-item>
				  	<a>
				  		<p style="height:50px;line-height:50px;text-align:center;border:1px solid #ccc;border-radius:5px;">
				  			<span class="mintui mintui-picture" style="font-size:40px;"></span>
				  		</p>
				  		<p style="text-align:center;">相册</p>
				  	</a>
				  	<a>
				  		<p style="height:50px;line-height:50px;text-align:center;border:1px solid #ccc;border-radius:5px;">
				  			<span class="mintui mintui-zhaoxiangji" style="font-size:40px;"></span>
				  		</p>
				  		<p style="text-align:center;">拍摄</p>
				  	</a>
					<a>
				  		<p style="height:50px;line-height:50px;text-align:center;border:1px solid #ccc;border-radius:5px;">
				  			<span class="mintui mintui-danfanxiangji" style="font-size:40px;"></span>
				  		</p>
				  		<p style="text-align:center;">摄像机</p>
				  	</a>
				  	<a>
				  		<p style="height:50px;line-height:50px;text-align:center;border:1px solid #ccc;border-radius:5px;">
				  			<span class="mintui mintui-weizhi" style="font-size:40px;"></span>
				  		</p>
				  		<p style="text-align:center;">位置</p>
				  	</a>
				  </mt-swipe-item>
				  <mt-swipe-item>2</mt-swipe-item>
				  <mt-swipe-item>3</mt-swipe-item>
				</mt-swipe>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data:function(){
		return{
			isShow:false,
		}
	}
}
</script>
<style type="css/text">
.dialog-content{
	overflow: auto;
	position:absolute;
	padding:40px 0 22px 0;
	width:100%;
	height:100%;
	background:#f7f1f1;
	box-sizing: border-box;
}
.dialog-bottom{
	position:fixed;
	left:0;bottom:0;
	width:100%;
	background:#fff;
}
.dialog-input{
	width:100%;
	display:flex;
	display: -webkit-inline-flex;
	padding:3px;
	border-top:1px solid #f9f0f0;
	border-bottom:1px solid #f9f0f0;
	
}
.dialog-input>.elInput{
	flex:9;
}
.dialog-input>.leftBtnBox{
	text-align: center;
	flex:1;
}
.dialog-input>.rightBtnBox{
	text-align: center;
	flex:2;
}
.dialog-input>.elInput>input{
	width:100%;
	border:none;
	border-bottom:1px solid #f9f0f0;
}
.dialog-input>.elInput>input:focus{
	outline: none;
	border:none;
	border-bottom:1px solid #4caf50;
}
.dialog-bottom .dialog-dropdown .mint-swipe-item{
	font-size: 0;
}
.dialog-bottom .dialog-dropdown a{
	box-sizing: border-box;
	padding:10px;
	display: inline-block;
	width:25%;
	font-size:12px;
}
</style>