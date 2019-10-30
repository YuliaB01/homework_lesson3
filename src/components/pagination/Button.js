import React from 'react';
import T from 'prop-types';
import {Link} from 'react-router-dom';

export const PaginationButton = ({link, className, disabled, children}) => (
    <Link
        to={link}
        {...{className}}
        {...{disabled}}
    >
        {children}
    </Link>
);

PaginationButton.propTypes = {
    link: T.string.isRequired,
    className: T.string.isRequired,
    disabled: T.bool.isRequired,
    children: T.oneOfType([T.string, T.node]).isRequired
};