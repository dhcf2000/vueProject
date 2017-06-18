// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import elementui from 'element-ui'
import elementcss from 'element-ui/lib/theme-default/index.css'
//import App from './App'
import router from './router'
import animatecss from 'animate.css'
import vnavbar from './components/vnavbar'
//import elemswitch from './components/elemswitch'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(elementui)
Vue.use(vueResource)
new Vue({
	el:'#header',
	router,
	//template:'<vnavbar/>',
	components:{vnavbar}
});
new Vue({
  el: '#app',
  router,
  //template: '<App/>',
  //components: { App}
});
/*new Vue({
	el:"#elemui",
	//template:'<elemswitch/>',
	components:{elemswitch}
})*/
/*Vue.filter('formatDate',function(value,fmt){
	console.log("dddddddddddddddd")
	function padLeftZero(str){
		return ('00' + str).substr(str.length);
	};
	if(/y+/.test(fmt)){
		fmt = fmt.replace(RegExp.$1,(date.getFullYear()+'').substr(4 - RegExp.$1.length));
	};
	let o={
		'M+':date.getMonth()+1,
		'd+':date.getDate(),
		'h+':date.getHours(),
		'm+':date.getMinutes(),
		's+':date.getSeconds()
	}
	for(let k in o){
		if(new RegExp(`(${k})`).text(fmt)){
			var str = o[k] + '';
			fmt = fmt.replace(RegExp.$1,(RegExp.$1.length === 1) ? str : padLeftZero(str));
		}
	};
	return 'fmt';
})*/