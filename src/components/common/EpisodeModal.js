import React, {useEffect, useState} from 'react';
import ReactDom from 'react-dom';
import {useParams} from 'react-router-dom';
import {ApiClient} from '../../api/ApiClient';
import {Loader} from './loader';
import {Description} from './Description';
import T from 'prop-types';

const modalRoot = document.getElementById('modal-root');

export const EpisodeModal = ({episodeNum, onClose}) => {
    const [episode, setEpisode] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const {showId, seasonNum} = useParams();

    useEffect(() => {
        setIsLoading(true);

        ApiClient.fetchEpisode(showId, seasonNum, episodeNum)
            .then(response => {
                setEpisode(response);
                setIsLoading(false);
            })
    }, []);

    if (isLoading) {
        return <Loader/>;
    }

    return episode && ReactDom.createPortal(
        <div id='modal' className='modal episode-modal is-active'>
            <div className='modal-background'/>
            <div id='modal-content' className='modal-content'>
                <div id='box' className='box'>
                    <Description data={episode} className='modal-desc'>
                        <div className='season-num'>
                            <span className='is-bold'>Season: </span>
                            <span>{episode.season_number}</span>
                        </div>
                        <div className='episode-num'>
                            <span className='is-bold'>Episode: </span>
                            <span>{episode.episode_number}</span>
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