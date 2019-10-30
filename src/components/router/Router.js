import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {ROUTES} from './routes';
import {TopRouter} from './TopRouter';
import {PopularRouter} from './PopularRouter';

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={ROUTES.POPULAR}>
                    <PopularRouter/>
                </Route>
                <Route path={ROUTES.TOP}>
                    <TopRouter/>
                </Route>

                <Redirect exact from="/" to={`${ROUTES.POPULAR}/1`}/>
            </Switch>
        </BrowserRouter>
    );
};