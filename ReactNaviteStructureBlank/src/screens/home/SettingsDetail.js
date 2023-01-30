import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {ROUTES} from '../../constants';

const SettingsDetail = ({navigation}) => {
  return (
    <>
      <Text style={{textAlign: 'center', marginTop: '30%', fontSize: 30}}>
        Settings Detail
      </Text>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text
            style={{
              paddingHorizontal: 40,
              paddingVertical: 5,
              margin: 10,
              borderWidth: 1,
              borderRadius: 20,
            }}>
            Go Back
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default SettingsDetail;
