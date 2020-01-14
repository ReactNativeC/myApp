import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';

const USERS = [
  {
    name: 'Smith Joe',
    id: '1',
  },
  {
    name: 'Rodrigo Ganzalez',
    id: '2',
  },
  {
    name: 'Kumar Manish',
    id: '3',
  },
  {
    name: 'Kalandar Dada',
    id: '4',
  },
  {
    name: 'David Koch',
    id: '5',
  },
  {
    name: 'Jessica Ganguly',
    id: '6',
  },
  {
    name: 'Apte Radhika',
    id: '7',
  },
  {
    name: 'Maduri Kanna',
    id: '8',
  },
  {
    name: 'Suman Kumar',
    id: '9',
  },
];

function Item({name}) {
  return (
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://via.placeholder.com/350x150/635589/808080%20?Text=Digital.com%20C/O%20https://placeholder.com/',
        }}
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={USERS}
        renderItem={({item}) => <Item name={item.name} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
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
    marginVertical: 5,
    padding: 20,
  },
  name: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  image: {
    width: 350,
    height: 100,
    resizeMode: 'cover',
  },
});
