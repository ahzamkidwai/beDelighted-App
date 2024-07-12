import { Add_to_Cart, Add_to_Wishlist, Remove_From_Cart, Remove_From_Wishlist } from "./Constant";

const initialState = [];
const initial = [];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_to_Cart:
            return [
                ...state,
                action.data
            ]; 
            
        case Remove_From_Cart:
            return state.filter(item => item.id !== action.data);
            
        default:
            return state;
    }
};

export const reducerWishlist =(state=initial,action)=>{
    switch (action.type) {
        case Add_to_Wishlist:
            return[
                ...state,
                action.data
            ];

            case Remove_From_Wishlist:
                return state.filter(item => item.id !== action.data.id);          
           
    default:
            return state
           
    }
    

}


