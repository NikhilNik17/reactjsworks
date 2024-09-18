import React from 'react'
import {tvData} from '../data/tvdata'
import { Link } from 'react-router-dom'
import Tv from './tv'


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
              <Link to='/tv'> <p>View More</p> </Link> 
          </div>
        


    </div>
  )
}



export default home
