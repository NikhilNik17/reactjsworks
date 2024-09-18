import React from 'react'
import {casesData} from '../data/casesdata'
import { Link } from 'react-router-dom'
import Iphonecases from './iphonecases'


function casesslice() {
  const NewData=casesData.slice(0,4)
  return (
    <div >
      
          <div className="dash maindata2">
              {
               NewData.map((e)=>{
                return(
                  <div className='productdata2'>
                    <img src={e.image} alt="" />
                    <p>{e.id}</p>
                    <p>{e.name}</p>
                    <p>{e.Price}</p>
                  </div>

                )


               })     
              }
              <Link to='/iphonecases'> <p>View More</p> </Link> 
          </div>
        


    </div>
  )
}



export default casesslice
