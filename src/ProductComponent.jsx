import React from 'react'
import { useSelector } from 'react-redux'
import {
    Link
  } from "react-router-dom";
export default function ProductComponent() {
    const getdata=useSelector((state)=>state.product_reducer)
    const perdata=getdata.map((item)=>
        <div className='col-lg-4'>
            <Link to={`/productdetail/${item.id}`}>
            <div className="card" style={{ width: '18rem' }}>
    <img src={item.image} className="card-img-top" alt="..." />
    <div className="card-body">
        <p><b>{item.title}</b></p>
        <p className="card-text">{(item.description).slice(0,60)}</p>
        <p>{item.price}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>
            </Link>
       
</div>)

    return (

        <div className='row'>
        
     {perdata}
  
        </div>
        
       
           
     


    )
}
