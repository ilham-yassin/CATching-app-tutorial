import { createWebHistory, createRouter } from 'vue-router'
import Homepage from '../pages/Homepage.vue'
import About from '../pages/About.vue'
import ContactUs from '../pages/ContactUs.vue'
import Gallery from '../pages/Gallery.vue'
import Programs from '../pages/Programs.vue'
import Services from '../pages/Services.vue'


export const routes = [
	{
		path: '/cats',
		name: 'cats',
		component: Gallery,
	},

	{
		path: '/home',
		name: 'home',
		component: Homepage,
	},

	{
		path: '/programs',
		name: 'programs',
		component: Programs,
	},

	{
		path: '/services',
		name: 'services',
		component: Services,
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