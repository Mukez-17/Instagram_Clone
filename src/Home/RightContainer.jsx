import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { main, Suggested } from './RightSideData';

const Suggestion = ({ Avatarsrc, userid, followed, key }) => {

    const [isFollow, setIsFollow] = useState(true);

    return(
        <>
            <Avatar src={Avatarsrc} style={{position:'absolute', width:'48px', height:'48px', padding:'0'}} />
            <h6 
                style={{
                    fontWeight:'600', 
                    margin:'0 0 0 45px'
                }}
            >
                {userid}
            </h6>
            <span 
                style={{
                    fontWeight:'400', 
                    margin:'0 0 0 45px', 
                    color:'rgba(168, 168, 168)', 
                    width:'auto',
                    fontSize:'12px'
                }}
            >
                {followed}
            </span>
            <span 
                style={{
                    fontWeight:'400', 
                    margin:'0 0 0 45px', 
                    position:'absolute',
                    right:'90px', 
                    color:'blue',
                    width:'auto'
                }}
            >
                <Button 
                    style={{
                        backgroundColor:'transparent', 
                        borderColor:'transparent', 
                        padding:'0',
                        color: isFollow ? 'blue' : 'red'
                    }} 
                    onClick={() => {setIsFollow(!isFollow)}}
                >
                    {isFollow ? 'Follow' : 'Unfollow'}
                </Button>
            </span>
        </>
    );
}

function RightContainer() {
  return (
    <>
        <Row style={{width:'300px', margin:'0'}}>
            <Avatar src={main.Avatarsrc} style={{position:'absolute', width:'48px', height:'48px', padding:'0'}} />
            <h6 
                style={{
                    fontWeight:'600', 
                    margin:'0 0 0 45px'
                }}
            >
                {main.userid}
            </h6>
            <span 
                style={{
                    fontWeight:'400', 
                    margin:'0 0 0 45px', 
                    color:'rgba(168, 168, 168)',
                    width:'auto'
                }}
            >
                {main.name}
            </span>
            <span 
                style={{
                    fontWeight:'400', 
                    margin:'0 0 0 53px', 
                    position:'relative', 
                    right:'-70px', 
                    bottom:'15px', 
                    color:'blue',
                    width:'auto'
                }}
            >
                Switch
            </span>
        </Row>
        <Row style={{width:'300px', margin:'20px 0 10px'}}>
            <span style={{fontSize:'14px', fontWeight:'700', color:'rgba(168, 168, 168)', width:'auto'}}>Suggested for you</span>
            <span style={{position:'relative', right:'-85px', fontWeight:"700", fontSize:'12px', width:'auto'}}>See All</span>
        </Row>
        {Suggested.map((item) => (
            <Row style={{width:'300px', margin:'30px 0'}} key={item.id}>
                <Suggestion Avatarsrc={item.Avatarsrc} userid={item.userid} followed={item.followed} />
            </Row>
        ))}
        <Row style={{width:'300px', margin:'10px 0'}}>
            <ul>
                <li style={{display:'inline-block'}}>
                    <a 
                        style={{textDecoration:'none', color:'rgba(158, 158, 158)', fontSize:'12px'}} 
                        href="#About"
                    >
                        About&nbsp;
                    </a>
                </li>
                <li style={{display:'inline-block'}}>
                    <a 
                        style={{textDecoration:'none', color:'rgba(158, 158, 158)', fontSize:'12px'}} 
                        href="#Help"
                    >
                        &#8226;Help&nbsp;
                    </a>
                </li>
                <li style={{display:'inline-block'}}>
                    <a 
                        style={{textDecoration:'none', color:'rgba(158, 158, 158)', fontSize:'12px'}} 
                        href="#Press"
                    >
                        &#8226;Press&nbsp;
                    </a>
                </li>
                <li style={{display:'inline-block'}}>
                    <a 
                        style={{textDecoration:'none', color:'rgba(158, 158, 158)', fontSize:'12px'}} 
                        href="#API"
                    >
                        &#8226;API&nbsp;
                    </a>
                </li>
                <li style={{display:'inline-block'}}>
                    <a 
                        style={{textDecoration:'none', color:'rgba(158, 158, 158)', fontSize:'12px'}}  
                        href="#Jobs"
                    >
                        &#8226;Jobs&nbsp;
                    </a>
                </li>
                <li style={{display:'inline-block'}}>
                    <a 
                        style={{textDecoration:'none', color:'rgba(158, 158, 158)', fontSize:'12px'}} 
                        href="#Privacy"
                    >
                        &#8226;Privacy&nbsp;
                    </a>
                </li>
                <li style={{display:'inline-block'}}>
                    <a 
                        style={{textDecoration:'none', color:'rgba(158, 158, 158)', fontSize:'12px'}} 
                        href="#Terms"
                    >
                        &#8226;Terms&nbsp;
                    </a>
                </li>
                <li style={{display:'inline-block'}}>
                    <a 
                        style={{textDecoration:'none', color:'rgba(158, 158, 158)', fontSize:'12px'}} 
                        href="#Location"
                    >
                        &#8226;Location&nbsp;
                    </a>
                </li>
                <li style={{display:'inline-block'}}>
                    <a 
                        style={{textDecoration:'none', color:'rgba(158, 158, 158)', fontSize:'12px'}} 
                        href="#Language"
                    >
                        &#8226;Language&nbsp;
                    </a>
                </li>
                <li style={{display:'inline-block'}}>
                    <a 
                        style={{textDecoration:'none', color:'rgba(158, 158, 158)', fontSize:'12px'}} 
                        href="#Meta"
                    >
                        &#8226;Meta Verified&nbsp;
                    </a>
                </li>
            </ul>
            <span style={{color:'rgba(158, 158, 158)', fontSize:'12px'}}>&#169; 2023 INSTAGRAM FROM META</span>
        </Row>
    </>
  )
}

export default RightContainer