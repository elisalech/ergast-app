import React from 'react';
import ScreensContainer from './src/screens/ScreensContainer';
import store, {persistedStore} from './src/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

export default () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <ScreensContainer />
      </PersistGate>
    </Provider>
  );
};
