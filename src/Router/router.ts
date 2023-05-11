import { createWebHistory, createRouter } from 'vue-router'
import Homepage from '../pages/Homepage.vue'
import About from '../pages/About.vue'
import ContactUs from '../pages/ContactUs.vue'
import CatGallery from '../pages/CatGallery.vue'


export const routes = [
	{
		path: '/catgallery',
		name: 'catgallery',
		component: CatGallery,
	},

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
	routes,
})

export default router;