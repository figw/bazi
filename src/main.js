import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import 'element-plus/dist/index.css'
import './style.css'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from './App.vue'
import BaZi from './components/BaZi.vue'
import Fireworks from './components/Fireworks.vue'
import Home from './components/Home.vue'
import LiuYao from './components/LiuYao.vue'
import QiMen from "./components/QiMen.vue";

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/fireworks',
        component: Fireworks,
    },
    {
        path: '/bazi',
        component: BaZi,
    },
    {
        path: '/liuyao',
        component: LiuYao,
    },
    {
        path: '/qimen',
        component: QiMen,
    },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

const app = createApp(App)

app.use(router)
app.use(ElementPlus, { locale: zhCn })
app.mount('#app')
