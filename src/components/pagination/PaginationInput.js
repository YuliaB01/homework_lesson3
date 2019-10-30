import React from 'react';
import T from 'prop-types';

export const PaginationInput = ({onChange, curPage, maxValue}) => (
    <input
        name="current-page"
        onChange={onChange}
        value={curPage}
        type="number"
        min="1"
        max={maxValue}
        className="pagination-current"
    />
);

PaginationInput.propTypes = {
    onChange: T.func.isRequired,
    curPage: T.number.isRequired,
    maxValue: T.number.isRequired
};