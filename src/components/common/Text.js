import React from 'react';
import T from 'prop-types';

export const Text = ({size, children, ...props}) => (
    <div style={{fontSize: size, ...props}} className={props.className}>
        {children}
    </div>
);

Text.defaultProps = {
    size: '14px'
};

Text.propTypes = {
  size: T.string
};