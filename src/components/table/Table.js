import React from 'react';
import T from 'prop-types';
import {TableRow} from './TableRow';
import {ShowTypes} from '../../types/showTypes';
import {Link, useRouteMatch} from 'react-router-dom';

export const Table = ({data, pageName, onClick}) => {
    const {url} = useRouteMatch();

    const formLinkUrl = (item) => {
        switch (pageName) {
            case 'shows':
                return `${url}/show/${item.id}`;
            case 'season':
                return `${url}/season/${item.season_number}`;
            case 'episode':
                return `${url}/episode/${item.episode_number}`;
            default:
                return `${url}/show/${item.id}`;
        }
    };

    return data && (
        <table className="table is-hoverable is-bordered is-striped is-narrow is-fullwidth">
            <tbody>
            {data.map(item =>
                <TableRow key={item.id} data={item}>
                    <Link className="season-name"
                          onClick={onClick}
                          to={formLinkUrl(item)}>
                        {item.name}
                    </Link>
                </TableRow>
            )}
            </tbody>
        </table>
    );
};

Table.propTypes = {
    data: T.arrayOf(T.shape({...ShowTypes}))
};