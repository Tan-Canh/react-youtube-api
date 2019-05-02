import React from 'react'
import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div  onClick={() => onVideoSelect(video) } className="video-item item">
            <img alt={video.snippet.title} className="ui rounded image" src={video.snippet.thumbnails.default.url} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
                <p className="text muted" style={{marginTop:  '8px'}}>{video.snippet.channelTitle}</p>
            </div>
        </div>
    )
}

export default VideoItem;