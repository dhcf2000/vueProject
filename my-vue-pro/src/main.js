// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import {Line} from 'vue-chartjs'
import Vue from 'vue'
import Vuex from 'vuex'
import vueResource from 'vue-resource'
import mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import css from './assets/global.css'
import router from './router'
import animatecss from 'animate.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Vuex)
Vue.use(mint)
Vue.use(vueResource)
var store = new Vuex.Store({
	state:{
		selected:'我的'
	},
	mutations:{
		indexTabbarid:function(state,payload){
			state.selected = payload.amount;
		}
	}
});
new Vue({
	//el:"#app",
	store,
	router
}).$mount('#app');

