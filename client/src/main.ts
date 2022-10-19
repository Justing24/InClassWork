import { createApp } from "vue";
import { createPinia } from "pinia";

import App from './App.vue'
import router from "./router";

<<<<<<< HEAD
import "./assets/main.scss";
=======

import './assets/main.scss'
>>>>>>> parent of de71abb (changes)

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
