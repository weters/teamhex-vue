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
    <div class="th-league">
        <h2>{{ leagueName }}</h2>

        <div class="divisions" v-if="divisions">
            <div class="division" v-for="division in divisions" :key="division.name">
                <h3 v-if="division.name">{{ division.name }}</h3>

                <ul>
                    <li v-for="team in division.teams" :key="team.name">
                        <div class="colors">
                        <span class="color-block" v-for="(color, i) in team.eras[0].colors" :key="i"
                              :style="`background-color: ${color.hex}`">&nbsp;</span>
                        </div>
                        <router-link :to="teamLink(team)">{{ team.name }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <th-error :error="error" v-else-if="error" />
        <th-loading v-else />
    </div>

</template>

<script>
    import client from "@/models/client";
    import ThError from "@/components/ThError";
    import ThLoading from "@/components/ThLoading";

    export default {
        name: "ThLeague",
        components: {ThLoading, ThError},
        props: {
            league: {
                type: String,
                required: true,
            },
            setTitle: {
                type: Boolean,
                default: false,
            }
        },
        data() {
            return {
                error: null,
                divisions: null,
                name: null,
            }
        },
        computed: {
            leagueName() {
                return this.name || this.league
            }
        },
        watch: {
            $route() {
                this.loadData()
            },
        },
        mounted() {
            this.loadData()
        },
        methods: {
            teamLink(team) {
                return `/leagues/${encodeURIComponent(team.league.toLowerCase())}/${encodeURIComponent(team.name.toLocaleLowerCase())}`
            },
            loadData() {
                client.getTeamsByLeague(this.league)
                    .then(divisions => {
                        this.divisions = divisions
                        this.name = divisions[0].teams[0].league

                        if (this.setTitle) {
                            document.title = `${this.name} - Team Hex`
                        }
                    })
                    .catch(err => this.error = err)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';

    div.division {
        margin-bottom: $spacing;

        &:last-child {
            margin-bottom: 0;
        }

        ul {
            display:               grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            grid-column-gap:       $spacing-small;
            grid-row-gap:          $spacing;
        }
    }

    div.colors {
        line-height: 1em;
        height:      1em;

        span.color-block {
            display: inline-block;
            width:   1.5em;
            height:  1em;

            &:first-child {
                border-top-left-radius:    $border-radius;
                border-bottom-left-radius: $border-radius;
            }

            &:last-child {
                border-top-right-radius:    $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }
    }

    ul {
        list-style: none;
        margin:     0;
    }
</style>