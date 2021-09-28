import { createApp } from 'vue';
import { initGame } from './game';
import App from './App.vue'

const app = createApp(App)

initGame()
app.mount('#app')
