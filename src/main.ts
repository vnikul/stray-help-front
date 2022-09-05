import { createApp } from "vue"
import { createPinia } from "pinia"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

import App from "./App.vue"
import router from "./router"

const app = createApp(App)

app.use(ElementPlus)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
app.use(createPinia())
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
app.use(router)

app.mount("#app")
