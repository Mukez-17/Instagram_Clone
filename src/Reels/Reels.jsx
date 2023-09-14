import React, { useState } from 'react';
import VideoCard from './VideoCard';
import ReelsData from './ReelsData';
import { Row } from 'react-bootstrap';
import Sidenav from '../Navbar/Sidenav';
import './Reels.css';

const Reels = () => {

    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = (video) => {
        if(video){
            video.muted=!isMuted;
            setIsMuted(!isMuted);
        }
    }

  return (
    <Row style={{margin:'0'}}>
        <div className="col-lg-3" style={{padding:'0', backgroundColor:'black'}}><Sidenav /></div>
        <div className='col-lg-9' style={{padding:'0', width:'75%'}}>
            <div className="app">
                <div className="app_Videos">
                    {ReelsData.map((item) => (
                        <div key={item.id}>
                            <VideoCard
                                userid = {item.userid}
                                AvatarSrc = {item.AvatarSrc}
                                song = {item.song}
                                reelsrc = {item.reelSrc}
                                likes={item.likes}
                                comments={item.comments}
                                shares={item.shares}
                                isMuted={isMuted}
                                toggleMute={toggleMute}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Row>
  )
}

export default Reels;