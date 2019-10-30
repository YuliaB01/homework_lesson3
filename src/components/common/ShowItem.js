import React from 'react';
import T from 'prop-types';
import {ShowTypes} from '../../types/showTypes';
import {Link, useRouteMatch} from 'react-router-dom';
import {Poster} from './Poster';

export const ShowItem = ({show}) => {
    const {url} = useRouteMatch();

    return (
        <tr>
            <td className="poster-cell">
                <Poster posterPath={show.poster_path} className='show-poster'/>
            </td>
            <td>
                <Link className="show-name" to={`${url}/show/${show.id}`}>{show.name}</Link>
                <div className="show-rate">Average rate: {show.vote_average}</div>
                <div className="show-votes-count">Votes count: {show.vote_count}</div>
            </td>
        </tr>
    );
};

ShowItem.propTypes = {
    show: T.shape({
        ...ShowTypes
    })
};