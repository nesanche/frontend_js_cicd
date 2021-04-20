import { createStore } from "redux";
 
import favoriteReducer from "./reducer/reducer";
 
const store = createStore(
 favoriteReducer,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
 
export default store;