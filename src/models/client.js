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

const baseURL = process.env.VUE_APP_API_URL

class Client {
    getAllTeams() {
        return this._fetch('/teams')
    }

    getTeamsBySearch(search) {
        return this._fetch(`/teams?search=${encodeURIComponent(search)}`)
    }

    getLeagues() {
        return this._fetch(`/leagues`)
    }

    getTeamsByLeague(league) {
        return (
            this._fetch(`/leagues/${encodeURIComponent(league)}`)
                .then(teams => {
                    const divisions = {}
                    teams.forEach(team => {
                        const division = team.division || ''
                        if (!divisions[division]) {
                            divisions[division] = []
                        }

                        divisions[division].push(team)
                    })

                    const divisionNames = Object.keys(divisions)
                    divisionNames.sort()

                    return divisionNames.map(name => ({
                        name,
                        teams: divisions[name]
                    }))
                })
        )
    }

    getTeamByLeagueAndName(league, name) {
        return this._fetch(`/leagues/${encodeURIComponent(league)}/${encodeURIComponent(name)}`)
    }

    getGenerationDate() {
        return (
            this._fetch(`/`)
                .then(res => res.generationDate)
        )
    }

    _fetch(path, init) {
        return fetch(`${baseURL}${path}`, init)
            .then(async res => {
                if (res.status >= 400) {
                    const body = await res.json()
                    throw new Error(body.message)
                }

                return res.json()
            })
    }
}

export default new Client()