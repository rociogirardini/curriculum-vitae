// Main imports
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Languages
import i18n from './locales/i18n'

// Styles
import "./assets/main.css";
import "@mdi/font/css/materialdesignicons.css";

import Clipboard from "v-clipboard";

const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "dark",
  },
});

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(Clipboard);
app.use(i18n);

app.mount("#app");
