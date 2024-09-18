import React from 'react'
import Sidenav from './sidenav'
import Phones from '../pages/phones'
import { Col, Row } from 'react-bootstrap'
import Homepage from './homepage'

function dashboard() {
  return (
    <div className='rowcoldas'>
   <Row>
    <Col sm={2}>
    <Sidenav />
    </Col>
    <Col sm={10}>
    <Phones />
    </Col>
   </Row>
   
   

    




</div>
  )
}

export default dashboard