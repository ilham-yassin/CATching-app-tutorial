import { createWebHistory, createRouter } from 'vue-router'
import Homepage from '../pages/Homepage.vue'
import About from '../pages/About.vue'
import ContactUs from '../pages/ContactUs.vue'


export const routes = [
	{
		path: '/home',
		name: 'home',
		component: Homepage,
	},

	{
		path: '/about',
		name: 'about',
		component: About,
	},

	{
		path: '/contactus',
		name: 'contact-us',
		component: ContactUs,
	},

]

const router = createRouter({
	history: createWebHistory(),
	routes, //same --- > routes:routes
})

export default router;