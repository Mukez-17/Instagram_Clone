import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Sidenav from '../Navbar/Sidenav';

const Message = () => {
    const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [show, setShow] = useState(false);

  const handleClose1 = () => setShow(false);
  const handleShow1 = () => setShow(true);

  return (
    <>
    <div>
      <Sidenav/>
    </div>
         
        <Container fluid style={{background:"black",height:"100vh"}}>
            <Row >
                <Col className='d-grid' style={{position:"relative",top:"200px"}}>
                    <div style={{position:"absolute",right:"150px"}}>
                    <span className='flex justify-center'>
                <Image src={require("./Assets/message.JPG")} ></Image>
                </span>
                <p className='text-center' style={{fontWeight:"500",fontSize:"20px",color:"white"}}>
                Your messages
                </p>
                <p  className='text-center' style={{fontSize:"14px",color:"grey"}}>
                Send private photos and messages to a friend or group
                </p>
                <span className='d-flex justify-content-center'>
                <button  onClick={handleShow} className='btn btn-primary text-center' style={{width:"120px",height:"30px",fontSize:"14px",fontWeight:"500"}}> Send Message</button>
                </span>
                </div>
       </Col>
       </Row>
    <Modal show={showModal} onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered >
      <Modal.Header closeButton>
        <Modal.Title style={{color:"white"}}>New Message</Modal.Title>
      </Modal.Header>
      <Modal.Body scrollable style={{color:"white"}}>
        To:<input type="input" id='input' className='ml-3' placeholder='Search...'/>
      </Modal.Body>
      <Modal.Footer  style={{height:"300px"}} >
        <span style={{marginRight:"335px",color:"white"}}>No Account found</span>
        <Button variant="primary" style={{width:"800px",marginTop:"180px",color:"white"}} onClick={handleClose}>
         Chat
        </Button>
      </Modal.Footer>
    </Modal>
   
    <Col >
    <Container fluid style={{background:"black",height:"100vh"}}>
  <button   onClick={handleShow1} style={{position:"relative",top:"300px",left:"160px",color:"black"}}>
        Launch
      </button>
      <Offcanvas show={show} onHide={handleClose1} backdrop={false}  scroll={true} style={{background:"black"}}>
        <Offcanvas.Header >
          <Offcanvas.Title> <h4 className='mt-2 cursor-pointer' style={{color:"white"}}>Jack001</h4> </Offcanvas.Title>
            <Image src={require("./Assets/edit.JPG")}  onClick={handleShow} className='cursor-pointer'></Image>
        </Offcanvas.Header>
        <Offcanvas.Body>
       <p style={{fontSize:"16px",fontWeight:"bold",color:"white"}}>Messages <span className='ml-52 cursor-pointer' style={{color:"grey",fontWeight:"500"}}>Requests</span></p>
         
       <Row>
           <Col className='d-flex mt-3'>
            <span className='rounded-full'>
           <Image src={require("./Assets/profile5.png")} className='d-block' ></Image>
           </span>
            <h6 className='mt-1 ml-1'  style={{color:"white"}}>Jack001<i class="bi bi-patch-check-fill" style={{color:"blue",fontSize:"13px"}}></i><br /> <span style={{fontWeight:"300",fontSize:"15px",color:"grey"}}>You sent a post . 2h</span></h6>
           </Col>
            
           </Row>
         
         <Row>
           <Col className='d-flex mt-3'>
            <span className='rounded-full'>
           <Image src={require("./Assets/profile1.png")} ></Image>
           </span>
            <h6 className='mt-1 ml-1'  style={{color:"white"}}>michelleobama<i class="bi bi-patch-check-fill" style={{color:"blue",fontSize:"13px"}}></i><br /> <span style={{fontWeight:"300",fontSize:"15px",color:"grey"}}>sent a post . 2d</span></h6>
           </Col>
            
           </Row>
           <Row>
           <Col className='d-flex mt-3'>
            <span className='rounded-full'>
           <Image src={require("./Assets/profile2.png")} ></Image>
           </span>
            <h6 className='mt-1 ml-1'  style={{color:"white"}}>mrancelotti<i class="bi bi-patch-check-fill" style={{color:"blue",fontSize:"13px"}}></i> <br /> <span style={{fontWeight:"300",fontSize:"15px",color:"grey"}}>hello . 2h</span></h6>
           </Col>
           </Row>

           <Row>
           <Col className='d-flex mt-3'>
            <span className='rounded-full'>
           <Image src={require("./Assets/profile3.png")} ></Image>
           </span>
            <h6 className='mt-1 ml-1'  style={{color:"white"}}>stephencurry30<i class="bi bi-patch-check-fill" style={{color:"blue",fontSize:"13px"}}></i> <br /> <span style={{fontWeight:"300",fontSize:"15px",color:"grey"}}>sent a post . 12h</span></h6>
           </Col>
           </Row>

           <Row>
           <Col className='d-flex mt-3'>
            <span className='rounded-full'>
           <Image src={require("./Assets/profile4.png")} ></Image>
           </span>
            <h6 className='mt-1 ml-1'  style={{color:"white"}}>behatiprinsloo<i class="bi bi-patch-check-fill" style={{color:"blue",fontSize:"13px"}}></i> <br /> <span style={{fontWeight:"300",fontSize:"15px",color:"grey"}}>How are You? . 1h</span></h6>
           </Col>
           </Row>

           <Row>
           <Col className='d-flex mt-3'>
            <span className='rounded-full'>
           <Image src={require("./Assets/profile6.png")} ></Image>
           </span>
            <h6 className='mt-1 ml-1'  style={{color:"white"}}>elonmusks_____<i class="bi bi-patch-check-fill" style={{color:"blue",fontSize:"13px"}}></i> <br /> <span style={{fontWeight:"300",fontSize:"15px",color:"grey"}}>Sent a post . 1h</span></h6>
           </Col>
           </Row>

           <Row>
           <Col className='d-flex mt-3'>
            <span className='rounded-full'>
           <Image src={require("./Assets/profile7.png")} ></Image>
           </span>
            <h6 className='mt-1 ml-1'  style={{color:"white"}}>therock____<i class="bi bi-patch-check-fill" style={{color:"blue",fontSize:"13px"}}></i> <br /> <span style={{fontWeight:"300",fontSize:"15px",color:"grey"}}>Sent a post . 12h</span></h6>
           </Col>
           </Row>
          
        </Offcanvas.Body>
      </Offcanvas>
     </Container>
      </Col>
      </Container>
  </>
  );
}

export default Message;