import React from 'react'
import Sidenav from './sidenav'
import { Col, Row } from 'react-bootstrap'
import {tvData} from '../data/tvdata'
import { Link } from 'react-router-dom'


function home() {
  const NewData=tvData.slice(0,4)
  return (
    <div >
      
          <div className="dash maindata">
              {
               NewData.map((e)=>{
                return(
                  <div className='productdata'>
                    <img src={e.image} alt="" />
                    <p>{e.id}</p>
                    <p>{e.name}</p>
                    <p>{e.Price}</p>
                  </div>

                )


               })     
              }
              <Link to='/'> <p>View More</p> </Link> 
          </div>
        


    </div>
  )
}



export default home
