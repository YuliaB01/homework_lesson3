import React from 'react';
import {useHistory} from 'react-router-dom';

export const BackButton = () => {
    const history = useHistory();

    return (
        <nav className="back-btn" id="back-btn" style={{display: 'flex'}}>
            <button type='button'
                    onClick={() => history.goBack()}
                    id="back-btn-link"
                    className="back-link">
                ← Back
            </button>
        </nav>
    );
};