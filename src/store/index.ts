import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import drivers from './drivers';
import pageConfig from './pageConfig';
import races from './races';

const rootReducer = combineReducers({
  drivers,
  pageConfig,
  races,
});

const persistConfig = {
  key: 'root_main',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware: any = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(persistedReducer, applyMiddleware(...middleware));

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
