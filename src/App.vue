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

<template>
    <div id="app">
        <header>
            <th-header/>
        </header>
        <main>
            <router-view/>
        </main>
        <footer>
            <th-footer/>
        </footer>
        <th-banner/>
        <th-refresh-notification @refresh="refreshRequested" v-if="serviceWorker"/>
    </div>
</template>

<script>
    import ThHeader from "@/components/ThHeader"
    import ThFooter from "@/components/ThFooter"
    import ThBanner from "@/components/ThBanner"
    import bus from "@/bus"
    import ThRefreshNotification from "@/components/ThRefreshNotification"

    export default {
        name: 'app',
        components: {ThRefreshNotification, ThBanner, ThFooter, ThHeader},
        data() {
            return {
                serviceWorker: null,
            }
        },
        watch: {
            '$route': {
                handler(to) {
                    document.title = to.meta.title || 'Team Hex - Find colors for your favorite sports teams'
                },
                immediate: true,
            },
        },
        mounted() {
            bus.$on('refresh-needed', serviceWorker => this.serviceWorker = serviceWorker)
        },
        methods: {
            refreshRequested() {
                this.serviceWorker.postMessage('skipWaiting')
                this.serviceWorker = null
            },
        },
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:100i|Trirong:400,700&display=swap');
    @import './variables';

    * {
        padding:    0;
        margin:     0;
        outline:    none;
        box-sizing: border-box;
    }

    html, body {
        background-color: $light-color;
        font-family:      $font-body;
        font-weight:      400;
        color:            #222;
    }

    a {
        color: $primary;

        &:hover {
            background-color: rgba($primary, 0.1);
        }
    }

    h1, h2, h3, h4, h5, h6, p, ul, ol, table {
        margin-bottom: $spacing;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: $font-header;
        font-style:  italic;
    }

    h2 { font-size: 2em; }

    h3 { font-size: 1.6em; }

    h4 { font-size: 1.2em; }

    ul, ol {
        margin-left: 50px;
    }

    header > *, main > *, footer > * {
        padding: 0 $spacing;

        @supports (padding: m#{a}x(0px)) {
            padding-right: m#{a}x($spacing, env(safe-area-inset-right, $spacing));
            padding-left:  m#{a}x($spacing, env(safe-area-inset-left, $spacing));
        }
    }

    main {
        padding: $spacing 0;
    }

    button {
        background-color: white;
        border-width:     0;
        border-radius:    $border-radius;
        padding:          $spacing-small calc(#{$spacing} * 2);
        font-family:      $font-body;
        font-size:        1.1em;

        &:active {
            box-shadow: inset 2px 5px 5px rgba(black, 0.4);
        }
    }
</style>
