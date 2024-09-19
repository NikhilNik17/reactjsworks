import React from 'react'
import { Link } from 'react-router-dom'
import { wmData } from '../data/washingdata'



function home() {
  const NewData=wmData.slice(0,4)
  return (
    <div >
      
          <div className="dashmaindata23">
              {
               NewData.map((e)=>{
                return(
                  <div className='productdata10'>
                    <img src={e.image} alt="" />
                    <p>{e.id}</p>
                    <p>{e.name}</p>
                    <p>{e.Price}</p>
                  </div>

                )


               })     
              }
              <Link to='/washingmachine'> <p>View More</p> </Link> 
          </div>
        


    </div>
  )
}



export default home
