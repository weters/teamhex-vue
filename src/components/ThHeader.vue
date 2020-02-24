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
    <div class="th-header">
        <router-link to="/">
            <img src="../assets/Logo@2x.png" alt="Team Hex"
                 srcset="../assets/Logo.png,
                         ../assets/Logo@2x.png 2x,
                         ../assets/Logo@3x.png 3x"/>
        </router-link>

        <nav>
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/about">About</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "ThHeader"
    }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';

    div.th-header {
        background-color: $primary;
        color:            white;
        height:           100px;
        position:         relative;

        img {
            width:     167px;
            height:    50px;
            display:   block;
            transform: translateY(25px);
        }

        nav {
            position: absolute;
            bottom:   $spacing-small;
            right:    $spacing;

            ul {
                list-style: none;
                margin:     0;

                li {
                    display:     inline-block;
                    margin-left: $spacing-small;

                    &:first-child {
                        margin-left: 0;
                    }

                    a {
                        color:           white;
                        text-decoration: none;

                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }
</style>