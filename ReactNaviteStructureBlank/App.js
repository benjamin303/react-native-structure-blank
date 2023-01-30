import React from 'react';

import Navigation from './navigation/navigation';
import AuthNavigator from './src/navigations/AuthNavigator';
import BottomTabNavigator from './src/navigations/BottomTabNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  // isAuthenticated =

  return (
    <>
      <NavigationContainer>
        {/* {isAuthenticated ? AuthNavigator : BottomTabNavigator} */}
        <AuthNavigator />
      </NavigationContainer>

      {/* OR */}

      {/* <Navigation />  */}
    </>
  );
};

export default App;
