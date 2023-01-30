import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {ROUTES} from '../../constants';

const Settings = ({navigation}) => {
  return (
    <>
      <Text style={{textAlign: 'center', marginTop: '30%', fontSize: 30}}>
        Settings
      </Text>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.SETTINGS_DETAIL)}>
          <Text
            style={{
              paddingHorizontal: 40,
              paddingVertical: 5,
              margin: 10,
              borderWidth: 1,
              borderRadius: 20,
            }}>
            To Settings Detail
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.LOGIN)}>
          <Text
            style={{
              paddingHorizontal: 40,
              paddingVertical: 5,
              margin: 10,
              borderWidth: 1,
              borderRadius: 20,
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Settings;
