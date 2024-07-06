import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './Router.js';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-dark-indigo/theme.css'
import './assets/styles.scss';
import FocusTrap from 'primevue/focustrap';

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.directive('focustrap', FocusTrap);
app.mount('#app');
