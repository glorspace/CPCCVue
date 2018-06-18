import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Give from '@/components/Give'
import SmallGroups from '@/components/SmallGroups'
import Volunteer from '@/components/Volunteer'
import Calendar from '@/components/Calendar'
import Contact from '@/components/Contact'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/home', component: Home },
        { path: '/give', component: Give },
        { path: '/smallgroups', component: SmallGroups },
        { path: '/volunteer', component: Volunteer },
        { path: '/calendar', component: Calendar },
        { path: '/contact', component: Contact },
        { path: '/about', component: About }
    ]
})
