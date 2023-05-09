import "./styles/core.scss"

import { createApp } from 'vue'
import App from './App.vue'
import router from './Router/router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import pinia from "./store"

createApp(App).use(router).use(pinia).mount('#app')
