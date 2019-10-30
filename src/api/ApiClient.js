export const ApiClient = {
    apiKey: '9b9a6c97be18be80bb60acaad70949ea',
    baseUrl: 'https://api.themoviedb.org/3/tv/',

    fetchData: (url) => {
        return fetch(url);
    }
};