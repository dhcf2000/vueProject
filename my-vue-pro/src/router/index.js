import Vue from 'vue'
import Router from 'vue-router'
import indexBody from '@/components/home/body'
import indexFooter from '@/components/home/footer'
import indexHeader from '@/components/home/header'

import dialogBody from '@/components/dialog/body'
import dialogFooter from '@/components/dialog/footer'
import dialogHeader from '@/components/dialog/header'

import friendSetHeader from '@/components/friendSet/header'
import friendSetBody from '@/components/friendSet/body'
import friendSetFooter from '@/components/friendSet/footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      alias: '/',
      //name: 'index',
      components:{
        header:function(resolve){require(['../components/home/header'],resolve)},
        body:indexBody,
        footer:indexFooter
      }
    },{
      path:'/dialog/:connectName',
      name:'dialog',
      components:{header:dialogHeader,body:dialogBody,footer:dialogFooter}
    },{
      path:'/friendSet/:connectName',
      name:'friendSet',
      components:{header:friendSetHeader,body:friendSetBody,footer:friendSetFooter}
    }
  ]
})

