import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import MixinGlobal from './MixinGlobal'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).mixin(MixinGlobal).use(store).use(router).use(ElementPlus).mount('#app')
