import React, {useState, useEffect, Fragment} from 'react';
import {Link, useParams, useRouteMatch, useHistory} from 'react-router-dom';
import {ApiClient} from '../../api/ApiClient';
import {Loader} from '../common/loader';
import {EpisodeModal} from '../common/EpisodeModal';
import {BackButton} from '../common/BackButton';
import {Poster} from '../common/Poster';
import {Description} from '../common/Description';

export const Season = () => {
    const [season, setSeason] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [episodeNum, setEpisodeNum] = useState(0);
    const history = useHistory();

    const handleShowMessageClick = () => setShowModal(true);
    const handleCloseModal = () => {
        history.goBack();
        setShowModal(false);
    };

    const {showId, seasonNum} = useParams();
    const {url} = useRouteMatch();

    useEffect(() => {
        setIsLoading(true);

        ApiClient.fetchSeason(showId, seasonNum)
            .then(response => {
                setSeason(response);
                setIsLoading(false);
            });
    }, []);

    const onClick = (event) => {
        setEpisodeNum(event.target.dataset.episodeNum);
        handleShowMessageClick();
    };

    if (isLoading) {
        return <Loader/>
    }

    return season && (
        <Fragment>
            <BackButton/>
            <Description data={season}>
                <div className="details show-seasons-count">
                    <span>Season number: </span>{season.season_number}
                </div>
                <div className="details show-episodes-count">
                    <span>Season episodes: </span>
                    {season.episodes.length}
                </div>
            </Description>
            <div className="table-wrapper container">
                <table className="table is-hoverable is-bordered is-striped is-narrow is-fullwidth">
                    <tbody>
                    {season.episodes.map(episode =>
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