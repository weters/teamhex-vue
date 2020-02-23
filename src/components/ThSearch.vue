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
    <div class="th-search" :class="{ 'has-results': !!teams }">
        <label>
            <span>Search by team</span>
            <input ref="search" type="text" placeholder="Search..." v-model="search" @input="queueSearch" @keydown="keyUp">
        </label>

        <div class="results" v-if="teams">
            <ul>
                <li :class="{ 'is-selected': index === selected }"
                    v-for="(team, index) in teams"
                    :key="`${team.league}-${team.name}`"
                    @mouseover="selected=index"
                    @click="go(team)">
                        {{ team.name }} - {{ team.league }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import client from "@/models/client";
    import {teamToPath} from "@/util";

    export default {
        name: "ThSearch",
        data() {
            return {
                search: null,
                teams: null,
                selected: -1,
            }
        },
        watch: {
            teams(newValue) {
                if (newValue) {
                    window.addEventListener("mousemove", this.onMouseMove)
                    window.addEventListener("click", this.onClick)
                }  else {
                    window.removeEventListener("mousemove", this.onMouseMove)
                    window.removeEventListener("click", this.onClick)
                }
            }
        },
        mounted() {
            this.$refs.search.focus()
        },
        beforeDestroy() {
            window.removeEventListener("mousemove", this.onMouseMove)
            window.removeEventListener("click", this.onClick)
        },
        methods: {
            onClick(event) {
                if (!this.$el.contains(event.target)) {
                    this.resetSearch()
                }
            },
            onMouseMove(event) {
                if (!this.$el.contains(event.target)) {
                    if (this.selected >= 0) {
                        this.selected = -1
                    }
                }
            },
            go(team) {
                this.$router.push(teamToPath(team))
            },
            resetSearch() {
                if (this.timeout) {
                    clearTimeout(this.timeout)
                    this.timeout = null
                }

                this.search = null
                this.teams = null
                this.selected = -1
            },
            keyUp(event) {
                switch (event.key) {
                    case 'Enter':
                        if (this.selected >= 0 && this.selected < this.teams.length) {
                            const team = this.teams[this.selected]
                            this.go(team)
                        }
                        break
                    case 'Escape':
                        this.resetSearch()
                        event.target.blur()
                        break
                    case 'ArrowDown':
                        event.preventDefault()
                        if (++this.selected >= this.teams.length) {
                            this.selected = -1
                        }

                        break
                    case 'ArrowUp':
                        event.preventDefault()
                        if (--this.selected < -1) {
                            this.selected = this.teams.length - 1
                        }

                        break
                }
            },
            queueSearch() {
                if (this.timeout) {
                    clearTimeout(this.timeout)
                }

                this.timeout = setTimeout(() => {
                    this.timeout = null
                    this.performSearch()
                }, 250)
            },
            performSearch() {
                if (!this.search.match(/\w/)) {
                    this.resetSearch()
                    return
                }

                client.getTeamsBySearch(this.search)
                    .then(teams => {
                        this.selected = -1
                        this.teams = teams.slice(0, 10)
                    }) //eslint-disable-line
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';

    div.th-search {
        position: relative;
    }

    input {
        font-family:   $font-body;
        font-size:     1.4em;
        border:        1px solid $border-color;
        padding:       $spacing-small;
        border-radius: $border-radius;
        width:         100%;

        :root .has-results & {
            border-bottom-color: transparent;
            border-bottom-left-radius:  0;
            border-bottom-right-radius: 0;
        }
    }

    div.results {
        transform: translateY(-1px);
        background-color:           white;
        position:                   absolute;
        z-index:                    1;
        width:                      100%;
        box-shadow:                 0px 4px 4px -2px rgba(black, 0.4);
        border:                     1px solid $border-color;
        border-top-width:           0;
        padding: 0 $spacing-small $spacing-small;
        border-bottom-left-radius:  $border-radius;
        border-bottom-right-radius: $border-radius;

        ul {
            border-top: 1px solid $border-color;
            padding-top: $spacing-small;
            margin:                     0;
            list-style: none;

            li {
                padding: 1px 0;
                cursor: pointer;

                &.is-selected {
                    background-color: $tertiary;
                    color: white;
                    padding-left: $spacing-small;
                    padding-right: $spacing-small;
                    margin: 0 calc(-1 * #{$spacing-small});

                    a {
                        color: white;
                    }
                }
            }
        }
    }
</style>