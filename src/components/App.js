import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export default class App extends Component {

    state = {
        videos: [],
        videoSelect: null
    }

    _onSearch = async search => {
        const videos = await youtube.get('/search', {
            params: {
                q: search
            }
        });

        this.setState({
            videos: videos.data.items,
            videoSelect: videos.data.items[0]
        })
    }

    _onVideoSelect = video => {
        this.setState({
            videoSelect: video
        })
    }

    render() {
        const { videos, videoSelect } = this.state;
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar submit={this._onSearch} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={videoSelect} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this._onVideoSelect} videos={videos} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
