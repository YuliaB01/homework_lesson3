import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {ROUTES} from './routes';
import {Popular} from '../Shows/Popular';
import {SingleShow} from '../SingleShow/SingleShow';
import {Header} from '../layout/Header';
import {Season} from '../season/Season';

export const PopularRouter = () => {
    const baseUrl = `${ROUTES.POPULAR}/:pageNum(\\d+)`;
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
                <Popular/>
            </Route>

            <Redirect exact from={ROUTES.POPULAR} to={`${ROUTES.POPULAR}/1`}/>
        </Switch>
    );
};