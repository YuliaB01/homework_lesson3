import React, {useState, useEffect} from 'react';
import {ApiClient} from '../../api/ApiClient';
import {ShowList} from '../common/ShowList';
import {Loader} from '../common/loader';
import {useParams} from 'react-router-dom';

export const TopRated  = () => {
    const { pageNum } = useParams();

    const [showsState, setShowsState] = useState({
        data: {},
        isLoading: true
    });

    useEffect(() => {
        setShowsState({
            ...showsState,
            isLoading: true
        });

        ApiClient.fetch(pageNum, 'top_rated').then(response => {
            setShowsState({
                data: response,
                isLoading: false
            });
        });
    }, [pageNum]);

    if (showsState.isLoading) {
        return <Loader/>;
    }

    return showsState.data && (
        <ShowList pageInfo={showsState.data}/>
    );
};