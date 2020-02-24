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
    <div class="th-about">
        <h2>About</h2>

        <div class="columns">
            <div>
                <p><strong>Team Hex</strong> was created to provide an easy, programmatic way to obtain the hex and RGB
                    colors used by professional and collegiate sports teams. There are couple other online sites that
                    contain this information, but it's in a format that is easily consumed, or the information is out of
                    date.</p>

                <p>You can find the colors of your favorite sports teams either by using this fast, beautiful website,
                    or
                    you can access it programmatically using an intuitive <a href="https://petstore.swagger.io/?url=https://api.teamhex.dev/swagger.json">API</a>.
                </p>

                <p>If you have some programming chops and would like to help out, this project is open-sourced under the
                    <a
                            href="https://www.apache.org/licenses/LICENSE-2.0">Apache</a> license. The two code
                    repositories
                    are:</p>

                <ul>
                    <li><a href="https://github.com/weters/teamhex-vue">github.com/weters/teamhex-vue</a> - The Vue
                        frontend
                    </li>
                    <li><a href="https://github.com/weters/teamhex">github.com/weters/teamhex</a> - The Go backend</li>
                </ul>
            </div>
            <div>
                <h3>Version Information</h3>

                <table>
                    <tbody>
                    <tr>
                        <th>Site</th>
                        <td><a href="https://github.com/weters/teamhex-vue">{{siteVersion}}</a></td>
                    </tr>
                    <tr>
                        <th>API</th>
                        <td><a href="https://github.com/weters/teamhex">{{apiVersion}}</a></td>
                    </tr>
                    <tr>
                        <th>Color Data</th>
                        <td><a href="https://github.com/weters/teamhex/blob/master/configs/teamhex.json">{{colorData}}</a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import client from "@/models/client";

    export default {
        name: "ThAbout",
        data() {
            return {
                siteVersion: process.env.VUE_APP_VERSION || 'v0.0.0',
                apiVersion: null,
                colorData: null,
            }
        },
        mounted() {
            client.getRoot()
            .then(res => {
                this.apiVersion = res.version
                this.colorData = new Date(res.generationDate).toLocaleDateString()
            })
            .catch(() => {}) // no-op
        }
    }
</script>

<style lang="scss" scoped>
    @import '../variables';
    .columns {
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-gap: $spacing;

        @media (max-width: $mobile-width) {
            display: block;
        }
    }
    table {
        border-collapse: collapse;
        th, td {
            border: 1px solid $border-color;
            padding: 0 $spacing-small;
        }
        th {
            text-align: left;
        }
    }
</style>