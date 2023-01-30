import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Profile, Videos, Settings} from '../screens';
import {COLORS, ROUTES} from '../constants';
import {Platform, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsNavigator from './SettingsNavigator';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarInactiveTintColor: COLORS.dark,
        tabBarActiveTintColor: COLORS.primary,
        headerTitleAlign: 'center',
        tabBarIcon: ({color, size, focused}) => {
          let iconName;

          if (route.name == ROUTES.HOME_TAB) {
            iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
          } else if (route.name == ROUTES.SETTINGS_NAVIGATOR) {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name == ROUTES.VIDEOS) {
            iconName = focused ? 'md-play-circle' : 'md-play-circle-outline';
          } else if (route.name == ROUTES.PROFILE) {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}>
      <Tab.Screen name={ROUTES.HOME_TAB} component={Home} />
      <Tab.Screen name={ROUTES.PROFILE} component={Profile} />
      <Tab.Screen name={ROUTES.VIDEOS} component={Videos} />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
        options={{
          tabBarLabel: 'Settings',
          title: 'Settings',
          headerShown: true,
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon
                  name={Platform.OS == 'ios' ? 'ios-menu' : 'md-menu'}
                  size={30}
                  color={COLORS.dark}
                  style={{marginRight: 10}}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    // position: 'absolute',
    // backgroundColor: COLORS.transparent,
    // borderTopWidth: 0,
    // height: 'auto',
    // borderTopWidth: 0,
    // bottom: 15,
    // right: 10,
    // left: 10,
    // height: 92,
    // padding: 0,
    // margin: 0
  },
});
