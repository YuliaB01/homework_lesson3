import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {ROUTES} from './routes';
import {TopRated} from '../Shows/TopRated';
import {SingleShow} from '../SingleShow/SingleShow';
import {Header} from '../layout/Header';
import {Season} from '../season/Season';

export const TopRouter = () => {
    const baseUrl = `${ROUTES.TOP}/:pageNum(\\d+)`;
    const showUrl = `${baseUrl}/show/:showId(\\d+)`;
    const seasonUrl = `${showUrl}/season/:seasonNum(\\d+)`;

    return (
        <Switch>
            <Route path={seasonUrl}>
                <Season/>
            </Route>
            <Route path={showUrl}>
                <SingleShow/>
            </Route>
            <Route path={baseUrl}>
                <Header/>
                <TopRated/>
            </Route>

            <Redirect exact from={ROUTES.TOP} to={`${ROUTES.TOP}/1`}/>
        </Switch>
    );
};