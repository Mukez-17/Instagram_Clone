import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';    

    
    function Example() {
      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
      return (
        <>
          <Button variant="primary" id='butt' onClick={handleShow}>
          switch account
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title id='title'>Instagram</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 
                  <Form.Control
                    type="email"
                    placeholder="Phone number, username, or email"
                    autoFocus

                    
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 
                  <Form.Control
                    type="email"
                    placeholder="Password"
                    autoFocus

                    
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer id='btn_acc'>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleClose}>
               Login
              </Button>
              
            </Modal.Footer>
            <h6 id='forgot'>Forgot password?</h6>
          </Modal>
        </>
      );
    }
    
    export default Example;


