import { createApp } from 'vue'
import {createPinia} from "pinia";
import PrimeVue from "primevue/config";
import App from './App.vue'
import router from './router'
import 'primevue/resources/themes/aura-light-amber/theme.css'
import "primeflex/primeflex.css"
import 'primeicons/primeicons.css'
import Menubar from "primevue/menubar";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Carousel from 'primevue/carousel';
import Tag from "primevue/tag";
import DataView from "primevue/dataview";
import  Card  from 'primevue/card';
import  InputText  from 'primevue/inputtext';
import  Textarea  from 'primevue/textarea';
import AutoComplete from "primevue/autocomplete";
import BadgeDirective from "primevue/badgedirective";
import ToastService from 'primevue/toastservice';
import Toast from "primevue/toast";
import Dialog from "primevue/dialog";
import Avatar from "primevue/avatar";
import OverlayPanel from "primevue/overlaypanel";
import AnimateOnScroll from 'primevue/animateonscroll';

const pinia = createPinia()

const app = createApp(App)

app.use(PrimeVue)
app.use(router)
app.use(pinia)
app.use(ToastService);

app.component("Menubar", Menubar)
app.component("Toolbar", Toolbar)
app.component("Button", Button)
app.component("Carousel", Carousel)
app.component("Tag", Tag)
app.component("DataView", DataView)
app.component("Card", Card)
app.component("InputText", InputText)
app.component("Textarea", Textarea)
app.component("AutoComplete", AutoComplete)
app.directive('Badge', BadgeDirective)
app.component('Toast', Toast)
app.component('Dialog', Dialog)
app.component('Avatar', Avatar)
app.component('OverlayPanel', OverlayPanel)
app.directive('animateonscroll', AnimateOnScroll);



app.mount('#app')
