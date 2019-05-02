import React from 'react'
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    console.log(videos);

    const rendered = videos.map((item, index) => {
        return <VideoItem onVideoSelect={onVideoSelect} video={item} key={index} />
    })

    return <div className="ui relaxed divided list">{rendered}</div>;
}

export default VideoList;