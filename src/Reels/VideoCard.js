import React, { useEffect, useRef, useState } from 'react';
import './VideoCard.css';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';

function VideoCard({song, likes, shares, userid, AvatarSrc, reelsrc, comments, isMuted, toggleMute }) {

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if(isVideoPlaying){
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
    else{
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  }

  useEffect(() => {
    
    const delay = 100;

    const timeoutId = setTimeout(() => {
      setIsVideoLoaded(true);
    }, delay);

    const video = videoRef.current;

    const options = {
      root : null,
      rootMargin : '0px',
      threshold: 0.5
    };
  
    const handleIntersection = (enteries) => {
      enteries.forEach((entry) => {
        if(entry.isIntersecting){
          video.play();
        }
        else{
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if(video) observer.observe(video);

    return () => {
      if(video) observer.unobserve(video);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className='VideoCard'>
      <VideoHeader 
        isMuted={isMuted} 
        toggleMute={toggleMute} 
        likes={likes}
        comments={comments}
        shares={shares}
        AvatarSrc={AvatarSrc}
        videoRef={videoRef}
      />
      {isVideoLoaded ? (
        <video
        ref={videoRef}
        onClick={onVideoPress}
        className='VideoCard_Videos'
        src={reelsrc}
        loop
        autoPlay
        muted={isMuted}
        preload='auto'
      />
      ) : (
        <p>Loading Video....</p>
      )}
      
      <VideoFooter 
        userid={userid}
        AvatarSrc={AvatarSrc}
        song={song}
      />
    </div>
  )
}

export default VideoCard