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
    <div class="th-footer">
        <p>&copy; 2020 <a href="https://taproom.us/">Tom Peters</a></p>
    </div>
</template>

<script>
    export default {
        name: "ThFooter",
    }
</script>

<style lang="scss" scoped>
    @import "../variables";
    .th-footer {
        margin-top: 75px;
        font-size: 0.8em;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: $spacing;
    }
</style>