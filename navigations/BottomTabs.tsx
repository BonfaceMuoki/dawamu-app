import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: string;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Learn':
              iconName = focused ? 'book' : 'book-outline';
              break;
            case 'Performance':
              iconName = focused ? 'bar-chart' : 'bar-chart-outline';
              break;
            case 'Information':
              iconName = focused ? 'information-circle' : 'information-circle-outline';
              break;
            case 'Settings':
              iconName = focused ? 'settings' : 'settings-outline';
              break;
            default:
              iconName = 'ellipse';
          }

          return (
            <Animated.View>
              <Icon name={iconName} size={size} color={color} />
            </Animated.View>
          );
        },
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Learn" component={Home} />
      <Tab.Screen name="Performance" component={Home} />
      <Tab.Screen name="Information" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
