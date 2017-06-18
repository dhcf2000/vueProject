import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import RTV from '@/components/faceRecogn/RTV'
import siderbar from '@/components/siderbar'
import elemswitch from '@/components/elemswitch'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/faceRecogn',
      redirect: '/faceRecogn/RTV',
      name: 'Hello',
      components:{app:App},
      children:[{
	      	path:'RTV', //real-time video;
	      	//siderbar:siderbar,
	      	components:{siderbar:siderbar,main:RTV}
	      },{
	      	path:'storage',
	      	components:{siderbar:siderbar,main:elemswitch}
	      }
      ]
    }
  ]
})

