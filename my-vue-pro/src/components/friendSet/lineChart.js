import { Line } from 'vue-chartjs'
export default Line.extend({
	mounted:function(){
		this.renderChart({
			labels:['January','February','March','April','May','June','July'],
			datasets:[
				{
					label:'Data one',
					backgroundColot:'#fc2525',
					data:[40,39,10,40,39,80,40]
				},{
					label:'Data Two',
					backgroundColot:'#05cbe1',
					data:[60,55,32,10,2,12,53]
				}
			]
		},{responsive:true,maintaiAspectRatio:false})
	}
})