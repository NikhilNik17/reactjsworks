import React from 'react'
import Phones from '../pages/phones'
import Home from './home'
import Tvslice from '../pages/tvslice'
import Sidenav from './sidenav'
import { Col, Row } from 'react-bootstrap'
import Casesslice from '../pages/casesslice'



function homepage() {
  return (
    <div className='homepage'>
       <Row>
    <Col sm={2}>
    <Sidenav />
    </Col>
    <Col sm={10}>
    
   <Home />
   <br></br>
   <Tvslice />
   <br></br>
   <Casesslice />
   </Col>
   </Row>
  

    </div>
  )
}

export default homepage