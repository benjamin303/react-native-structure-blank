import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddScreen from '../screens/AddScreen';
import ActivityScreen from '../screens/ActivityScreen';
import SearchScreen from '../screens/SearchScreen';

const Navigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, colour}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search-sharp' : 'search-outline';
            } else if (route.name === 'Add') {
              iconName = focused ? 'add-circle-sharp' : 'add-circle-outline';
            } else if (route.name === 'Activity') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionic name={iconName} size={size} colour={colour} />;
          },
          tabBarStyle: {
            backgroundColor: '#9AD1D4',
            height: 60,
          },
          tabBarShowLabel: false,
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Activity" component={ActivityScreen} />
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

{
  /* <Tab.Navigator
screenOptions={({route}) => ({
    tabBarIcon: ({focus, size, color}) => {
        let iconName;
        if(route.name === "Home"){
            iconName = focus ? "home-outline" : "ios-home-outline";
        } else if(route.name === "Activity"){
            iconName = focus ? "" : "";
        } else if(route.name === "Add"){
            iconName = focus ? "add-circle" : "add-circle";
        } else if(route.name === "Search"){
            iconName = focus ? "search-outline" : "search-sharp";
        } else if(route.name === "Profile"){
            iconName = focus ? "" : "";
        }
        return <Ionic name={iconName} size={size} color={color} />
    },
})}
> */
}
