import React, {useEffect, useState} from 'react';
import {ShowList} from '../common/ShowList';
import {ApiClient} from '../../api/ApiClient';
import {Loader} from '../common/loader';
import {useParams} from 'react-router-dom';

export const Popular = () => {
    const {pageNum} = useParams();

    const [showsState, setShowsState] = useState({
        data: {},
        isLoading: true
    });

    useEffect(() => {
        setShowsState({
            ...showsState,
            isLoading: true
        });

        ApiClient.fetch(pageNum, 'popular').then(response => {
            setShowsState({
                data: response,
                isLoading: false
            });
        });
    }, [pageNum]);

    if (showsState.isLoading) {
        return <Loader/>
    }

    return showsState.data && <ShowList pageInfo={showsState.data}/>;
};
