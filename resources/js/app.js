import './bootstrap';
import 'primevue/resources/themes/aura-light-green/theme.css'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import App from "./Components/App.vue";

const app = createApp(App)
app.use(PrimeVue);
app.component('InputText', InputText);
app.component('Button', Button);

app.mount('#app')

