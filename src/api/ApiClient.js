export const ApiClient = {
    apiKey: '=== PASTE YOUR API KEY HERE ===',
    baseUrl: 'https://api.themoviedb.org/3/tv/',

    fetchData: (url) => {
      return fetch(url);
    }
};