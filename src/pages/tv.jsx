import React from 'react'
import { tvData } from '../data/tvdata'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import Sidenav from '../components/sidenav'

function tv() {
  return (
    <Row>
    <Col sm={2}>
    <Sidenav />
    </Col>

<Col sm={10}>
    <div className='maindata2'>
        {
            tvData.map((e)=>{
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

export default tv