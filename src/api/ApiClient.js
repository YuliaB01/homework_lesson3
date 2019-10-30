export const ApiClient = {
    apiKey: '=== PASTE YOUR API KEY HERE ===',
    baseUrl: 'https://api.themoviedb.org/3/tv/',
    fetch: (page, entity) => {
        return fetch(ApiClient.baseUrl + entity + '?api_key=' + ApiClient.apiKey + '&page=' + page)
            .then((response) => {
                   return ApiClient.processSuccess(response);
                }
            ).catch((err) => {
                return ApiClient.processFail(err);
            });
    },

    fetchShow: (showId) => {
        return fetch(ApiClient.baseUrl + showId + '?api_key=' + ApiClient.apiKey)
            .then((response) => {
                    return ApiClient.processSuccess(response);
                }
            ).catch((err) => {
                return ApiClient.processFail(err);
            });
    },

    fetchSeason: (showId, seasonNum) => {
        return fetch(ApiClient.baseUrl + showId + '/season/' + seasonNum + '?language=en-US&api_key=' + ApiClient.apiKey)
            .then((response) => {
                    return ApiClient.processSuccess(response);
                }
            ).catch((err) => {
                return ApiClient.processFail(err);
            });
    },

    fetchEpisode: (showId, seasonNum, episodeNum) => {
        return fetch(ApiClient.baseUrl + showId + '/season/' + seasonNum + '/episode/' + episodeNum + '?language=en-US&api_key=' + ApiClient.apiKey)
            .then((response) => {
                    return ApiClient.processSuccess(response);
                }
            ).catch((err) => {
                return ApiClient.processFail(err);
            });
    },

    processSuccess: (response) => {
        if (response.status !== 200) {
            throw new Error('Looks like there was a problem. Status Code: ' +
                response.status);
        }

        return response.json().then((data) => {
            return data;
        });
    },

    processFail: (error) => {
        throw new Error(error);
    }
};