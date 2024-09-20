import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Acslice from '../pages/acslice'
import Casesslice from '../pages/casesslice'
import Tvslice from '../pages/tvslice'
import Washingslice from '../pages/washingslice'
import Home from './home'
import Sidenav from './sidenav'


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
   <Acslice />
   
   <br></br>
   <Washingslice />
   
   <br></br>
   <Casesslice />
   </Col>
   </Row>
  

    </div>
  )
}

export default homepage