import {React,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { selectedProduct, removeProduct} from './actions/p_action';
import { useDispatch, useSelector } from 'react-redux';
export default function ProductDetails() {
    const{pid}=useParams();
    const dispatch=useDispatch();
    const pdata=useSelector((state)=>state.selected_product_reducer)

    async function singleData() {
        var url=`https://fakestoreapi.com/products/${pid}`
        var parsedata=await fetch(url)
        const jsondata=await parsedata.json();
        dispatch(selectedProduct(jsondata));
        
        
    }

    //! A callback function is a function that is passed as an argument to another function,which will call anytime in first or last

    useEffect(()=>{
        if(pid !=""){
            singleData()  //callback function
        }
        return ()=>{   //return function itself (cleanup function)
            dispatch(removeProduct())
        }
       
        
    },[])



  return (
    <div>ProductDetails
        <h3>{pdata.title}</h3>
        <img src={pdata.image} width='300px' height='300px'></img>
        <p>{pdata.description}</p>

    </div>
  )
}
