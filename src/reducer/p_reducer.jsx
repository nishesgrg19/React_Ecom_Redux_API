
const initialstate=[]

export const product_reducer=(state=initialstate,action)=>{

    
        if(action.type=="SET_PRODUCTS"){
            

            return [...state,...action.payload];
        }
        else{

            return state;
        }





}


export const selected_product_reducer=(state={},action)=>{
     if(action.type="SELECTED_PRODUCTS"){
        
        return {...state,...action.payload};
    }
    else  if(action.type="REMOVE_PRODUCTS") {
        
        return {};
    }





}
