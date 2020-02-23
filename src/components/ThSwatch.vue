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
    <div class="th-swatch">
        <div class="color-swatch">
            <span :style="`background-color: ${hex};`">&nbsp;</span>
        </div>
        <div class="metadata">
            <p class="name"><strong>{{ swatch.name }}</strong></p>
            <p class="hex"><a href="#" @click.prevent="copy">{{ hex }}</a></p>
            <p class="rgb"><a href="#" @click.prevent="copy">{{ rgb }}</a></p>
        </div>
    </div>
</template>

<script>
    import {toRGB} from "@/util";
    import bus from "@/bus";

    export default {
        name: "ThSwatch",
        props: {
            swatch: {
                type: Object,
                required: true,
            }
        },
        computed: {
            hex() {
                return this.swatch.hex.toUpperCase()
            },
            rgb() {
                return toRGB(this.swatch.hex)
            }
        },
        methods: {
            copy(event) {
                const input = document.body.appendChild(document.createElement('input'))
                input.style.position = 'fixed'
                input.style.top = '0'
                input.style.left = '0'
                input.value = event.target.textContent
                input.select()
                input.setSelectionRange(0, input.value.length)
                document.execCommand('copy')
                input.remove()
                bus.$emit('banner', `Copied ${event.target.textContent}`)
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '../variables';
    .th-swatch {
        border: 1px solid $border-color;
        border-radius: $border-radius;
        padding: $spacing-small;

        .color-swatch {
            border: 1px solid $border-color;
            display: block;
            width: 100%;
            height: 60px;
            padding: 2px;
            border-radius: $border-radius;

            span {
                width: 100%;
                height: 100%;
                display: block;
            }
        }

        p {
            margin: 0;
        }
    }
</style>