import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './src/StackNav';

import rootReducer from './src/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </Provider>
  )
}