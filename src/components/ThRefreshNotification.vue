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
        background-color:        rgba($primary, 0.8);
        color:                   white;
        position:                fixed;
        bottom:                  0;
        left:                    $spacing;
        right:                   $spacing;
        padding:                 $spacing;
        text-align:              center;
        border-top-left-radius:  $border-radius;
        border-top-right-radius: $border-radius;
    }

    .appear-enter-active {
        transition: all 250ms;
    }

    .appear-enter {
        transform: translateY(100%);
    }
</style>