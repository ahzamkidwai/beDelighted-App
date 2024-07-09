import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const skinCareProduct = [
  {
    id: '1',
    title: 'Cream',
    image:
      'https://i.pinimg.com/564x/f8/b9/f0/f8b9f0898b2a137c71e26a486018481c.jpg',
  },
  {
    id: '2',
    title: 'Face Mask',
    image:
      'https://i.pinimg.com/474x/0d/bb/57/0dbb57dd3f5f464e73fab581a2d3aacd.jpg',
  },
  {
    id: '3',
    title: 'Massager Face Roller',
    image:
      'https://i.pinimg.com/474x/d6/f0/18/d6f0180ad9ff07b61ec92842a75a7c63.jpg',
  },
  {
    id: '4',
    title: 'Contour Tube',
    image:
      'https://i.pinimg.com/474x/c1/c0/db/c1c0db41bb9879f83e7db4aa1da0c50f.jpg',
  },
  {
    id: '5',
    title: 'Face Serum',
    image:
      'https://i.pinimg.com/474x/4f/33/1d/4f331d7fcdc0d9b882ec6969a91685f2.jpg',
  },
  {
    id: '6',
    title: 'Cleanser',
    image:
      'https://i.pinimg.com/474x/d2/08/74/d208747ef26352b15742c515acbff79a.jpg',
  },
];
const SkinCare = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (

    <Pressable onPress={() => navigation.navigate('SingleCart',{item})} style={styles.catContainer}>
    <View  >
      <Image source={{ uri: item.image }} style={styles.catImage} />
      <Text style={styles.catText}>{item.title}</Text>
    </View>
    </Pressable>
  );
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={skinCareProduct}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </>
  );
};

export default SkinCare;

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
