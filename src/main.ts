import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";
import router from "./router";
import store from "./stores/vuex/index";

debugger;
const app = createApp(App);

app.use(createPinia());
app.use(store);
app.use(router);
app.use(ElementPlus);

app.mount("#app");
