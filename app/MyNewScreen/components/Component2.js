import {Text, View, StyleSheet, TextInput} from 'react-native';
import React, {Component} from 'react';

export default class Component2 extends Component {
  onNameChanged(value) { 
    this.setState({
      Name: value,
    });
  }
  onEmailChanged(value) {
    this.setState({
      Email: value,
    });
  }
  constructor() {
    super();
    this.state = {
      Name: 'Name',
      Email: 'Email',
    };
  }
  render() {
    return (
      <View>
        <View style={styles.textInput}>
          <TextInput
            placeholder={this.state.Name}
            onChangeText={value => this.onNameChanged(value)}
          />
        </View>
        <View style={styles.textInput}>
          <TextInput
            placeholder={this.state.Email}
            onChangeText={value => this.onEmailChanged(value)}
          />
        </View>
        <View>
          <Text style={styles.text}>
            {this.state.Name === 'Name' || this.state.Name === ''
              ? ' '
              : 'Name: ' + this.state.Name}
          </Text>
          <Text style={styles.text}>
            {this.state.Email === 'Email' || this.state.Email === ''
              ? ' '
              : 'Email: ' + this.state.Email}
          </Text>
        </View>
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
    color: 'red',
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 0.5,
    height: 30,
    padding: 5,
    margin: 5,
  },
  text: {
    margin: 5,
    color: 'green',
  },
});
