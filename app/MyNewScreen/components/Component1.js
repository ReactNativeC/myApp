import {Text, View, StyleSheet} from 'react-native';
import type {Node} from 'react';
import React from 'react';

const Component1 = (): Node => (
  <View style={styles.description}>
    <Text>Component1</Text>
  </View>
);

const styles = StyleSheet.create({
  description: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',    
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    color: 'black',    
  },
});

export default Component1;