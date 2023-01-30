import React from 'react';
import {Text, SafeAreaView} from 'react-native';

const Videos = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{textAlign: 'center', fontSize: 30}}>Videos Screen</Text>
    </SafeAreaView>
  );
};

export default Videos;
