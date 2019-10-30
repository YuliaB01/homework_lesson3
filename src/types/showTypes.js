import T from 'prop-types';

export const ShowTypes = {
    backdrop_path: T.string,
    first_air_date: T.string,
    genre_ids: T.arrayOf(T.number),
    id: T.number.isRequired,
    name: T.string.isRequired,
    origin_country: T.arrayOf(T.string),
    original_language: T.string,
    original_name: T.string,
    overview: T.string,
    popularity: T.number,
    poster_path: T.string,
    vote_average: T.number,
    vote_count: T.number
};