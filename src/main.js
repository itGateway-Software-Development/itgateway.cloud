import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import EN from "./locale/en.json";
import MM from "./locale/mm.json";
import TH from './locale/th.json';
import './assets/css/style.css'
import './assets/js/theme'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import AOS from "aos";
import "aos/dist/aos.css"

loadFonts();

AOS.init({
    delay: 50,
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: true,
});

store.watch(state => state.locale, newLocale => i18n.global.locale = newLocale);

const i18n = createI18n({
    locale: store.state.locale,
    messages: {EN, MM, TH}
})

createApp(App).use(router).use(store).use(i18n).use(vuetify).mount("#app");
