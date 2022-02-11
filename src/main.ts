import { createApp } from 'vue'

import App from './App.vue'

import router from './router/index'
import store from './store/index'

import 'normalize.css'
import './assets/css/index.less'

// import { registerApp } from './global/index'

const app = createApp(App)

// registerApp(app)
app.use(router).use(store).mount('#app')
