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
    <transition appear name="appear">
        <div class="th-refresh-notification">
            <p>An update is available.</p>

            <button type="button" @click="$emit('refresh')">Refresh</button>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "ThRefreshNotification",
    }
</script>

<style lang="scss" scoped>
    @import '../variables';

    .th-refresh-notification {
        background-color:        white;
        border: 1px solid $border-color;
        color: $text-color;
        position:                fixed;
        bottom: $spacing;
        right:                   $spacing;
        padding:                 $spacing;
        text-align:              center;
        border-top-left-radius:  $border-radius;
        border-top-right-radius: $border-radius;
        min-width: 200px;
        box-shadow: 0 0 4px rgba(black, 0.1), 2px 4px 4px rgba(black, 0.3);

        button {
            color: white;
        }
    }

    .appear-enter-active {
        transition: all 400ms;
    }

    .appear-enter {
        opacity: 0;
        transform: translateX(100%);
    }
</style>