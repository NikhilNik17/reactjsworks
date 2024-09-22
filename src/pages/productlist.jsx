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
    
    <Link to='/ac'><button>Air Conditioner</button></Link>
    
    <Link to='/washingmachine'><button>Washing Machine</button></Link>
    
    <Link to='/iphonecases'><button>Phone Cases</button></Link>
    </div>
    
   </Col>
   </Row>
  
    </div>
  )
}

export default productlist