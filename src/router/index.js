import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import '../assets/css/global.css'
import Home from '../components/home.vue'
import Welcome from '../components/welcome.vue'
import Users from '../components/user/users.vue'

Vue.use(VueRouter)

const routes = [
	{ path: '/', redirect: '/login' },
	{ path: '/login', component: Login },
	{ 
		path: '/home',
		redirect: '/welcome',
		component: Home,
		children: [
			{ path: '/welcome', component: Welcome },
			{ path: '/users', component: Users }
		] 
	}
]

const router = new VueRouter({
	routes
})

export default router
