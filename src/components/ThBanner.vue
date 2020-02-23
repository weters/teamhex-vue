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
    <transition name="slide">
        <div class="th-banner" v-if="message">
            <p>{{ message }}</p>
        </div>
    </transition>
</template>

<script>
    import bus from "@/bus";

    export default {
        name: "ThBanner",
        data() {
            return {
                message: null,
            }
        },
        mounted() {
            bus.$on('banner', msg => {
                this.message = msg
                if (this.timeout) {
                    clearTimeout(this.timeout)
                }

                this.timeout = setTimeout(() => {
                    this.message = null
                }, 2000)
            })
        },
    }
</script>

<style lang="scss" scoped>
    @import '../variables';

    .slide-enter {
        transform: translateX(100%);
    }

    .slide-leave-to {
        opacity: 0;
    }

    .slide-enter-active, .slide-leave-active {
        transition: all 200ms ease-out;
    }

    .th-banner {
        position:         fixed;
        top:              $spacing-small;
        right:            $spacing-small;
        box-shadow: 4px 4px 4px rgba(black, 0.4);
        background-color: $tertiary;
        color: white;
        border-radius:    $border-radius;
        padding:          $spacing;

        p {
            margin: 0
        }
    }
</style>