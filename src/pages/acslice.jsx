import React from 'react'
import { Link } from 'react-router-dom'
import { acData } from '../data/acdata'


function home() {
  const NewData=acData.slice(0,4)
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
              <Link to='/ac'> <p>View More</p> </Link> 
          </div>
        


    </div>
  )
}



export default home
