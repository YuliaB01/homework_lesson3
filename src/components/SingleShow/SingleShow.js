import React, {Fragment, useEffect, useState} from 'react';
import {useLocation, useParams, useRouteMatch} from 'react-router-dom'
import {ApiClient} from '../../api/ApiClient';
import {Table} from '../table/Table';
import {Loader} from '../common/loader';
import {BackButton} from '../common/BackButton';
import {Description} from '../common/Description';

export const SingleShow = () => {
    const [show, setShow] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const {showId} = useParams();

    const {url} = useRouteMatch();
    const {pathname} = useLocation();

    useEffect(() => {
        setIsLoading(true);

        ApiClient.fetchShow(showId).then(
            response => {
                setShow(response);
                setIsLoading(false);
            }
        );
    }, []);

    if (isLoading) {
        return <Loader/>
    }

    return (
        <Fragment>
            <BackButton/>
            {pathname === url && <div>
                <Description data={show}>
                    <div className="details show-vote-average">
                        <span>Vote average: </span>
                        {show.vote_average}
                    </div>
                    <div className="details show-seasons-count">
                        <span>Seasons: </span>
                        {show.number_of_seasons}
                    </div>
                    <div className="details show-episodes-count">
                        <span>Episodes: </span>
                        {show.number_of_episodes}
                    </div>
                </Description>
                <div className="table-wrapper container">
                    <Table data={show.seasons} pageName={'season'}/>
                </div>
            </div>}
        </Fragment>
    );
};