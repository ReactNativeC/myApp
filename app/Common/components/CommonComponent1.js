import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class CommonComponent1 extends Component {
  render() {
    return (
      <View style={styles.component}>
        <Text style={styles.header}>{this.props.headerText}</Text>
        <View style={styles.container}>
          <View style={styles.box1}>
            <Text>First Box</Text>
          </View>
          <View style={styles.box2}>
            <Text>Second Box</Text>
          </View>
          <View style={styles.box3}>
            <Text>Third Box</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
  },
  header: {
    color: 'purple',
    fontSize: 26,
    marginVertical: 10,
  },
  box1: {
    flex: 1,
    backgroundColor: 'lightblue',
    height: 100,
  },
  box2: {
    flex: 1,
    backgroundColor: 'red',
    height: 100,
  },
  box3: {
    flex: 1,
    backgroundColor: 'yellow',
    height: 100,
  },
});

export {CommonComponent1};
