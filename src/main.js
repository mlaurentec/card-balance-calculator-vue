import { createApp } from 'vue'
import './style.css'
import '@mdi/font/css/materialdesignicons.css'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import router from './router/index'

// Components
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
})
const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount('#app');
