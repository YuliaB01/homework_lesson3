import React from 'react';
import T from 'prop-types';
import {Poster} from './Poster';
import {Text} from './Text';

export const Description = ({data, className, children}) => {
    return (
        <article id="top-container" className={`top-container media ${className}`}>
            <figure className="poster-container media-left">
                <Poster posterPath={data.poster_path || data.still_path} className='image'/>
            </figure>
            <div className="details-container media-content">
                <div className="content">
                    <Text size='22px' fontWeight='600' className='name'>{data.name}</Text>
                    {children}
                    <div className="details show-description">
                        <span>Overview: </span>
                        {data.overview || 'No overview found.'}
                    </div>
                </div>
            </div>
        </article>
    );
};

Description.propTypes = {
    data: T.object.isRequired,
    className: T.string,
    children: T.oneOfType([T.string, T.node])
};