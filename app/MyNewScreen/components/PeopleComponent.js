import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';

var People = [];
var rndNumber = Math.floor(Math.random() * 90);

for (var i = rndNumber; i < rndNumber + 10; i++) {
  People.push({
    id: "'" + i + "'",
    name: 'Smith ' + i,
    imagePath: 'https://randomuser.me/api/portraits/men/' + i + '.jpg',
  });
}

function Item({name, imagePath}) {
  return (
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={{
          uri: imagePath,
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
        data={People}
        renderItem={({item}) => (
          <Item name={item.name} imagePath={item.imagePath} />
        )}
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
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});
