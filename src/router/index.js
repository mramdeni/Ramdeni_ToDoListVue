import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home-screen",
            component: () => import("../pages/House"),
        },
        {
            path: "/add",
            name: "add-data",
            component: () => import("../pages/Add"),
        },
        {
            path: "/edit/:id",
            name: "edit-data",
            component: () => import("../pages/Edit"),
        },
        {
            path: "/detail/:id",
            name: "detail-data",
            component: () => import("../pages/Detail"),
        },
        {
            path: "/index",
            name: "House-Awal",
            component: () => import("../pages/Index"),
        }
    ],
});

export default router;
