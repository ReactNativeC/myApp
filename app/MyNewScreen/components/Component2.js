import {Text, View, StyleSheet, TextInput, Switch, Button, Alert} from 'react-native';
import React, {Component} from 'react';

export default class Component2 extends Component {
  onNameChanged(value) { 
    this.setState({
      name: value,
    });
  }
  onEmailChanged(value) {
    this.setState({
      email: value,
    });
  }
  onSwitchChanged(value) {
    this.setState({
      switchValue: value,
    });
  }
  onSubmit(value) {
    console.log('submitted');
  }
  constructor() {
    super();
    this.state = {
      name: 'Name',
      email: 'Email',
      switchValue: false,
    };
  }
  render() {
    return (
      <View>
        <View style={styles.textInput}>
          <TextInput
            placeholder={this.state.name}
            onChangeText={value => this.onNameChanged(value)}
            onSubmitEditing={this.onSubmit}
          />
        </View>
        <View style={styles.textInput}>
          <TextInput
            placeholder={this.state.email}
            onChangeText={value => this.onEmailChanged(value)}
            onSubmitEditing={this.onSubmit}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.item}>Remember me</Text>
          <Switch
            style={styles.item}
            value={this.state.switchValue}
            onValueChange={value => this.onSwitchChanged(value)}
          />
        </View>
        <Button
          title="Register"
          color="#229934"
          onPress={() => Alert.alert('Register button pressed')}
        />
        <View>
          <Text style={styles.text}>
            {this.state.name === 'Name' || this.state.name === ''
              ? ' '
              : 'Name: ' + this.state.name}
          </Text>
          <Text style={styles.text}>
            {this.state.email === 'Email' || this.state.email === ''
              ? ' '
              : 'Email: ' + this.state.email}
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    flex: 1,
    margin: 5,
    flexGrow: 1,
  },
});
