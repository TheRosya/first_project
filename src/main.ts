import { createApp } from 'vue'

import App from './App.vue'
import components from './components/UI'
import directives from './directives';
import router from './router/router';
import { createPinia } from 'pinia';

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
});

directives.forEach(directive => {
  app.directive(directive.name, directive)
})

app.use(createPinia())
app.use(router)
app.mount('#app')
