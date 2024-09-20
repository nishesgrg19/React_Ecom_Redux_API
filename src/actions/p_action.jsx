


export const setProduct=(products)=>{
    return {
        type:"SET_PRODUCTS",
        payload:products

    }
}

export const selectedProduct=(products)=>{
    return {
        type:"SELECTED_PRODUCTS",
        payload:products
        
    }
}
export const removeProduct=()=>{
    return {
        type:"REMOVE_PRODUCTS"
        
    }
}