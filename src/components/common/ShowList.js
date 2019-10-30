import React, {Fragment} from 'react';
import T from 'prop-types';
import {ShowItem} from './ShowItem';
import {Pagination} from '../pagination/Pagination';
import {ShowTypes} from '../../types/showTypes';

export const ShowList = ({pageInfo}) => {
    return (
        <Fragment>
            <div className='container table-wrapper'>
                <table className='table is-hoverable is-bordered is-striped is-narrow is-fullwidth'>
                    {pageInfo.page && <tbody>
                    {pageInfo.results.map(show =>
                        show && <ShowItem {...{show}} key={show.id}/>
                    )}
                    </tbody>}
                </table>
            </div>
            <Pagination {...{pageInfo}}/>
        </Fragment>
    );
};

ShowList.propTypes = {
    pageInfo: T.shape({
        page: T.number.isRequired,
        results: T.arrayOf(T.shape({...ShowTypes})).isRequired,
        total_pages: T.number.isRequired,
        total_results: T.number.isRequired
    }).isRequired
};