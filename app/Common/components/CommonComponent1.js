import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';

export default class CommonComponent1 extends Component {
  onPressed() {
    console.log("Box pressed!");
    alert('You pressed me!');
  }
  render() {
    return (
      <View style={styles.component}>
        <Text style={styles.header}>{this.props.headerText}</Text>
        <View style={styles.container}>
          <TouchableHighlight
            onPress={this.onPressed}
            style={styles.box1}
            underlayColor="white">
            <View>
              <Text>First Box</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity onPress={this.onPressed} style={styles.box2} activeOpacity={0.6}>
            <View>
              <Text style={styles.whiteText}>Second Box</Text>
            </View>
          </TouchableOpacity>
          <TouchableHighlight onPress={this.onPressed} style={styles.box3}>
            <View style={styles.box3}>
              <Text>Third Box</Text>
            </View>
          </TouchableHighlight>
        </View>
        <Button
          onPress={() => {
            alert('You Clicked me!');
          }}
          title="I am Button - Click Me"
          color="#199800"
        />
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
    backgroundColor: 'brown',
    height: 100,
  },
  box3: {
    flex: 1,
    backgroundColor: 'yellow',
    height: 100,
  },
  whiteText: {
    color: 'white',
    fontWeight: '500',
  }
});

export {CommonComponent1};
