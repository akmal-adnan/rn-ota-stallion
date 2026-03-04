import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.mainContainer}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
