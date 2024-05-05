import { createRouter, createWebHistory } from 'vue-router';

import home from "../views/home.vue";
import login from "../views/login.vue";
import register from "../views/register.vue";
import profile from "../views/profile.vue";
import records from "../views/records.vue";
import vaccination from "../views/vaccination.vue"
import schedule from "../views/schedule.vue"
import prescription from "../views/prescription.vue"
import specialCare from "../views/specialCare.vue"

const routes = [
    { path: '/',  component: login },
    { path: '/home', component: home },
    { path: '/register', component: register },
    { path: '/profile', component: profile },
    { path: '/records', component: records },
    { path: '/vaccination', component: vaccination },
    { path: '/schedule', component: schedule },
    { path: '/prescription', component: prescription },
    { path: '/specialCare', component: specialCare },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;