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
    <span class="th-loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </span>
</template>

<script>
    export default {
        name: "ThLoading"
    }
</script>

<style lang="scss" scoped>
    @import '../variables';

    .th-loading {
        span {
            display:          inline-block;
            background-color: $secondary;
            height:           20px;
            width:            5px;
            margin-right:     5px;
            animation:        infinite 1400ms bounce;

            &:nth-child(2) { animation-delay: 100ms; }

            &:nth-child(3) { animation-delay: 250ms; }

            &:nth-child(4) { animation-delay: 400ms; }

            &:nth-child(5) { animation-delay: 550ms; }
        }
    }

    @keyframes bounce {
        0%, 60% {
            transform: translateY(0);
        }
        30% {
            transform: translateY(-25%);
        }
    }
</style>