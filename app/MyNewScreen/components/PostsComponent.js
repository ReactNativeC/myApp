/* this component fetches data from API and displays it in a List (FlatList) */
import {Text, View, StyleSheet, FlatList} from 'react-native';
import React from 'react';

var posts;

function loadData() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(response => (posts = response));
}

function Item({title, body}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.detail}>{body}</Text>
    </View>
  );
}

loadData();

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({item}) => <Item title={item.title} body={item.body} />}
        keyExtractor={item => {
          item.id;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  item: {
    backgroundColor: '#882399',
    marginHorizontal: 15,
    marginVertical: 2,
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  detail: {
    fontSize: 20,
    color: 'white',
  },
});
