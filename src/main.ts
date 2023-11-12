import { createApp } from 'vue';
import { createPinia } from 'pinia';
import i18next from 'i18next';
import I18NextVue from 'i18next-vue';

import App from './App.vue';
import en from './locales/en';

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: en,
    },
  },
});

const app = createApp(App);

app.use(I18NextVue, { i18next });

app.use(createPinia());

app.mount('#app');
