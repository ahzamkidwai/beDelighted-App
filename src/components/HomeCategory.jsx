import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';

const categories = [
  {
    id: '1',
    title: 'Electronics',
    image:
      'https://i.pinimg.com/564x/eb/d8/4a/ebd84aee9bd1feddce359d9803236f4b.jpg',
  },
  {
    id: '2',
    title: 'Clothing',
    image:
      'https://i.pinimg.com/474x/4c/6e/a8/4c6ea85bec9a25c43b159af08d4361cb.jpg',
  },
  {
    id: '3',
    title: 'Computers',
    image:
      'https://i.pinimg.com/474x/7e/e6/9b/7ee69b4b4edbc9fb402310ba99d3c1c9.jpg',
  },
  {
    id: '4',
    title: 'Home & Kitchen',
    image:
      'https://i.pinimg.com/474x/9d/bc/e1/9dbce1033bf5124003928dec3dc0761d.jpg',
  },
  {
    id: '5',
    title: 'Health & Beauty',
    image:
      'https://i.pinimg.com/474x/92/08/25/92082556ec2d9be5f6603e586bdaefa6.jpg',
  },
  {
    id: '6',
    title: 'Jewelry & Watch',
    image:
      'https://i.pinimg.com/474x/44/9d/7b/449d7b0fd78c482fe301430ed60cf6ea.jpg',
  },
];
const HomeCategories = () => {
  const renderItem = ({item}) => (
    <View style={styles.catContainer}>
      <Image source={{uri: item.image}} style={styles.catImage} />
      <Text style={styles.catText}>{item.title}</Text>
    </View>
  );

  return (
    <View>
      <Text
        style={{
          paddingHorizontal: 20,
          fontFamily: 'Fidena',
          fontSize: 16,
          letterSpacing: 0.6,
          fontWeight: 300,
          color: 'black',
        }}>
        Top Category of the month
      </Text>
      <View style={styles.container}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  );
};

export default HomeCategories;

const styles = StyleSheet.create({
  catContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    // borderRadius: 8,
    justifyContent: 'space-between',
  },
  catImage: {
    width: 150,
    height: 180,
    // borderRadius: 8,
  },
  catText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#000000',
  },
});
