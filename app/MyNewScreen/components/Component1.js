import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

export default class Component1 extends Component {
  render() {
    return (
      <View>
        <Text style={styles.description}>{this.props.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    color: 'orange',
  },
});