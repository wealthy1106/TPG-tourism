// import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createApp } from 'vue'
import App from './App.vue'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import 'jquery';

import router from "./router";
createApp(App).use(router).mount("#app");
// createApp(App).mount('#app')
