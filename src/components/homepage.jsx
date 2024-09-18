import React from 'react'
import Phones from '../pages/phones'
import Home from './home'
import Tvslice from '../pages/tvslice'
import Sidenav from './sidenav'
import { Col, Row } from 'react-bootstrap'



function homepage() {
  return (
    <div>
       <Row>
    <Col sm={2}>
    <Sidenav />
    </Col>
    <Col sm={10}>
    
   <Home />
   <br></br>
   <Tvslice />
   </Col>
   </Row>
  

    </div>
  )
}

export default homepage