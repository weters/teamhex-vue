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

export function teamToPath(team) {
    const safeLeague = encodeURIComponent(team.league.toLocaleLowerCase())
    const safeTeam = encodeURIComponent(team.name.toLocaleLowerCase())

    return `/leagues/${safeLeague}/${safeTeam}`
}

export function toRGB(hex) {
    let red, green, blue
    if (hex.length === 4) {
        red = parseInt(hex[1] + hex[1], 16)
        green = parseInt(hex[2] + hex[2], 16)
        blue = parseInt(hex[3] + hex[3], 16)
    } else {
        red = parseInt(hex.substr(1, 2), 16)
        green = parseInt(hex.substr(3, 2), 16)
        blue = parseInt(hex.substr(5, 2), 16)
    }

    return `rgb(${red}, ${green}, ${blue})`
}