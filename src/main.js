// Import the main function to create a view application
import { createApp } from "vue";
// Import the main App component
import App from "./App.vue";
// Import the vue application router
import router from "./router/index.js";
// Import the CSS styles
import "./styles/App.css";

/*
 * Create the Vue application inside the HTML element
 * with the id 'app' and use the Vue.js router
 */

// createApp(App).use(router).mount('#app')

createApp(App).use(router).mount("#app");
