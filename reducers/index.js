import ListReducer from '../reducers/ListReducer';
import HomeReducer from '../reducers/HomeReducer';
import {combineReducers, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Combining Reducers
const reducers = combineReducers({
    selectedListState: ListReducer,
    homeState : HomeReducer,
})

const persistConfig = {
    key: 'root',
    storage,
  };



const pReducer = persistReducer(persistConfig, reducers);
export const store = createStore(pReducer);
export const persistor = persistStore(store);

export default [store, persistor];