import React from 'react'
import {productsData} from '../data/products'
import { Link } from 'react-router-dom'


function phones() {
  return (

   
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
   
                    
  )
}

export default phones