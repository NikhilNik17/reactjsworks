import React from 'react'
import {productsData} from '../data/products'
import { Link } from 'react-router-dom'

function tv() {
  return (
    <div className='maindata2'>
        {
            productsData.map((e)=>{
                return(
                    
                    <div className='productdata'>
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
  )
}

export default tv