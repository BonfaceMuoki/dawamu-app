// App.tsx or index.tsx
import 'react-native-gesture-handler'; // 👈 always at the top
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import RootNavigator from './navigations/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
      <RootNavigator />
      </NavigationContainer>
      {/* <Provider store={store}> */}
     
      {/* </Provider> */}
    </GestureHandlerRootView>
  );
}
