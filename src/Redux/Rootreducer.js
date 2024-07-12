import { combineReducers } from 'redux';
import { reducer, reducerWishlist } from './Reducer';
import allProdsReducer from './AllProdsSlice';

export default combineReducers({
    reducer,
    reducerWishlist,
    allProducts: allProdsReducer,
})