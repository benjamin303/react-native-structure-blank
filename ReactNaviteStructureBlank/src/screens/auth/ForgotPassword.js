import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import { useRoute } from '@react-navigation/native'

const ForgotPassword = () => {
  const route = useRoute();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{textAlign: 'center', fontSize: 30}}>ForgotPassword</Text>
      <Text>Params: {route.params.userId}</Text>
    </SafeAreaView>
  );
};

export default ForgotPassword;
