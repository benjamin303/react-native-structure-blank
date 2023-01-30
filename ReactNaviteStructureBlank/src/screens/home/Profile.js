import React from 'react';
import {Text, SafeAreaView} from 'react-native';

const Profile = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{textAlign: 'center', fontSize: 30}}>Profile Screen</Text>
    </SafeAreaView>
  );
};

export default Profile;
