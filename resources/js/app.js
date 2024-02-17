import './bootstrap';
import '../css/app.css';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primevue/resources/primevue.css";
import { createApp } from 'vue'
import PrimeVue from 'primevue/config';

import ToastService from 'primevue/toastservice';
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Toast from 'primevue/toast';
import App from "./Components/App.vue";
import {designSystem} from "./designSystem.js";

const app = createApp(App)
app.use(PrimeVue, { unstyled: true, pt: designSystem });
app.use(ToastService);
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Toast', Toast);

app.mount('#app')

