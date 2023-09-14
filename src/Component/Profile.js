import React from 'react';
import { Col, Container, Image,  Row } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Sidenav from '../Navbar/Sidenav';
const Profile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  
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



  const [isFollowing4,setIsFollowing4] = useState(false);

  const handleFollowToggle4 = () => {
    setIsFollowing4(!isFollowing4);
  };

    const [isFollowing5,setIsFollowing5] = useState(false);

  const handleFollowToggle5 = () => {
    setIsFollowing5(!isFollowing5);
  };
    
  const [isFollowing6,setIsFollowing6] = useState(false);

  const handleFollowToggle6 = () => {
    setIsFollowing6(!isFollowing6);
  };

  const [isFollowing7,setIsFollowing7] = useState(false);

  const handleFollowToggle7 = () => {
    setIsFollowing7(!isFollowing7);
  };
  /* search */
  
  return (
  <>
  <Sidenav/>
  <Container fluid style={{position:"absolute",right:"0",background:"black",width:"1158px"}}>
    <div class="insta-clone" id='profile' >
        <div class=" h-auto px-48">
          <div class="flex md:flex-row-reverse flex-wrap">
            <div class="w-full md:w-3/4 p-4 text-center">
              <div class="text-left pl-4 pt-3">
                <span class="text-base font-bold text-lg mr-2" style={{color:"white"}}>Jack001</span>
                <span class="text-base font-semibold text-gray-700 mr-2">
                  <button
                    class="rounded-1 "
                   style={{backgroundColor:"#D3D3D3",padding:"4px"}}
                  >Edit Profile</button>
                </span>
                <span class="text-base font-semibold text-gray-700 mr-2">
                  <button
                    class=" font-semibold rounded"
                    style={{backgroundColor:"#D3D3D3",padding:"4px"}}
                  >View Archive</button>
                </span>
                <span class="text-base font-semibold text-gray-700">
                  <button
                   
                    aria-label="Notifications"
                  >
                   <i class="bi bi-gear-wide" style={{fontSize:"23px"}}></i>
                  </button>
                </span>
              </div>
    
              <div class="text-left pl-4 pt-3">
                <span class="text-base font-semibold mr-2" style={{color:"white"}}>
                  <b>220</b> posts
                </span>
                <span class="text-base font-semibold text-white-700 mr-2">
                  <b  style={{color:"white"}}>114</b> <button  onClick={handleShow} style={{color:"white"}}> Followers </button>
                  
      <Modal show={show} onHide={handleClose} animation={false}    aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title style={{marginLeft:"180px",fontSize:"16px",fontWeight:"bold"}}>Followers</Modal.Title>
        </Modal.Header>
          <input type="input" id="input1" placeholder='Search'/>
       
          <Row>
           <Col className='d-flex mt-3'>
            <span className='rounded-full'>
           <Image src={require("./Assets/profile1.png")} ></Image>
           </span>
            <h6 className='mt-1 ml-1' style={{color:"white"}}>michelleobama<i class="bi bi-patch-check-fill" style={{color:"blue",fontSize:"13px"}}></i><br /> <span style={{fontWeight:"300",fontSize:"15px",color:"grey"}}>Michelle Obama</span> <br /> <span style={{fontWeight:"300",fontSize:"13px",color:"grey"}}>Instagram recommended</span></h6>
           </Col>
           <Col lg={4} className='mt-4'>
            <Button onClick={handleFollowToggle} style={{height:"30px",width:"90px",fontSize:"15px"}} className='text-center'>{isFollowing? 'Following':'Follow'} </Button>
            
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

           </Row>
      </Modal>
                </span>
                <span class="text-base font-semibold text-gray-700">
                  <b  style={{color:"white"}}>200</b>  <button  onClick={handleShow1}  style={{color:"white"}}> following </button>

                 
                  
                  <Modal show={show1} onHide={handleClose1} animation={false}    aria-labelledby="contained-modal-title-vcenter">
                    <Modal.Header closeButton>
                      <Modal.Title style={{marginLeft:"180px",fontSize:"16px",fontWeight:"bold"}}> Following</Modal.Title>
                    </Modal.Header>
                      <input type="input" id="input1" placeholder='Search'/>
                   
                      <Row>
                       <Col className='d-flex mt-3'>
                        <span className='rounded-full'>
                       <Image src={require("./Assets/profile1.png")} ></Image>
                       </span>
                        <h6 className='mt-1 ml-1' style={{color:"white"}}>michelleobama<i class="bi bi-patch-check-fill" style={{color:"blue",fontSize:"13px"}}></i><br /> <span style={{fontWeight:"300",fontSize:"15px",color:"grey"}}>Michelle Obama</span> <br /> <span style={{fontWeight:"300",fontSize:"13px",color:"grey"}}>Instagram recommended</span></h6>
                       </Col>
                       <Col lg={4} className='mt-4'>
                        <Button onClick={handleFollowToggle4} style={{height:"30px",width:"90px",fontSize:"15px"}} className='text-center'>{isFollowing4? 'Follow' :'Following'} </Button>
                        
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
                        <Button onClick={handleFollowToggle5}  style={{height:"30px",width:"90px",fontSize:"15px"}} className='text-center'>{isFollowing5? 'Follow' :'Following'}</Button>
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
                        <Button onClick={handleFollowToggle6} style={{height:"30px",width:"90px",fontSize:"15px"}} className='text-center'>{isFollowing6? 'Follow' :'Following'}</Button>
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
                        <Button onClick={handleFollowToggle7} style={{height:"30px",width:"90px",fontSize:"15px"}} className='text-center'>{isFollowing7? 'Follow' :'Following'}</Button>
                       </Col>
                       </Row>
                       <Row>
                        <Col>
                        <h6  className='text-primary text-center mt-2 cursor-pointer'  style={{fontSize:"15px"}}>See All Suggestions</h6>
                        </Col>
                       </Row>
                  </Modal>
                </span>
              </div>
    
              <div class="text-left pl-4 pt-3">
                <span class="text-md text-gray-700 mr-2"  style={{color:"white"}}>Jack</span>
              </div>
    
              <div class="text-left pl-4 pt-3">
                <p
                  class="text-base font-medium text-blue-700 mr-2"
                >#web developer  #traveller #reader #blogger #React Developer</p>
                <p
                  class="text-base font-medium text-gray-700 mr-2"
                >https://www.webdeveloper.com</p>
              </div>
            </div>
    
            <div class="w-full md:w-1/4 p-4 text-center">
              <div class="w-full relative md:w-3/4 text-center mt-8">
                <button
                  class="flex rounded-full"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                >
                 <Image class="h-40 w-40  rounded-full"
                    src={require("./Assets/profile.png")}
                    alt='work' id='image'>
                    </Image>
                 
                </button>
              </div>
            </div>
          </div>
    

    
          <div class="inline-flex ml-36 mt-16">
            <div class="flex-1 text-center px-4 py-2 m-2">
              <div
                class="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4"
              >
                <img
                  class="object-cover w-full h-full"
                  src={require("./Assets/fun.jpg")}
                  alt='work'
                />
              </div>
              <h1 class="pt-16 text-base font-semibold text-gray-900"  style={{color:"white"}}>Fun</h1>
            </div>
    
            <div class="flex-1 text-center px-4 py-2 m-2">
              <div
                class="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4"
              >
                <img
                  class="object-cover w-full h-full"
                  src={require("./Assets/travel.jpg")}
                  alt='work'
                />
              </div>
              <h1 class="pt-16 text-base font-semibold text-gray-900"  style={{color:"white"}}>Travel</h1>
            </div>
    
            <div class="flex-1 text-center px-4 py-2 m-2">
              <div
                class="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4"
              >
                <img
                  class="object-cover w-full h-full"
                  src={require("./Assets/food.jpg")}
                  alt='work'
                />
              </div>
              <h1 class="pt-16 text-base font-semibold text-gray-900"  style={{color:"white"}}>Food</h1>
            </div>
    
    
            <div class="flex-1 text-center px-4 py-2 m-2">
              <div
                class="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4"
              >
                <img
                  class="object-cover w-full h-full"
                  alt='work'
                  src={require("./Assets/react.png")}
                />
              </div>
              <h1 class="pt-16 text-base font-semibold text-gray-900"  style={{color:"white"}}>My Work</h1>
            </div>
          </div>
    
          <hr class="border-gray-500 mt-6" />
          <hr class="border-gray-500 w-20 border-t-1 ml-64 border-gray-800" />
    
    
          <div class="flex flex-row mt-4 justify-center mr-16">
            <div class="flex text-gray-700 text-center py-2 m-2 pr-5">
              <div class="flex inline-flex">
                <button
                  class="border-transparent text-gray-800 rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
                  aria-label="Notifications"
                >
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
              <div class="flex inline-flex ml-2 mt-1">
                <h3 class="text-sm font-bold text-gray-800 mr-2"  style={{color:"white"}}>POSTS</h3>
              </div>
            </div>
    
            <div class="flex text-gray-700 text-center py-2 m-2 pr-5">
              <div class="flex inline-flex">
                <button
                  class="border-transparent text-gray-600 rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
                  aria-label="Notifications"
                >
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
              <div class="flex inline-flex ml-2 mt-1">
                <h3 class="text-sm font-medium text-gray-700 mr-2"  style={{color:"white"}}>IGTV</h3>
              </div>
            </div>
    
            <div class="flex text-gray-700 text-center py-2 m-2 pr-5">
              <div class="flex inline-flex">
                <button
                  class="border-transparent text-gray-600 rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
                  aria-label="Notifications"
                >
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
              </div>
              <div class="flex inline-flex ml-2 mt-1">
                <h3 class="text-sm font-medium text-gray-700 mr-2"  style={{color:"white"}}>SAVED</h3>
              </div>
            </div>
    
            <div class="flex text-gray-700 text-center py-2 m-2 pr-5">
              <div class="flex inline-flex">
                <button
                  class="border-transparent text-gray-600 rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
                  aria-label="Notifications"
                >
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                </button>
              </div>
              <div class="flex inline-flex ml-2 mt-1">
                <h3 class="text-sm font-medium text-gray-700 mr-2"  style={{color:"white"}}>TAGGED</h3>
              </div>
            </div>
          </div>
        <Container>
          <Row>
            <Col lg={4} md={4}>
            <Image src={require("./Assets/image1.jpg")} className='d-block'></Image>
            </Col >
            <Col lg={4} md={4}>
            <Image src={require("./Assets/image4.jpg")} className='d-block'></Image>
            </Col>
            <Col lg={4} md={4}>
            <Image src={require("./Assets/image3.jpg")} className='d-block'></Image>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={4}>
            <Image src={require("./Assets/travel.jpg")}  className='mt-3 d-block' ></Image>
            </Col >
            <Col lg={4} md={4}>
            <Image src={require("./Assets/Fish fry.jpg")} className='mt-3 d-block' ></Image>
            </Col>
            <Col lg={4} md={4}>
            <Image src={require("./Assets/image2.jpg")}  className='mt-3 d-block'></Image>
            </Col>
          </Row>
          </Container>    
         

        </div>
      </div>
      </Container>
      </>
  );
}

export default Profile;