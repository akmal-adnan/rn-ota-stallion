import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const PoliciesDetailScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>PoliciesDetailScreen</Text>
    </View>
  );
};

export default PoliciesDetailScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
