import React from 'react'
import Sidenav from '../components/sidenav'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function productlist() {
  return (
    <div>
    <Row>
    <Col sm={2}>
    <Sidenav />
    </Col>
    <Col sm={10}>
    <div className='buttonsprolis'>
    <Link to='/phones'><button>Iphones</button></Link>
    
    <Link to='/tv'><button>Tv</button></Link>
    
    <button>Refrigerator</button>
    
    <button>Washing Machine</button>
    
    <button>Air Conditioner</button>
    </div>
    
   </Col>
   </Row>
  
    </div>
  )
}

export default productlist