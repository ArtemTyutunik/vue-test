import { createApp } from 'vue'
import UtriggAnalytics from 'utrigg-analytics-vue';

import App from './App.vue'
const app = createApp(App)

app.use(
    UtriggAnalytics, // analytics plugin
    { alias: 'd6ff16a00fa982b09cff' } // config object
);

app.mount('#app')
