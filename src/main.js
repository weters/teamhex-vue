/*
Copyright 2020 Tom Peters

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ThHome from "@/components/ThHome";
import ThLeague from "@/components/ThLeague";
import ThTeamOverview from "@/components/ThTeamOverview";
import ThAbout from "@/components/ThAbout";
import VueGtag from 'vue-gtag'
import './registerServiceWorker'
import ThLeagueList from "@/components/ThLeagueList"

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: ThHome},
        {
            path: '/about', component: ThAbout,
            meta: {
                title: 'About - Team Hex'
            }
        },
        {
            path: '/leagues', component: ThLeagueList,
            meta: {
                title: 'Leagues - Team Hex',
            }
        },
        {
            path: '/leagues/:league', component: ThLeague, props: route => ({
                ...route.params,
                setTitle: true,
            })
        },
        {path: '/leagues/:league/:team', component: ThTeamOverview, props: true},
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    },
})

if (process.env.NODE_ENV === 'production') {
    Vue.use(VueGtag, {
        config: {
            id: 'UA-158972413-1'
        },
    }, router)
}

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
