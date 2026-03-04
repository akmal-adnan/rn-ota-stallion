import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const AppUpdateScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>AppUpdateScreen</Text>
    </View>
  );
};

export default AppUpdateScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
