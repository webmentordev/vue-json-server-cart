import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import "../src/assets/style/app.css"

createApp(App).use(router).mount('#app')
