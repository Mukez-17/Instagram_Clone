import React, { useState } from 'react'
import './Navbar.css';
import './Create.css';
import './ItemSearch.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import Avatar from '@mui/material/Avatar';
import {Button, Popover, Row, OverlayTrigger, Modal, Offcanvas, Form, Col,Image,Container} from 'react-bootstrap';


function Sidenav() {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const toggleShow = () => setShow2((s) => !s);
  const handleClose2 = () => setShow2(false);
  

  const [show, setShow] = useState(false);  
  const handleShow1 = () => setShow(true);

  const [isFollowing,setIsFollowing] = useState(false);

const handleFollowToggle = () => {
  setIsFollowing(!isFollowing);
};

  const [isFollowing1,setIsFollowing1] = useState(false);

const handleFollowToggle1 = () => {
  setIsFollowing1(!isFollowing1);
};
  
const [isFollowing2,setIsFollowing2] = useState(false);

const handleFollowToggle2 = () => {
  setIsFollowing2(!isFollowing2);
};

const [isFollowing3,setIsFollowing3] = useState(false);

const handleFollowToggle3 = () => {
  setIsFollowing3(!isFollowing3);
};


  return (
  <div style={{backgroundColor:'black', position:'fixed'}}>
    <Row style={{marginBottom:'20px',marginTop:"10px",marginLeft:"10px"}}>
      <Image src={require('./Assets/Instagram_Logo_Dark.JPG')} alt="dark"style={{height:"30px",width:"150px"}} ></Image>
    </Row>
    <Row style={{margin:"10px 0"}}>
      <Button style={{backgroundColor:'transparent', borderColor:'transparent', textAlign:'left'}}>
       
        <a href='/home' style={{textDecoration:'none', color:'white', fontSize:'20px', display:'inline-block'}}> <HomeOutlinedIcon style={{color:'white', width:'30px', height:'30px', position:'relative', top:'-2px', margin:'0 20px'}} />Home</a>
      </Button>
    </Row>
    <Row style={{margin:"10px 0"}}>
      <Button style={{backgroundColor:'transparent', borderColor:'transparent', textAlign:'left'}}  onClick={toggleShow}>
        <SearchOutlinedIcon style={{color:'white', width:'30px', height:'30px', position:'relative', top:'-2px', margin:'0 20px'}} />
        <p style={{textDecoration:'none', color:'white', fontSize:'20px', display:'inline-block', margin:'0'}}>Search</p>
      </Button>
      <Offcanvas show={show2} onHide={handleClose2} style={{backgroundColor:'black', color:'white', borderColor:'rgba(38, 38, 38)'}} scroll="true">
        <Offcanvas.Header>
          <Offcanvas.Title style={{fontSize:'25px', fontWeight:'600'}}>Search</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Header style={{borderBottom:'1px Solid rgba(38, 38, 38)'}}>
          <Form>
            <input
              type="text"
              placeholder="Search"
              style={{
                backgroundColor:'rgba(38, 38, 38)', 
                width:'350px', 
                height:'40px', 
                borderRadius:'5px', 
                borderColor:'transparent', 
                color:'white'
              }}
            />
          </Form>
          <CancelIcon style={{position:'relative', float:'right', right:'30px', width:'15px', height:'15px'}} />
        </Offcanvas.Header>
        <Offcanvas.Body>
          Recent
        </Offcanvas.Body>
      </Offcanvas>
    </Row>
    <Row style={{margin:"10px 0"}}>
      <Button style={{backgroundColor:'transparent', borderColor:'transparent', textAlign:'left'}}>
        <a href='/explore' style={{textDecoration:'none', color:'white', fontSize:'20px', display:'inline-block'}}>    <ExploreOutlinedIcon style={{color:'white', width:'30px', height:'30px', position:'relative', top:'-2px', margin:'0 20px'}} /> Explore  </a>
      </Button>
    </Row>
    <Row style={{margin:"10px 0"}}>
      <Button style={{backgroundColor:'transparent', borderColor:'transparent', textAlign:'left'}}>
        <SlideshowOutlinedIcon style={{color:'white', width:'30px', height:'30px', position:'relative', top:'-2px', margin:'0 20px'}} />
        <a href='/reels' style={{textDecoration:'none', color:'white', fontSize:'20px', display:'inline-block'}}>Reels</a>
      </Button>
    </Row>
    <Row style={{margin:"10px 0"}}>
      <Button style={{backgroundColor:'transparent', borderColor:'transparent', textAlign:'left'}}>

        <a href='/Message' style={{textDecoration:'none', color:'white', fontSize:'20px', display:'inline-block'}}>        <ChatIcon style={{color:'white', width:'30px', height:'30px', position:'relative', top:'-2px', margin:'0 20px'}} />Messages</a>
      </Button>
    </Row>
    <Row style={{margin:"10px 0"}}>
      <Button style={{backgroundColor:'transparent', borderColor:'transparent', textAlign:'left'}}>
        <p  style={{textDecoration:'none', color:'white', fontSize:'20px', display:'inline-block', margin:'0'}}><button onClick={handleShow1}>
        <FavoriteBorderIcon style={{color:'white', width:'30px', height:'30px', position:'relative', top:'-2px', margin:'0 20px'}} />   Notification
      </button></p>
      </Button>
    </Row>
    <Row style={{margin:"10px 0"}}>
      <Button style={{backgroundColor:'transparent', borderColor:'transparent', textAlign:'left'}} onClick={handleShow}>
        <AddBoxOutlinedIcon style={{color:'white', width:'30px', height:'30px', position:'relative', top:'-2px', margin:'0 20px'}} />
        <p style={{textDecoration:'none', color:'white', fontSize:'20px', display:'inline-block', margin:'0'}}>Create</p>
      </Button>
      <Modal show={show1} onHide={handleClose1} style={{top:'100px', color:'white'}}>
        <Modal.Header closeButton style={{backgroundColor:'rgba(38, 38, 38)', padding:'8px 16px', borderColor:'rgba(54, 54, 54)'}}>
            <Modal.Title style={{marginLeft:'190px', fontSize:'18px'}}>Create new post</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{maxHeight:'500px', padding:'24px', margin:'125px 0'}}>
            <div className="create">
                <svg 
                    aria-label="Icon to represent media such as images or videos" 
                    color="rgb(245, 245, 245)" 
                    fill="rgb(245, 245, 245)" 
                    height="77" 
                    role="img" 
                    viewBox="0 0 97.6 77.3" 
                    width="96"
                    style={{marginLeft:'210px'}}
                >
                    <title>Icon to represent media such as images or videos</title>
                    <path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path>
                    <path d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path>
                </svg>
                <p style={{fontSize:'20px', textAlign:'center'}}>Drag photos and videos here</p>
                <Button style={{backgroundColor:'#054db5', marginLeft:'175px'}}>Select from computer</Button>
            </div>
        </Modal.Body>
      </Modal>
    </Row>
    <Row style={{margin:"10px 0"}}>
      <Button style={{backgroundColor:'transparent', borderColor:'transparent', textAlign:'left'}}>
      
        <span style={{position:'relative', top:'-5px'}}><a href='/Profile' style={{textDecoration:'none', color:'white', fontSize:'20px', display:'inline-block'}}>  <Avatar src={require('./Assets/Dev Avatar.jpg')} style={{display:'inline-block', color:'white', width:'30px', height:'30px', margin:'0 20px'}} />Profile</a></span>
      </Button>
    </Row>
    <Row style={{margin:"100px 0 10px 0"}}>
      
      
      <OverlayTrigger OverlayTrigger trigger="click" placement="top" overlay={
      <Popover id="popover-basic">
          <Popover.Body style={{backgroundColor:'black',color:'white'}}>
            <Row style={{margin:"0"}}>
              <Button style={{backgroundColor:'transparent', borderColor:'transparent', textAlign:'left'}}>
                <SettingsRoundedIcon style={{color:'white', width:'20px', height:'20px', margin:'0 20px'}} />
                <a href='/settings' style={{textDecoration:'none', color:'white', fontSize:'14px', display:'inline-block', margin:'0'}}>Setting</a>
              </Button> 
            </Row>
            <Row style={{margin:"0"}}>
              <Button style={{backgroundColor:'transparent', borderColor:'transparent', textAlign:'left'}}>
                <AccessTimeFilledIcon style={{color:'white', width:'20px', height:'20px', margin:'0 20px'}} />
                <a href='/yourActivity' style={{textDecoration:'none', color:'white', fontSize:'14px', display:'inline-block', margin:'0'}}>Your Activity</a>
              </Button> 
            </Row>
            <Row style={{margin:"0"}}>
              <Button style={{backgroundColor:'transparent', borderColor:'transparent', textAlign:'left'}}>
                <BookmarkBorderOutlinedIcon style={{color:'white', width:'20px', height:'20px', margin:'0 20px'}} />
                <a href='/profile/saved' style={{textDecoration:'none', color:'white', fontSize:'14px', display:'inline-block', margin:'0'}}>Saved</a>
              </Button> 
            </Row>
            <Row style={{margin:"0"}}>
              <Button style={{backgroundColor:'transparent', borderColor:'transparent', textAlign:'left'}}>
                <ModeNightOutlinedIcon style={{color:'white', width:'20px', height:'20px', margin:'0 20px'}} />
                <p style={{textDecoration:'none', color:'white', fontSize:'14px', display:'inline-block', margin:'0'}}>Switch Appearance</p>
              </Button> 
            </Row>
            <Row style={{margin:"0", borderBottom:'5px Solid rgba(38, 38, 38)'}}>
              <Button style={{backgroundColor:'transparent', borderColor:'transparent', textAlign:'center'}}>
                <p style={{textDecoration:'none', color:'white', fontSize:'14px', display:'inline-block', margin:'0'}}>Report Problem</p>
              </Button> 
            </Row>
            <Row style={{margin:"0", borderBottom:'1px Solid rgba(38, 38, 38)'}}>
              <Button style={{backgroundColor:'transparent', borderColor:'transparent', textAlign:'center'}}>
                <p style={{textDecoration:'none', color:'white', fontSize:'14px', display:'inline-block', margin:'0'}}>Switch Account</p>
              </Button> 
            </Row>
            <Row style={{margin:"0"}}>
              <Button style={{backgroundColor:'transparent', borderColor:'transparent', textAlign:'center'}}>
                <p style={{textDecoration:'none', color:'white', fontSize:'14px', display:'inline-block', margin:'0'}}>Logout</p>
              </Button> 
            </Row>
          </Popover.Body>
        </Popover>}>
        <Button
        aria-describedby={id} 
        variant="contained" 
        onClick={(event => {setAnchorEl(event.currentTarget)})}
        style={{backgroundColor:'transparent', border:'0', textAlign:'left'}}
      >
        <MenuIcon style={{color:'white', width:'30px', height:'30px', position:'relative', top:'-3px', margin:'0 20px'}} />
        <p style={{color:'white', fontSize:'20px', display:'inline-block', margin:'0'}}>More</p>
      </Button>
      </OverlayTrigger>
    </Row>
    {/*Notification*/}
    <Container style={{marginLeft:"100px"}}>
       
      <Offcanvas show={show} onHide={handleClose1} backdrop={false}  scroll={true} style={{background:"black",width:"100vh"}}>
        <Offcanvas.Header >
          <Offcanvas.Title> <h4 className='mt-3 ' style={{color:"white",fontWeight:"700"}} >Notifications</h4> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Col className='d-flex justify-content-center'>
           <Image src={require("./Assets/notification.JPG")}></Image>
           </Col>
           <Col className='text-center mt-1' style={{color:"white"}}>
           Activity On Your Posts
           </Col>
           <Col className='text-center mt-2' style={{color:"white"}}>
           When someone likes or comments on one of
           </Col>
           <Col className='text-center' style={{color:"white"}}>
           your posts, you'll see it here.
           </Col>
           <Col className='mt-5'>
           <h6>Suggested for you</h6>
           </Col>
           <Row>
           <Col className='d-flex mt-3'>
            <span className='rounded-full'>
           <Image src={require("./Assets/profile1.png")} ></Image>
           </span>
            <h6 className='mt-1 ml-1' style={{color:"white"}}>michelleobama<i class="bi bi-patch-check-fill" style={{color:"blue",fontSize:"13px"}}></i><br /> <span style={{fontWeight:"300",fontSize:"15px",color:"grey"}}>Michelle Obama</span> <br /> <span style={{fontWeight:"300",fontSize:"13px",color:"grey"}}>Instagram recommended</span></h6>
           </Col>
           <Col lg={4} className='mt-4'>
            <Button onClick={handleFollowToggle} style={{height:"30px",width:"90px",fontSize:"15px"}} className='text-center'>{isFollowing? 'Following' :'Follow'} </Button>
            
           </Col>
           </Row>
           <Row>
           <Col className='d-flex mt-3'>
            <span className='rounded-full'>
           <Image src={require("./Assets/profile2.png")} ></Image>
           </span>
            <h6 className='mt-1 ml-1' style={{color:"white"}}>mrancelotti<i class="bi bi-patch-check-fill" style={{color:"blue",fontSize:"13px"}}></i> <br /> <span style={{fontWeight:"300",fontSize:"15px",color:"grey"}}>Carlo Ancelotti</span> <br /> <span style={{fontWeight:"300",fontSize:"13px",color:"grey"}}>Instagram recommended</span></h6>
           </Col>
           <Col lg={4} className='mt-4'>
            <Button onClick={handleFollowToggle1}  style={{height:"30px",width:"90px",fontSize:"15px"}} className='text-center'>{isFollowing1? 'Following' :'Follow'}</Button>
           </Col>
           </Row>

           <Row>
           <Col className='d-flex mt-3'>
            <span className='rounded-full'>
           <Image src={require("./Assets/profile3.png")} ></Image>
           </span>
            <h6 className='mt-1 ml-1' style={{color:"white"}}>stephencurry30<i class="bi bi-patch-check-fill" style={{color:"blue",fontSize:"13px"}}></i> <br /> <span style={{fontWeight:"300",fontSize:"15px",color:"grey"}}>Wardell Curry</span> <br /> <span style={{fontWeight:"300",fontSize:"13px",color:"grey"}}>Instagram recommended</span></h6>
           </Col>
           <Col lg={4} className='mt-4'>
            <Button onClick={handleFollowToggle2} style={{height:"30px",width:"90px",fontSize:"15px"}} className='text-center'>{isFollowing2? 'Following' :'Follow'}</Button>
           </Col>
           </Row>

           <Row>
           <Col className='d-flex mt-3'>
            <span className='rounded-full'>
           <Image src={require("./Assets/profile4.png")} ></Image>
           </span>
            <h6 className='mt-1 ml-1' style={{color:"white"}}>behatiprinsloo<i class="bi bi-patch-check-fill" style={{color:"blue",fontSize:"13px"}}></i> <br /> <span style={{fontWeight:"300",fontSize:"15px",color:"grey"}}>Behati Prinsloo Levine</span> <br /> <span style={{fontWeight:"300",fontSize:"13px",color:"grey"}}>Instagram recommended</span></h6>
           </Col>
           <Col lg={4} className='mt-4'>
            <Button onClick={handleFollowToggle3} style={{height:"30px",width:"90px",fontSize:"15px"}} className='text-center'>{isFollowing3? 'Following' :'Follow'}</Button>
           </Col>
           </Row>
           <Row>
            <Col>
            <h6  className='text-primary text-center mt-2 cursor-pointer'  style={{fontSize:"15px"}}>See All Suggestions</h6>
            </Col>
           </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
    
    </div>
  )
}

export default Sidenav