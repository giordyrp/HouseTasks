import { AsyncStorage } from 'react-native';
import { createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'

import rootReducer from './redux';

const persistConfig = {
  key: 'works',
  storage: AsyncStorage
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  undefined,
);

export const persistor = persistStore(store);
