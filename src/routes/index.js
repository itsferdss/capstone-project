import { createRouter, createWebHistory } from 'vue-router';

import home from "../views/home.vue";
import login from "../views/login.vue";
import profile from "../views/profile.vue";
import records from "../views/records.vue";
import vaccination from "../views/vaccination.vue"
import schedule from "../views/schedule.vue"
import prescription from "../views/prescription.vue"
import specialCare from "../views/specialCare.vue"

import adminLogin from "../views/adminLogin.vue"
import adminHome from "../views/adminHome.vue"
import adminProfile from "../views/adminProfile.vue"
import adminUsers from "../views/adminUsers.vue"



const routes = [
    { path: '/',  component: login },
    { path: '/home', component: home },
    { path: '/profile', component: profile },
    { path: '/records', component: records },
    { path: '/vaccination', component: vaccination },
    { path: '/schedule', component: schedule },
    { path: '/prescription', component: prescription },
    { path: '/specialCare', component: specialCare },

    { path: '/adminLogin', component: adminLogin },
    { path: '/adminHome', component: adminHome },
    { path: '/adminProfile', component: adminProfile },
    { path: '/adminUsers', component: adminUsers },


    
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;