import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import {useDispatch } from 'react-redux'
import { setProduct } from './actions/p_action'

export default function AllProduct() {
    const dispatch=useDispatch()
    async function prodList() {
        var url='https://fakestoreapi.com/products'
        var parsedata=await fetch(url)
        const jsondata=await parsedata.json();
        dispatch(setProduct(jsondata));
        
        
    }

    useEffect(()=>{
        prodList().then((success)=>{
            console.log('success hai')
        })
        
    },[])// simply empty means renders one time only after changes of state too


  return (
    <div className='productComponent'>
        <div className='container py-4'>
        <div className='p_component'>
            <ProductComponent/>
        </div>
        </div>
        


    </div>
  )
}
