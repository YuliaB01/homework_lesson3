import React, {Fragment} from 'react';
import {useLocation, useParams, useRouteMatch} from 'react-router-dom'
import {Table} from '../table/Table';
import {Loader} from '../common/loader';
import {BackButton} from '../common/BackButton';
import {Description} from '../common/Description';
import useDataFetching from '../../hooks/useDataFetchingHook';
import {ApiUrls} from '../../api/apiUrls';

export const SingleShow = () => {
    const {showId} = useParams();

    const {url} = useRouteMatch();
    const {pathname} = useLocation();

    const { loading, result, error } = useDataFetching(
        ApiUrls.fetchShow(showId)
    );

    if (loading || error) {
        return loading ? <Loader/> : error.message;
    }

    return (
        <Fragment>
            <BackButton/>
            {pathname === url && <div>
                <Description data={result}>
                    <div className="details show-vote-average">
                        <span>Vote average: </span>
                        {result.vote_average}
                    </div>
                    <div className="details show-seasons-count">
                        <span>Seasons: </span>
                        {result.number_of_seasons}
                    </div>
                    <div className="details show-episodes-count">
                        <span>Episodes: </span>
                        {result.number_of_episodes}
                    </div>
                </Description>
                <div className="table-wrapper container">
                    <Table data={result.seasons} pageName={'season'}/>
                </div>
            </div>}
        </Fragment>
    );
};