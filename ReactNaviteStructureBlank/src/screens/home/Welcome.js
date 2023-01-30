import React from 'react';
import {Text, SafeAreaView} from 'react-native';

const Welcome = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Welcome</Text>
    </SafeAreaView>
  );
};

export default Welcome;
