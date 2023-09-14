import { Avatar, Popover, Typography } from '@mui/material';
import React, { useRef, useState } from 'react'
import { Modal, Row, Button, OverlayTrigger, Tooltip, Form, Col , InputGroup } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {FaRegComment} from 'react-icons/fa';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import "react-multi-carousel/lib/styles.css";
import Stories from './StoriesData';
import posts from './PostsData';

const StoriesCarousel = ({ Avatarsrc, userid }) => {
    return(
        <>
            <div style={{border:'2px Solid red', borderRadius:'30px', width:'60px', margin:'0 20px', textAlign:'center'}}>
                <Avatar src={Avatarsrc} style={{margin:'2px', width:'52px', height:'52px'}} />
            </div>
            <div className='userid'>{userid}</div>
        </>
    );
};

const PostsCard = ({ item }) => {
    const [items, setItems] = useState(item);
    const [isColor, setIsColor] = useState(false);
    const [isBookmark, setIsBookmark] = useState(false);
    const [anchorEl1, setAnchorEl1] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);
    const [anchorEl3, setAnchorEl3] = useState(null);
    const [anchorEl4, setAnchorEl4] = useState(null);
    const target1 = useRef(null);

    const handleLikes = () => {
        if(!isColor){
            items.likes = items.likes + 1;
            setItems(items);
            setIsColor(!isColor);
        }
        else{
            items.likes = items.likes - 1;
            setItems(items);
            setIsColor(!isColor);
        }
    }

    const handlePopoverOpen = (event) => {
        setAnchorEl1(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl1(null);
    };
    
    const open1 = Boolean(anchorEl1);

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Collection +
        </Tooltip>
    );

    const open2 = Boolean(anchorEl2);
    const id2 = open2 ? 'simple-popover' : undefined;

    const open3 = Boolean(anchorEl3);
    const id3 = open3 ? 'simple-popover' : undefined;

    const open4 = Boolean(anchorEl4);
    const id4 = open4 ? 'simple-popover' : undefined;

    return(
        <div
            className="modal"
            style={{position:'relative', display:'block', left:'-40px'}}
        >
            <Modal.Dialog>
                <Modal.Header style={{border:'0'}}>
                    <div style={{margin:'0 20px 0 0'}}>
                        <Avatar src={items.Avatarsrc} style={{width:'35px', height:'35px'}} />
                    </div>
                    <Modal.Title style={{marginRight:'370px', fontSize:'16px'}} key={items.id}>{items.userid}</Modal.Title>
                    <Button
                        aria-describedby={id2} 
                        variant="contained" 
                        onClick={(event) => {setAnchorEl2(event.currentTarget)}}
                        style={{position:'absolute', left:'500px'}}
                    >
                        <svg 
                            aria-label="More options" 
                            color="rgb(245, 245, 245)" 
                            fill="rgb(245, 245, 245)" 
                            height="24" 
                            role="img" 
                            viewBox="0 0 24 24" 
                            width="24"
                        >
                            <circle cx="12" cy="12" r="1.5"></circle>
                            <circle cx="6" cy="12" r="1.5"></circle>
                            <circle cx="18" cy="12" r="1.5"></circle>
                        </svg>
                    </Button>
                    <Popover 
                        id={id2}
                        open={open2}
                        anchorEl={anchorEl2}
                        onClose={() => {setAnchorEl2(null);}}
                        anchorReference="anchorPosition"
                        anchorPosition={{ top: 200, left: 950 }}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <Row style={{borderRadius:'60px'}}>
                            <Col style={{width:'450px', backgroundColor:'rgba(38,38,38)'}}>
                                <Row className='menu-row'>
                                    <p 
                                        role={Button} 
                                        style={{backgroundColor:'transparent', borderColor:'transparent', color:'red', cursor:'pointer', margin:'10px 0'}}>
                                        Report
                                    </p>
                                </Row>
                                <Row className='menu-row'>
                                    <p 
                                        role={Button} 
                                        style={{backgroundColor:'transparent', borderColor:'transparent', color:'red', cursor:'pointer', margin:'10px 0'}}
                                        >
                                        Unfollow
                                    </p>
                                </Row>
                                <Row className='menu-row'>
                                    <p 
                                        role={Button} 
                                        style={{backgroundColor:'transparent', borderColor:'transparent', color:'white', cursor:'pointer', margin:'10px 0'}}
                                        >
                                        Add to favourites
                                    </p>
                                </Row>
                                <Row className='menu-row'>
                                    <p 
                                        role={Button} 
                                        style={{backgroundColor:'transparent', borderColor:'transparent', color:'white', cursor:'pointer', margin:'10px 0'}}
                                        >
                                        Go to post
                                    </p>
                                </Row>
                                <Row className='menu-row'>
                                    <p 
                                        role={Button} 
                                        style={{backgroundColor:'transparent', borderColor:'transparent', color:'white', cursor:'pointer', margin:'10px 0'}}
                                        >
                                        Share to...
                                    </p>
                                </Row>
                                <Row className='menu-row'>
                                    <p  
                                        role={Button}
                                        style={{backgroundColor:'transparent', borderColor:'transparent', color:'white', cursor:'pointer', margin:'10px 0'}}
                                    >
                                        Copy Link
                                    </p>
                                </Row>
                                <Row className='menu-row'>
                                    <p 
                                        role={Button} 
                                        style={{backgroundColor:'transparent', borderColor:'transparent', color:'white', cursor:'pointer', margin:'10px 0'}}
                                        >
                                        Embed
                                    </p>
                                </Row>
                                <Row className='menu-row' style={{border:'0'}}>
                                    <p 
                                        role={Button} 
                                        style={{backgroundColor:'transparent', borderColor:'transparent', color:'white', cursor:'pointer', margin:'10px 0'}}
                                        >
                                        Cancel
                                    </p>
                                </Row>
                            </Col>
                        </Row>
                    </Popover>
                </Modal.Header>

                <Modal.Body style={{maxHeight:'500px', minHeight:'250px', border:'1px Solid rgba(38, 38, 38)'}}>
                    <img src={items.imgSrc} alt="post" width={500} height={450} />
                </Modal.Body>

                <Modal.Footer style={{borderTop:'0', padding:'4px', borderBottom:'1px Solid rgba(158, 158, 158)', borderRadius:'0'}}>
                    <Col lg={12}>
                        <div style={{display:'inline-block', margin:'0 10px 0 0'}}>
                            <Button 
                                onClick={handleLikes} 
                                style={{backgroundColor:'transparent', borderColor:'transparent', padding:'0', width:'40px', height:'40px'}}
                            >
                                {!isColor ?
                                    <FavoriteBorderIcon style={{width:'75%', height:'75%' }} /> :
                                    <FavoriteIcon style={{width:'75%', height:'75%', color:'red'}} />
                                }
                            </Button>
                        </div>
                        <div style={{display:'inline-block', margin:'0 10px'}}>
                            <Button
                                aria-describedby={id3} 
                                variant="contained" 
                                onClick={(event) => {setAnchorEl3(event.currentTarget);}}
                                style={{
                                    backgroundColor:'transparent', 
                                    borderColor:'transparent', 
                                    padding:'0'
                                }}
                            >
                                <FaRegComment style={{width:'150%', height:'150%', margin:'8% 0 8% 0', color:'white'}} />
                            </Button>
                            <Popover 
                                id={id3}
                                open={open3}
                                anchorEl={anchorEl3}
                                onClose={() => {setAnchorEl3(null);}}
                                anchorReference="anchorPosition"
                                anchorPosition={{ top: 200, left: 1350 }}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                >
                                <div
                                    className="modal show"
                                    style={{ display: 'block', position: 'initial', color:'white', width:'350px'}}
                                >
                                    <Modal.Dialog style={{margin:'0'}}>
                                    <Modal.Header closeButton style={{border:'0'}}>
                                        <Modal.Title style={{marginLeft:'100px', fontSize:'20px'}}>Comments</Modal.Title>
                                    </Modal.Header>

                                    <Modal.Body style={{maxHeight:'160px', overflowY:'auto'}}>
                                        <div className="comments" style={{padding:'2px 8px'}}>
                                            <Avatar style={{position:'absolute'}} />
                                            <h6 style={{fontWeight:'700', marginLeft:'50px'}}>Name</h6>
                                            <h6 style={{marginLeft:'50px'}}>Comments.....</h6>
                                            <span style={{marginLeft:'50px', fontSize:'14px', color:'gray'}}>...Likes</span>
                                            <span style={{marginLeft:'30px', fontSize:'14px', color:'gray'}}>Reply</span>
                                            <svg
                                                aria-label="Like"
                                                color="rgb(142, 142, 142)" 
                                                fill="rgb(142, 142, 142)" 
                                                height="16" 
                                                role="img" 
                                                viewBox="0 0 24 24" 
                                                width="16"
                                                style={{position:'relative', top:'-40px', float:'right'}}
                                            >
                                                <title>Like</title>
                                                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                                            </svg>
                                        </div>
                                        <div className="comments" style={{padding:'2px 8px'}}>
                                            <Avatar style={{position:'absolute'}} />
                                            <h6 style={{fontWeight:'700', marginLeft:'50px'}}>Name</h6>
                                            <h6 style={{marginLeft:'50px'}}>Comments.....</h6>
                                            <span style={{marginLeft:'50px', fontSize:'14px', color:'gray'}}>...Likes</span>
                                            <span style={{marginLeft:'30px', fontSize:'14px', color:'gray'}}>Reply</span>
                                            <svg
                                                aria-label="Like"
                                                color="rgb(142, 142, 142)" 
                                                fill="rgb(142, 142, 142)" 
                                                height="16" 
                                                role="img"
                                                viewBox="0 0 24 24" 
                                                width="16"
                                                style={{position:'relative', top:'-40px', float:'right'}}
                                            >
                                                <title>Like</title>
                                                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                                            </svg>
                                        </div>
                                        <div className="comments" style={{padding:'2px 8px'}}>
                                            <Avatar style={{position:'absolute'}} />
                                            <h6 style={{fontWeight:'700', marginLeft:'50px'}}>Name</h6>
                                            <h6 style={{marginLeft:'50px'}}>Comments.....</h6>
                                            <span style={{marginLeft:'50px', fontSize:'14px', color:'gray'}}>...Likes</span>
                                            <span style={{marginLeft:'30px', fontSize:'14px', color:'gray'}}>Reply</span>
                                            <svg
                                                aria-label="Like"
                                                color="rgb(142, 142, 142)" 
                                                fill="rgb(142, 142, 142)" 
                                                height="16" 
                                                role="img" 
                                                viewBox="0 0 24 24" 
                                                width="16"
                                                style={{position:'relative', top:'-40px', float:'right'}}
                                            >
                                                <title>Like</title>
                                                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                                            </svg>
                                        </div>
                                    </Modal.Body>

                                    <Modal.Footer style={{border:'0', width:'350px'}}>
                                        <InputGroup style={{border:'2px Solid black', borderRadius:'25px'}}>
                                        <InputGroup.Text 
                                            style={{backgroundColor:'transparent', borderColor:'transparent', padding:'0'}}
                                        >
                                            <Avatar />
                                        </InputGroup.Text>
                                        <Form.Control 
                                            as="textarea" 
                                            placeholder="Add a comment..." 
                                            aria-label="With textarea" 
                                            style={{height:'10px', maxWidth:'230px', backgroundColor:'transparent', color:'white', border:'0'}}   
                                        />
                                        <svg 
                                            aria-label="Emoji" 
                                            color="rgb(168, 168, 168)" 
                                            fill="rgb(168, 168, 168)" 
                                            height="30" 
                                            role="img" 
                                            viewBox="0 0 24 24" 
                                            width="30"
                                            style={{position:'relative', bottom:'-5px', marginLeft:'10px'}}
                                        >
                                            <title>Emoji</title>
                                            <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                                        </svg>
                                        </InputGroup>
                                    </Modal.Footer>
                                    </Modal.Dialog>
                                </div>
                            </Popover>
                        </div>
                        <div style={{display:'inline-block', margin:'0 10px'}}>
                            <Button
                                aria-describedby={id4} 
                                variant="contained" 
                                onClick={(event) => {setAnchorEl4(event.currentTarget);}}
                                style={{
                                    backgroundColor:'transparent', 
                                    borderColor:'transparent', 
                                    padding:'0', 
                                    position:'relative',
                                    top:'-3px', 
                                    width:'40px', 
                                    height:'40px'
                                }}
                            >
                                <NearMeOutlinedIcon style={{width:'75%', height:'75%', marginTop:'10px', color:'white'}} />
                            </Button>
                            <Popover 
                                id={id4}
                                open={open4}
                                anchorEl={anchorEl4}
                                onClose={() => {setAnchorEl4(null);}}
                                anchorReference="anchorPosition"
                                anchorPosition={{ top: 200, left: 1020 }}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                >
                                <div
                                    className="modal show"
                                    style={{
                                        display: 'block', 
                                        position: 'initial', 
                                        color:'white', 
                                        width:'550px'
                                    }}
                                >
                                    <Modal.Dialog style={{margin:'0'}}>
                                        <Modal.Header closeButton style={{borderColor:'#444343', padding:'8px 16px 5px'}}>
                                            <Modal.Title style={{marginLeft:'230px', fontSize:'16px'}}>Share</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Header style={{borderColor:'#444343', padding:'4px 16px'}}>
                                            <Form>
                                            <span>To:</span>
                                            <input
                                                type="text"
                                                placeholder="Search..."
                                                style={{marginLeft:'30px', backgroundColor:'transparent', borderColor:'transparent'}}
                                            />
                                            </Form>
                                        </Modal.Header>

                                        <Modal.Body style={{maxHeight:'200px', overflowY:'auto'}}>
                                            <p>Suggested</p>
                                            <div className="share" style={{padding:'2px 8px'}}>
                                                <Avatar style={{position:'absolute', width:'45px', height:'45px'}} />
                                                <h6 style={{fontWeight:'700', marginLeft:'60px'}}>Name</h6>
                                                <h6 style={{marginLeft:'60px'}}>userid</h6>
                                                <Form.Check aria-label="option 1" />
                                            </div>
                                            <div className="share" style={{padding:'2px 8px'}}>
                                                <Avatar style={{position:'absolute', width:'45px', height:'45px'}} />
                                                <h6 style={{fontWeight:'700', marginLeft:'60px'}}>Name</h6>
                                                <h6 style={{marginLeft:'60px'}}>userid</h6>
                                                <Form.Check aria-label="option 1" />
                                            </div>
                                            <div className="share" style={{padding:'2px 8px'}}>
                                                <Avatar style={{position:'absolute', width:'45px', height:'45px'}} />
                                                <h6 style={{fontWeight:'700', marginLeft:'60px'}}>Name</h6>
                                                <h6 style={{marginLeft:'60px'}}>userid</h6>
                                                <Form.Check aria-label="option 1" />
                                            </div>
                                        </Modal.Body>

                                        <Modal.Footer style={{borderColor:'#444343', justifyContent:'center'}}>
                                            <Button style={{width:'279px', backgroundColor:'#4747ed'}}>Send</Button>
                                        </Modal.Footer>
                                    </Modal.Dialog>
                                </div>
                            </Popover>
                        </div>
                        <div style={{width:'40px', padding:'0', display:'inline-block', marginLeft:'352px'}}>
                            <Typography
                                aria-owns={open1 ? 'mouse-over-popover' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handlePopoverOpen}
                                onMouseLeave={handlePopoverClose}
                            >
                                <OverlayTrigger 
                                    target={target1.current} 
                                    overlay={renderTooltip} 
                                    placement="top" 
                                    delay={{ show: 250, hide: 400 }}
                                >
                                    <Button
                                    ref={target1} 
                                    onClick={() => setIsBookmark(!isBookmark)}
                                    style={{backgroundColor:'transparent', borderColor:'transparent', padding:'0'}}
                                    >
                                    {!isBookmark ? 
                                        <BookmarkBorderIcon style={{ width:'85%', height:'85%'}} /> : 
                                        <BookmarkIcon style={{ width:'85%', height:'85%'}} />
                                    }
                                    </Button>
                                </OverlayTrigger>
                            </Typography>  
                            <Popover
                                id="mouse-over-popover"
                                sx={{
                                    pointerEvents: 'none',
                                }}
                                open={open1}
                                anchorEl={anchorEl1}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                onClose={handlePopoverClose}
                                disableRestoreFocus
                            >
                                <Typography sx={{ p: 1, backgroundColor:'rgba(38,38,38)', color:'white' }}>
                                    {!isBookmark ? 'save' : 'remove'}
                                </Typography>
                            </Popover>
                        </div>
                    </Col>
                    <Col lg={12} style={{paddingLeft:'5px', margin:'0'}}>
                        <span>{items.likes} likes</span>
                    </Col>
                    <Col lg={12} style={{paddingLeft:'5px', margin:'0'}}>
                        <span style={{padding:'0'}}><span>{items.userid} &nbsp;</span>{items.description}</span>
                    </Col>
                    <Col lg={12} style={{margin:'0', color:'rgba(158, 158, 158)', paddingLeft:'5px'}}>
                        <span>View all {items.comments} comments</span>
                    </Col>
                    <Col lg={12} style={{margin:'0', height:'30px'}}>
                        <Form.Control 
                            size="sm" 
                            type="text" 
                            placeholder="Add a comment..." 
                            style={{height:'10px', maxWidth:'230px', backgroundColor:'transparent', color:'white', border:'0'}}  
                        />
                        <svg 
                            aria-label="Emoji" 
                            color="rgb(115, 115, 115)" 
                            fill="rgb(115, 115, 115)" 
                            height="13" 
                            role="img" 
                            viewBox="0 0 24 24" 
                            width="13"
                            style={{position:'relative', bottom:'30px', left:'500px'}}
                        >
                            <title>Emoji</title>
                            <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                        </svg>
                    </Col>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

function MiddleContainer() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 10
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 8
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 6
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 5
        }
    };

  return (
    <>
        <Row>
            <Carousel responsive={responsive}>
                {Stories.map((item) => (
                    <div key={item.id} style={{maxWidth:'48px'}}>
                        <StoriesCarousel Avatarsrc={item.Avatarsrc} userid={item.userid} />
                    </div>
                ))}    
            </Carousel>
        </Row>
        <Row style={{marginTop:'50px'}}>
            {posts.map((item) => (
                <div key={item.id}>
                    <PostsCard item={item} />
                </div>
            ))}
        </Row>
    </>
  )
}

export default MiddleContainer