import React from 'react'
import { casesData  } from '../data/casesdata'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import Sidenav from '../components/sidenav'

function iphonecases() {
  return (
    <Row>
    <Col sm={2}>
    <Sidenav />
    </Col>

<Col sm={10}>
    <div className='maindata3'>
        {
            casesData.map((e)=>{
                return(
                    
                    <div className=' casesdata2 '>
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

export default iphonecases