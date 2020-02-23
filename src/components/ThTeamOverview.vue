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
    <div class="th-team-overview">
        <template v-if="teamObj">
            <div class="grid">
                <th-team :team="teamObj"/>

                <th-league :league="teamObj.league"/>
            </div>
        </template>
        <th-error v-else-if="error" :error="error" />
        <th-loading v-else />
    </div>
</template>

<script>
    import client from "@/models/client";
    import ThTeam from "@/components/ThTeam";
    import ThLeague from "@/components/ThLeague";
    import ThError from "@/components/ThError";
    import ThLoading from "@/components/ThLoading";

    export default {
        name: "ThTeamOverview",
        components: {ThLoading, ThError, ThLeague, ThTeam},
        props: {
            league: {
                type: String,
                required: true,
            },
            team: {
                type: String,
                required: true,
            },
        },
        data() {
            return {
                error: null,
                teamObj: null,
            }
        },
        mounted() {
            return this.loadData()
        },
        watch: {
            $route() {
                this.loadData()
            }
        },
        methods: {
            loadData() {
                client.getTeamByLeagueAndName(this.league, this.team)
                    .then(team => this.teamObj = team)
                    .catch(err => this.error = err)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';

    .grid {
        display:               grid;
        grid-template-columns: 3fr minmax(200px, 1fr);
        grid-gap:              $spacing;
    }
</style>