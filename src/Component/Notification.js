import React from 'react';
import { Col, Container,Image, Row } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
const Notification = () => {

    const [show, setShow] = useState(false);  
    const handleClose1 = () => setShow(false);
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
    <Container>
        <Button variant="primary" onClick={handleShow1}>
        Launch
      </Button>
      <Offcanvas show={show} onHide={handleClose1} backdrop={false}  scroll={true}>
        <Offcanvas.Header >
          <Offcanvas.Title> <h4 className='mt-3 ' style={{color:"black",fontWeight:"700"}}>Notifications</h4> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Col className='d-flex justify-content-center'>
           <Image src={require("./Assets/notification.JPG")}></Image>
           </Col>
           <Col className='text-center mt-1'>
           Activity On Your Posts
           </Col>
           <Col className='text-center mt-2'>
           When someone likes or comments on one of
           </Col>
           <Col className='text-center'>
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
            <h6 className='mt-1 ml-1'>michelleobama<i class="bi bi-patch-check-fill" style={{color:"blue",fontSize:"13px"}}></i><br /> <span style={{fontWeight:"300",fontSize:"15px",color:"grey"}}>Michelle Obama</span> <br /> <span style={{fontWeight:"300",fontSize:"13px",color:"grey"}}>Instagram recommended</span></h6>
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
            <h6 className='mt-1 ml-1'>mrancelotti<i class="bi bi-patch-check-fill" style={{color:"blue",fontSize:"13px"}}></i> <br /> <span style={{fontWeight:"300",fontSize:"15px",color:"grey"}}>Carlo Ancelotti</span> <br /> <span style={{fontWeight:"300",fontSize:"13px",color:"grey"}}>Instagram recommended</span></h6>
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
            <h6 className='mt-1 ml-1'>stephencurry30<i class="bi bi-patch-check-fill" style={{color:"blue",fontSize:"13px"}}></i> <br /> <span style={{fontWeight:"300",fontSize:"15px",color:"grey"}}>Wardell Curry</span> <br /> <span style={{fontWeight:"300",fontSize:"13px",color:"grey"}}>Instagram recommended</span></h6>
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
            <h6 className='mt-1 ml-1'>behatiprinsloo<i class="bi bi-patch-check-fill" style={{color:"blue",fontSize:"13px"}}></i> <br /> <span style={{fontWeight:"300",fontSize:"15px",color:"grey"}}>Behati Prinsloo Levine</span> <br /> <span style={{fontWeight:"300",fontSize:"13px",color:"grey"}}>Instagram recommended</span></h6>
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
  );
}

export default Notification;