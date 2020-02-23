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
    <div class="th-team">
        <h2>{{ team.name }}</h2>

        <div class="eras">
            <div class="era" v-for="era in team.eras" :key="era.year">
                <h3>{{ era.year }}</h3>

                <div class="colors">
                    <th-swatch :swatch="swatch" v-for="swatch in era.colors" :key="swatch.name" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ThSwatch from "@/components/ThSwatch";
    export default {
        name: "ThTeam",
        components: {ThSwatch},
        props: {
            team: {
                type: Object,
                required: true,
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../variables';

    .th-team {
        margin-bottom: $spacing;
    }

    .era {
        margin-bottom: $spacing;

        &:last-child {
            margin-bottom: 0;
        }

        .colors {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            grid-gap: $spacing;
        }
    }
</style>