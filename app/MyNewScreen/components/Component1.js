import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

export default class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message,
      greeting: this.props.greeting,
      showName: true,
    };
  }

  static defaultProps = {
    message: 'this is component 1 with default props',
    greeting: 'Hi,',
  };

  render() {
    let name = this.state.showName ? 'Noor' : '**Name is Hidden**';
    return (
      <View style={styles.component}>
        <Text style={styles.description}>{this.state.message}</Text>
        <Text style={styles.description}>
          {this.state.greeting} {name}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },
  description: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    color: 'green',
  },
  greeting: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 16,
    fontWeight: '400',
    color: 'blue',
    fontSize: 24,
  },
});

