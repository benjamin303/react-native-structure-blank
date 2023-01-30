import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {COLORS, ROUTES} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const Login = props => {
  // const {navigation} = props;
  const navigation = useNavigation();

  return (
    <>
      <Text style={{textAlign: 'center', marginTop: '30%', fontSize: 30}}>
        Login Screen
      </Text>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.HOME, {userId: 'X0001'})}>
          <Text
            style={{
              paddingHorizontal: 40,
              paddingVertical: 5,
              margin: 10,
              borderWidth: 1,
              borderRadius: 20,
            }}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ROUTES.FORGOT_PASSWORD, {userId: 'X0001'})
          }>
          <Text
            style={{
              paddingHorizontal: 40,
              paddingVertical: 5,
              margin: 10,
              borderWidth: 1,
              borderRadius: 20,
            }}>
            Forgot Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ROUTES.REGISTER, {userId: 'X0001'})
          }>
          <Text
            style={{
              paddingHorizontal: 40,
              paddingVertical: 5,
              margin: 10,
              borderWidth: 1,
              borderRadius: 20,
            }}>
            Register
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Login;
