import React from 'react';
import T from 'prop-types';

export const Poster = ({posterPath, className}) => (
    <div {...{className}}>
        <img alt='poster' src={posterPath
            ? 'https://image.tmdb.org/t/p/w200' + posterPath
            : '/images/no-image.png'}
        />
    </div>
);

Poster.propTypes = {
    posterPath: T.string,
    className: T.string
};