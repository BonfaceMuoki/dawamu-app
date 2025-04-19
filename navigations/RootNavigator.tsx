import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Register from '../screens/Register';
import DrawerNavigator from './DrawerNavigator';
import OnboardingScreenOne from '../screens/onboarding/OnboardingScreenOne';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  OnboardingScreenOne:undefined,
  Register: undefined;
  MainApp: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">

      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OnboardingScreenOne" component={OnboardingScreenOne} />      
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="MainApp" component={DrawerNavigator} />
      
    </Stack.Navigator>
  );
};

export default RootNavigator;