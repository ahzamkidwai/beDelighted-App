import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';

const hairCareProduct = [
  {
    id: '1',
    title: 'Scalp Massager',
    image:
      'https://i.pinimg.com/474x/69/e4/ee/69e4ee6b0eb5e87ee71a6d044a495d0f.jpg',
  },
  {
    id: '2',
    title: 'Shampoo',
    image:
      'https://i.pinimg.com/474x/0d/bb/57/0dbb57dd3f5f464e73fab581a2d3aacd.jpg',
  },
  {
    id: '3',
    title: 'Hair Mask',
    image:
      'https://i.pinimg.com/474x/28/8d/9e/288d9edaf17abdd56df9e07593fbf475.jpg',
  },
  {
    id: '4',
    title: 'Mask',
    image:
      'https://i.pinimg.com/474x/f1/59/14/f15914816fe708c3a568dfaba96de6f1.jpg',
  },
  {
    id: '5',
    title: 'Hair Serum',
    image:
      'https://i.pinimg.com/474x/20/68/1c/20681c4fd1772c85e1028f8ce77a6a0b.jpg',
  },
  {
    id: '6',
    title: 'Hair Oil',
    image:
      'https://i.pinimg.com/474x/c3/b4/9b/c3b49bb2449c8c79c6e8cea3d955f4a5.jpg',
  },
  {
    id: '7',
    title: 'Hair Serum',
    image:
      'https://i.pinimg.com/474x/9d/fe/81/9dfe814d362b6f0a9556af974664fe29.jpg',
  },
  {
    id: '8',
    title: 'Hair Vitamins',
    image:
      'https://i.pinimg.com/474x/58/77/b2/5877b2e617f8c739af6346a7950e6a0d.jpg',
  },
];
const HairCare = () => {
  const renderItem = ({item}) => (
    <View style={styles.catContainer}>
      <Image source={{uri: item.image}} style={styles.catImage} />
      <Text style={styles.catText}>{item.title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={hairCareProduct}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default HairCare;

const styles = StyleSheet.create({
  catContainer: {
    // flex: 1,
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  catImage: {
    width: 150,
    height: 180,
    borderRadius: 8,
  },
  catText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});
