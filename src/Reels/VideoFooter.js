import React from 'react';
import { Avatar} from '@mui/material';
import './VideoFooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({ userid, AvatarSrc, song }) {
  return (
    <div className='VideoFooter'>
        <div className="videoFooter_Text">
            <Avatar src={AvatarSrc} style={{width:'30px', height:'30px'}} />
            <h6>{userid} . <button>Follow</button></h6>
        </div>
            <div className="marquee-w">
              <MusicNoteIcon className='videoFooter_icon' style={{position:'absolute', margin:'57px 0 0 50px'}} />
              <div className="marquee">
                <h1>{song}</h1>
              </div>
            </div>
    </div>
  )
}

export default VideoFooter;