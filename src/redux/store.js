import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { prodReducer } from './reducers/prodReducer';
import { cartReducer } from './reducers/cartReducer';


const rootReducer=combineReducers({ prodReducer, cartReducer });
 // creating store by applying middlewares 
const store= createStore(rootReducer,applyMiddleware(thunk));

export default store;