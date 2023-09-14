import React from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap';
import Sidenav from '../Navbar/Sidenav';
const Explore = () => {
  return (
    <>
    <Sidenav/>
     <Container fluid style={{position:"absolute",right:"0",background:"black",width:"1158px"}}>
      <Row className='mt-5'>
         <Col lg={4} md={4} >
          <div className='image-container'>
          <Image src={require("./Assets/image4.jpg")} className='d-block' ></Image>
          <div class="image-overlay">
          <i class="bi bi-heart-fill"></i>
          <span style={{color:"white",cursor:"pointer"}}>1.4k</span>
          <i class="bi bi-chat-fill"></i>
          <span style={{color:"white",cursor:"pointer"}}>200</span>    
         </div>
         <i class="fas fa-clone fa-rotate-270" aria-hidden="true" style={{fontSize:"20px",color:"white",position:"absolute",top:"0",right:"0",padding:"5px"}}></i>
         </div>
       
       </Col>
       <Col lg={4} md={4} >
       <div className='image-container'>
       <Image src={require("./Assets/image1.jpg")} className='d-block' ></Image>
       <div class="image-overlay">
          <i class="bi bi-heart-fill"></i>
          <span style={{color:"white",cursor:"pointer"}}>1.2k</span>
          <i class="bi bi-chat-fill"></i>
          <span style={{color:"white",cursor:"pointer"}}>100</span>
         </div>
         <i class="fas fa-clone fa-rotate-270" aria-hidden="true" style={{fontSize:"20px",color:"white",position:"absolute",top:"0",right:"0",padding:"5px"}}></i>
         </div>
       </Col>
       <Col lg={4} md={4} >
       <div className='image-container'>
       <Image src={require("./Assets/image2.jpg")} className='d-block'></Image>
       <div class="image-overlay">
          <i class="bi bi-heart-fill"></i>
          <span style={{color:"white",cursor:"pointer"}}>1.3k</span>
          <i class="bi bi-chat-fill"></i>
          <span style={{color:"white",cursor:"pointer"}}>50</span>
         </div>
         <i class="fas fa-clone fa-rotate-270" aria-hidden="true" style={{fontSize:"20px",color:"white",position:"absolute",top:"0",right:"0",padding:"5px"}}></i>
         </div>
       </Col>
        </Row>

        <Row className='mt-3'>
        <Col lg={4} md={4}>
        <div className='image-container'>
       <Image src={require("./Assets/image3.jpg")} className='d-block'></Image>
       <div class="image-overlay">
          <i class="bi bi-heart-fill"></i>
          <span style={{color:"white",cursor:"pointer"}}>1k</span>
          <i class="bi bi-chat-fill"></i>
          <span style={{color:"white",cursor:"pointer"}}>100</span>
         </div>
         <i class="fas fa-clone fa-rotate-270" aria-hidden="true" style={{fontSize:"20px",color:"white",position:"absolute",top:"0",right:"0",padding:"5px"}}></i>
         </div>
       </Col>
       <Col lg={4} md={4}>
       <div className='image-container'>
       <Image src={require("./Assets/travel.jpg")} className='d-block'></Image>
       <div class="image-overlay">
          <i class="bi bi-heart-fill"></i>
          <span style={{color:"white",cursor:"pointer"}}>1.4k</span>
          <i class="bi bi-chat-fill"></i>
          <span style={{color:"white",cursor:"pointer"}}>200</span>
          </div>
          <i class="fas fa-clone fa-rotate-270" aria-hidden="true" style={{fontSize:"20px",color:"white",position:"absolute",top:"0",right:"0",padding:"5px"}} ></i>
         </div>
       </Col>
       <Col lg={4} md={4}>
       <div className='image-container'>
       <Image src={require("./Assets/Fish fry.jpg")} className='d-block'></Image>
       <div class="image-overlay">
        <i class="bi bi-heart-fill"></i>
        <span style={{color:"white",cursor:"pointer"}}>1.6k</span>
          <i class="bi bi-chat-fill"></i>
          <span style={{color:"white",cursor:"pointer"}}>50</span>
          </div>
           <i class="fas fa-clone fa-rotate-270" aria-hidden="true" style={{fontSize:"20px",color:"white",position:"absolute",top:"0",right:"0",padding:"5px"}}></i>
         </div>
       </Col>
        </Row>


        <Row className='mt-3'>
        <Col lg={4} md={4}>
        <div className='image-container'>
       <Image src={require("./Assets/image5.jpg")} className='d-block'></Image>
       <div class="image-overlay">
          <i class="bi bi-heart-fill"></i>
          <span style={{color:"white",cursor:"pointer"}}>1k</span>
          <i class="bi bi-chat-fill"></i>
          <span style={{color:"white",cursor:"pointer"}}>100</span>
         </div>
         <i class="fas fa-clone fa-rotate-270" aria-hidden="true" style={{fontSize:"20px",color:"white",position:"absolute",top:"0",right:"0",padding:"5px"}}></i>
         </div>
       </Col>
       <Col lg={4} md={4}>
       <div className='image-container'>
       <Image src={require("./Assets/image6.jpg")} className='d-block'></Image>
       <div class="image-overlay">
          <i class="bi bi-heart-fill"></i>
          <span style={{color:"white",cursor:"pointer"}}>1.4k</span>
          <i class="bi bi-chat-fill"></i>
          <span style={{color:"white",cursor:"pointer"}}>200</span>
          </div>
          <i class="fas fa-clone fa-rotate-270" aria-hidden="true" style={{fontSize:"20px",color:"white",position:"absolute",top:"0",right:"0",padding:"5px"}} ></i>
         </div>
       </Col>
       <Col lg={4} md={4}>
       <div className='image-container'>
       <Image src={require("./Assets/image7.jpg")} className='d-block'></Image>
       <div class="image-overlay">
        <i class="bi bi-heart-fill"></i>
        <span style={{color:"white",cursor:"pointer"}}>1.6k</span>
          <i class="bi bi-chat-fill"></i>
          <span style={{color:"white",cursor:"pointer"}}>50</span>
          </div>
           <i class="fas fa-clone fa-rotate-270" aria-hidden="true" style={{fontSize:"20px",color:"white",position:"absolute",top:"0",right:"0",padding:"5px"}}></i>
         </div>
       </Col>
        </Row>
     </Container>
    </>
    
  );
}

export default Explore;