import React from 'react';
import {ShowList} from '../common/ShowList';
import {Loader} from '../common/loader';
import {useParams} from 'react-router-dom';
import useDataFetching from '../../hooks/useDataFetchingHook';
import {ApiUrls} from '../../api/apiUrls';

export const Popular = () => {
    const {pageNum} = useParams();

    const {loading, result, error} = useDataFetching(
        ApiUrls.fetchPopular(pageNum)
    );

    if (loading || error) {
        return loading ? <Loader/> : error.message;
    }

    return result && <ShowList pageInfo={result}/>;
};
