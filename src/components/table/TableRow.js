import React from 'react';
import T from 'prop-types';
import {Poster} from '../common/Poster';
import {seasonTypes} from '../../types/seasonType';

export const TableRow = ({data, children}) => {
    return (
        <tr>
            <td className="poster-cell">
                <Poster posterPath={data.poster_path || data.still_path}/>
            </td>
            <td>{children}</td>
        </tr>
    );
};

TableRow.propTypes = {
    season: T.shape({
        ...seasonTypes
    })
};