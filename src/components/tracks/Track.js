import React from 'react';
import { Link } from 'react-router-dom';

const Track = ({ track, index }) => {
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body d-flex">
                    <span className="lead d-block mr-3">{index + 1} </span>
                    <div>
                        <img className="img-thumbnail" src={track.album_coverart_100x100} alt="Cover" />
                    </div>
                    <div className="ml-4">
                        <h5>{track.track_name}</h5>
                        <p className="card-text">
                            <strong><i className="far fa-play-circle" /> Artist: </strong> {track.artist_name}
                            <br />
                            <strong><i className="fas fa-compact-disc" /> Album: </strong> {track.album_name}
                        </p>
                        <Link to={`lyrics/${track.track_id}`} className="btn btn-dark">
                            <i className="fas fa-chevron-right" /> View Lyrics
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Track;