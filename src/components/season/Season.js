import React, {Fragment, useState} from 'react';
import {Link, useHistory, useParams, useRouteMatch} from 'react-router-dom';
import {Loader} from '../common/loader';
import {EpisodeModal} from '../common/EpisodeModal';
import {BackButton} from '../common/BackButton';
import {Poster} from '../common/Poster';
import {Description} from '../common/Description';
import useDataFetching from '../../hooks/useDataFetchingHook';
import {ApiUrls} from '../../api/apiUrls';

export const Season = () => {
    const [showModal, setShowModal] = useState(false);
    const [episodeNum, setEpisodeNum] = useState(0);

    const history = useHistory();

    const {showId, seasonNum} = useParams();
    const {url} = useRouteMatch();

    const { loading, result, error } = useDataFetching(
        ApiUrls.fetchSeason(showId, seasonNum)
    );

    if (loading || error) {
        return loading ? <Loader/> : error.message;
    }

    const handleShowMessageClick = () => setShowModal(true);
    const handleCloseModal = () => {
        history.goBack();
        setShowModal(false);
    };

    const onClick = (event) => {
        setEpisodeNum(event.target.dataset.episodeNum);
        handleShowMessageClick();
    };

    return result && (
        <Fragment>
            <BackButton/>
            <Description data={result}>
                <div className="details show-seasons-count">
                    <span>Season number: </span>{result.season_number}
                </div>
                <div className="details show-episodes-count">
                    <span>Season episodes: </span>
                    {result.episodes.length}
                </div>
            </Description>
            <div className="table-wrapper container">
                <table className="table is-hoverable is-bordered is-striped is-narrow is-fullwidth">
                    <tbody>
                    {result.episodes.map(episode =>
                        <tr key={episode.id}>
                            <td className="poster-cell">
                                <Poster posterPath={episode.still_path} className='season-table-poster'/>
                            </td>
                            <td>
                                <Link className="episode-name"
                                      onClick={onClick}
                                      to={`${url}/episode/${episode.episode_number}`}
                                      data-episode-num={episode.episode_number}>
                                    {episode.name}
                                </Link>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

            {showModal ? (
                <EpisodeModal onClose={handleCloseModal} episodeNum={+episodeNum}/>
            ) : null}
        </Fragment>
    );
};