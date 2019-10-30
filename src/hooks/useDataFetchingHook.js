import React, { useState, useEffect } from "react";
import {ApiClient} from '../api/ApiClient';

const useDataFetching = (dataSource) => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");


    useEffect(() => {
        async function fetchData() {
            try {
                const data = await ApiClient.fetchData(dataSource);
                const json = await data.json();

                if (json) {
                    setResult(json);
                    setLoading(false);
                }
            } catch (error) {
                setError(error);
                setLoading(false);
            }

            setLoading(false);
        }

        fetchData();
    }, [dataSource]);

    return {
        error,
        loading,
        result
    };
};

export default useDataFetching;