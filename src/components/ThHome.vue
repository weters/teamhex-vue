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
    <div class="th-home">
        <div>
            <th-search class="th-search"/>

            <p>Lookup the colors of your favorite sports team. Use the quick search above, or you can find teams
                listed by league.</p>
        </div>
        <th-league-list class="th-league-list"/>

        <section class="api">
            <h2>API Access</h2>

            <p>Team Hex has a robust, <a
                    href="https://petstore.swagger.io/?url=https://api.teamhex.dev/swagger.json">fully
                documented</a>, <a href="https://github.com/weters/teamhex">open-sourced</a>
                API for programmatically retrieving color data. Oh yeah, it's free to use too. This site was
                built using
                those APIs, so feel free to browse and use this site's <a
                        href="https://github.com/weters/teamhex-vue">source
                    code</a>.</p>
        </section>
    </div>
</template>

<script>
    import ThLeagueList from "@/components/ThLeagueList"
    import ThSearch from "@/components/ThSearch"

    export default {
        name: "ThHome",
        components: {ThSearch, ThLeagueList},
    }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';

    .th-home {
        display:               grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap:       $spacing;
        align-items:           start;
        margin-bottom:         $spacing;

        @media (max-width: $mobile-width) {
            display: block;
        }

        & > div:first-child {
            grid-column-start: 1;
            grid-row-start: 1;
        }

        .th-league-list {
            grid-column-start: 2;
            grid-row: 1 / span 2;
        }
    }

    .th-search {
        margin-bottom: $spacing;
    }

    @media (min-width: $mobile-width+1) {
        .th-league-list {
            border-left:  1px solid $border-color;
            padding-left: $spacing;
        }
    }
</style>