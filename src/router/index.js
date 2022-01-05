import { createRouter, createWebHistory } from 'vue-router';
import Contact from '@/views/Contact.vue';
import Home from '@/views/Home.vue';
import Works from '@/views/Works.vue';
import About from '@/views/About.vue';
import Certificates from '@/views/Certificates.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/works',
        name: 'works',
        component: Works
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/Certificates',
        name: 'Certificates',
        component: Certificates
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router