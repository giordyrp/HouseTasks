import React from "react";
import Setup from "./boot/setup";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';


export default class App extends React.Component {
  render() {
    console.disableYellowBox = true
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Setup/>
        </PersistGate>
      </Provider>
    );
  }
}