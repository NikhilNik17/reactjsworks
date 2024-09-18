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
    <br></br>
    <Link to='/tv'><button>Tv</button></Link>
    <br></br>
    <button>Refrigerator</button>
    <br></br>
    <button>Washing Machine</button>
    <br></br>
    <button>Air Conditioner</button>
    </div>
    
   </Col>
   </Row>
  
    </div>
  )
}

export default productlist