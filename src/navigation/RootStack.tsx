import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import AppUpdateScreen from '../screens/AppUpdateScreen';
import HomeScreen from '../screens/HomeScreen';
import PoliciesDetailScreen from '../screens/PoliciesDetailScreen';
import type {Policy} from '../data/mockData';

export type RootStackParamList = {
  Home: undefined;
  AppUpdate: undefined;
  PoliciesDetail: {policy: Policy} | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack(): React.JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name="AppUpdate"
        component={AppUpdateScreen}
        options={{title: 'App Update'}}
      />
      <Stack.Screen
        name="PoliciesDetail"
        component={PoliciesDetailScreen}
        options={{title: 'Policies Detail'}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
