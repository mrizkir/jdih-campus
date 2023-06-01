import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/plugins/router.js'

//scss
import '@/scss/style.scss'
 
createApp(App).use(router).mount('#app')
