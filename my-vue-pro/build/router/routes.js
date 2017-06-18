var router = require('express').Router()
router.get('/proMovie',function(req,res){
  res.send({'msg':[{'text':"vue实例",'src':"aaa"},{'text':"详情",'src':"bbb"}]})
  //res.redirect('/index');
});
router.get('/faceRecogn',function(req,res){
	res.send({'mag':[{'text':"实时视频",'src':'/faceRecogn/RTV',icon:"el-icon-message"},
					 {'text':"人脸入库",'src':'/faceRecogn/storage',icon:"el-icon-picture"},
					 {'text':"人脸查询",'src':'/faceRecogn/query',icon:"el-icon-setting"},
					 {'text':"历史分析",'src':'/faceRecogn/analysis',icon:"el-icon-star-on"}
		]})
})
module.exports=router;