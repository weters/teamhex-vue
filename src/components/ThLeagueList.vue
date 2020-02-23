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
    <div class="th-league-list">
        <h2>Supported Leagues</h2>

        <ul v-if="Array.isArray(leagues)">
            <li v-for="league in leagues" :key="league">
                <router-link :to="`/leagues/${encodeURIComponent(league.toLowerCase())}`">{{ league }}</router-link>
            </li>
        </ul>
        <th-error :error="error" v-else-if="error" />
        <th-loading v-else />
    </div>
</template>

<script>
    import client from "@/models/client";
    import ThLoading from "@/components/ThLoading";
    import ThError from "@/components/ThError";

    export default {
        name: "ThLeagueList",
        components: {ThError, ThLoading},
        data() {
            return {
                error: null,
                leagues: null,
            }
        },
        mounted() {
            client.getLeagues()
                .then(leagues => this.leagues = leagues.map(l => l.league))
                .catch(err => this.error = err)
        }
    }
</script>

<style scoped>

</style>