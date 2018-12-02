import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

export class Lyrics extends Component {
    state = {
        track: {},
        lyrics: {}
    }

    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                this.setState({ lyrics: res.data.message.body.lyrics });

                return axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
                    .then(res => {
                        this.setState({ track: res.data.message.body.track });
                    })
            })
            .catch(error => console.log(error))
    }
    render() {
        const { track, lyrics } = this.state;
        // console.log(lyrics);

        if (track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0) {

            return <Spinner />

        } else {
            return (
                <React.Fragment>
                    <Link to="/" className="btn btn-dark btn-sm mb-4"><i className="fas fa-long-arrow-alt-left" /> Go Back</Link>
                    <div className="card">
                        <h5 className="card-header">
                            {track.track_name} - <i><span className="text-secondary lead">{track.artist_name}</span></i>
                        </h5>
                        <div className="card-body">
                            <p className="card-text">{lyrics.lyrics_body}</p>
                        </div>
                    </div>

                    <ul className="list-group mt-3">
                        <li className="list-group-item">
                            <strong>Album: </strong>{track.album_name}
                        </li>
                        <li className="list-group-item">
                            <strong>Genre: </strong>{track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
                        </li>
                        <li className="list-group-item">
                            <strong>Explicit Words: </strong>{track.explicit === 0 ? 'No' : 'Yes'}
                        </li>
                        <li className="list-group-item">
                            <strong>Release Date: </strong><Moment format="MM/DD/YYYY">
                                {track.first_release_date}
                            </Moment>
                        </li>
                        <li className="list-group-item">
                            <strong>Language: </strong>{lyrics.lyrics_language_description}

                        </li>
                    </ul>
                </React.Fragment>
            )
        }


    }
}

export default Lyrics;
