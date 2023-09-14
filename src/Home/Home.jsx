import React from 'react';
import { Row } from 'react-bootstrap';
import RightContainer from './RightContainer';
import MiddleContainer from './MiddleContainer';
import Sidenav from '../Navbar/Sidenav'
import './Home.css';

function Home() {
  return (
    <>
        <Row style={{backgroundColor:'#000', color:'white', padding:'50px 0 0 0', margin:'0'}}>
            <div className="col-lg-3" style={{padding:'0'}}><Sidenav /></div>
            <div className="col-lg-6" style={{padding:'0 64px'}}>
                <MiddleContainer />
            </div>
            <div className="col-lg-3" style={{padding:'0'}}>
                <RightContainer />
            </div>
        </Row>
    </>
  )
}

export default Home;