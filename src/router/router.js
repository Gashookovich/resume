import HomePage from "@/pages/HomePage";
import {createRouter, createWebHistory} from "vue-router";
import AducationPage from "@/pages/AducationPage";
import WorkExperiencePage from "@/pages/WorkExperiencePage";
import HobbiesPage from "@/pages/HobbiesPage";


const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/aducation',
        component: AducationPage
    },
    {
        path: '/experience',
        component: WorkExperiencePage
    },
    {
        path: '/hobbies',
        component: HobbiesPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;