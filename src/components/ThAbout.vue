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

        <p>TeamHex was created to provide an easy, programmatic way to obtain the hex and RGB colors used by professional and collegiate sports teams. There are couple other online sites that contain this information, but not in a format that is easily consumed.</p>

        <p>There are two ways to use this service: the web application (what you're looking at), or the <a href="https://api.teamhex.dev/">RESTful API</a>.</p>

        <p>This project is open-sourced under the <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache</a> license.</p>

        <ul>
            <li><a href="https://github.com/weters/teamhex">github.com/weters/teamhex</a> - The Go backend</li>
            <li><a href="https://github.com/weters/teamhex-vue">github.com/weters/teamhex-vue</a> - The Vue frontend</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ThAbout"
    }
</script>

<style scoped>

</style>