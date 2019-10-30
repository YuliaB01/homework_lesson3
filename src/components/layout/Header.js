import React, {Fragment} from 'react';
import {Text} from '../common/Text';
import {NavLink} from 'react-router-dom';
import {ROUTES} from '../router/routes';
import {useLocation} from 'react-router-dom';

export const Header = () => {
    const {pathname} = useLocation();
    const pageNum = pathname.substr(pathname.lastIndexOf('/') + 1);

    return (
        <Fragment>
            <Text size='35px' className='header'>Welcome to TV Shows list</Text>
            <div id="navLinks" className="navLinks buttons has-addons">
                <NavLink to={ROUTES.POPULAR}
                         activeClassName='is-info'
                         className="button">
                    Popular
                </NavLink>
                <NavLink to={ROUTES.TOP} activeClassName='is-info' className="button">Top Rated</NavLink>
            </div>
        </Fragment>
    );
};