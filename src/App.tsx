import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStack from './navigation/RootStack';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
