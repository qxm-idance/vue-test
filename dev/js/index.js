import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Index from 'views/index.vue'
import '../style/index.less'

// install router
Vue.use(VueRouter)

// Load Resource
Vue.use(VueResource)

// use globally
// you can also just use `VueAsyncData.mixin` where needed
Vue.use(VueAsyncData)

// create router
const router = new VueRouter({
  saveScrollPosition: true
})

router.map({
    '/': {
        component: Index,
        name: '/'
    }
});
// boostrap the app
router.start(Vue.extend(App), '#root')

// just for debugging
window.router = router
