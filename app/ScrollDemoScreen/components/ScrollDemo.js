import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class ScrollDemo extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.box_large} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightcyan',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box_large: {
    width: 250,
    height: 250,
    backgroundColor: 'plum',
    margin: 5,
  },
  box_medium: {
    width: 200,
    height: 150,
    backgroundColor: 'turquoise',
    margin: 5,
  },
  box_small: {
    width:150,
    height: 120,
    backgroundColor: 'palegoldenrod',
    margin: 5,
  },
});
