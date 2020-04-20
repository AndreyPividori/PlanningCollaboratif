import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

// Import des composants nécessaires au routage
import Home from './components/Views/Home'
import AddTest from './components/Views/AddTest'
import Planning from './components/Views/Planning'
import Configuration from './components/Views/configuration'

Vue.use(Router)

const router = new Router({
  mode :'history',
  routes: [
    {
      path: '/',
      component: Home 
    },
    {
      path:'/Home',
      component: Home 
    },
    {
      path: '/Planning',
      component: Planning
    },
    {
      path: '/Test',
      component: AddTest
    },
    {
      path: '/Configuration',
      component: Configuration
    },
    {
      path: '*',
      redirect: '/Home'
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
