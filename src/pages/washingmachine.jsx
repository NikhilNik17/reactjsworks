import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Sidenav from '../components/sidenav'
import { wmData } from '../data/washingdata'

function washingmachine() {
  return (
    <Row>
    <Col sm={2}>
    <Sidenav />
    </Col>

<Col sm={10}>
    <div className='maindata2'>
        {
           wmData.map((e)=>{
                return(
                    
                    <div className=' tvData '>
                    <Link to={`/tv/${e.id}`}>
                        <img src={e.image} alt="" />
                        
                        <p>Brand Name:{e.name}</p>
                        <p>Price Name:{e.Price}</p>
                        
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

export default washingmachine