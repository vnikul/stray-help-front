import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/login",
            name: "login",
            component: () => import("../views/LoginView.vue"),
        },
        {
            path: "/home",
            name: "home",
            component: () => import("../views/HomeView.vue"),
        },
        {
            path: "/signin",
            name: "signin",
            component: () => import("../views/SignInView.vue"),
        },
    ],
})

export default router
