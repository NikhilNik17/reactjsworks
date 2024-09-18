import React from 'react'
import {productsData} from '../data/products'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import Sidenav from '../components/sidenav'


function phones() {
  return (
    <Row>
    <Col sm={2}>
    <Sidenav />
    </Col>

   <Col sm={10}>
    <div className='maindata'>
        {
            productsData.map((e)=>{
                return(
                    
                    <div className='productdata'>
                    <Link to={`/phones/${e. id}`}>
                        <img src={e.image} alt="" />
                        
                        <p>Brand Name: {e.name}</p>
                        <p>Price Name: {e.Price}</p>
                        
                    </Link>
                    </div>
                    
                )
                
            })
        }
    </div>
    </Col>
    </Row>
   
                    
  )
}

export default phones