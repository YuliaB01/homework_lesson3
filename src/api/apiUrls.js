import {ApiClient} from './ApiClient';

export const ApiUrls = {
    fetchPopular: (page) => {
        return ApiClient.baseUrl + 'popular?api_key=' + ApiClient.apiKey + '&page=' + page;
    },
    fetchTopRated: (page) => {
        return ApiClient.baseUrl + 'top_rated?api_key=' + ApiClient.apiKey + '&page=' + page;
    },
    fetchShow: (showId) => {
        return ApiClient.baseUrl + showId + '?api_key=' + ApiClient.apiKey;
    },
    fetchSeason: (showId, seasonNum) => {
        return ApiClient.baseUrl + showId + '/season/' + seasonNum + '?language=en-US&api_key=' + ApiClient.apiKey;
    },
    fetchEpisode: (showId, seasonNum, episodeNum) => {
        return ApiClient.baseUrl + showId + '/season/' + seasonNum + '/episode/' + episodeNum + '?language=en-US&api_key=' + ApiClient.apiKey;
    }
};