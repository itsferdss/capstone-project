import { createApp } from 'vue';
import router from "./routes/";
import App from './App.vue'

import '@fortawesome/fontawesome-free/js/all.js';

createApp(App).use(router).mount('#app')

