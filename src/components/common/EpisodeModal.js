import React from 'react';
import ReactDom from 'react-dom';
import {useParams} from 'react-router-dom';
import {Loader} from './loader';
import {Description} from './Description';
import T from 'prop-types';
import useDataFetching from '../../hooks/useDataFetchingHook';
import {ApiUrls} from '../../api/apiUrls';

export const EpisodeModal = ({episodeNum, onClose}) => {
    const modalRoot = document.getElementById('modal-root');

    const {showId, seasonNum} = useParams();

    const {loading, result, error} = useDataFetching(
        ApiUrls.fetchEpisode(showId, seasonNum, episodeNum)
    );

    if (loading || error) {
        return loading ? <Loader/> : error.message;
    }

    return result && ReactDom.createPortal(
        <div id='modal' className='modal episode-modal is-active'>
            <div className='modal-background'/>
            <div id='modal-content' className='modal-content'>
                <div id='box' className='box'>
                    <Description data={result} className='modal-desc'>
                        <div className='season-num'>
                            <span className='is-bold'>Season: </span>
                            <span>{result.season_number}</span>
                        </div>
                        <div className='episode-num'>
                            <span className='is-bold'>Episode: </span>
                            <span>{result.episode_number}</span>
                        </div>
                    </Description>
                </div>
            </div>
            <button id='modal-close-btn'
                    className='modal-close is-large'
                    aria-label='close'
                    onClick={onClose}
            />
        </div>,
        modalRoot
    );
};

EpisodeModal.propTypes = {
    episodeNum: T.number.isRequired,
    onClose: T.func.isRequired
};