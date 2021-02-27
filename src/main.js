import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'


/* createApp(App).mount('#app'); */

const Bus = mitt();
const app = createApp(App);

app.config.globalProperties.Bus = Bus;
app.mount('#app')