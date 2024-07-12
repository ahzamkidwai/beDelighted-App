import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';
import Filter from '../../../GlobalContent/Filter';
import Sort from '../../../GlobalContent/Sort';

const skinCareProduct = [
  {
    id: '1',
    title: 'Face Mask for Acne',
    image:
      'https://i.pinimg.com/474x/2c/7b/97/2c7b977c8612ea133f9491213148b8a3.jpg',
    price: '₹105.30',
  },
  {
    id: '2',
    title: 'Vitamin-C Mask',
    image:
      'https://i.pinimg.com/474x/1b/5f/99/1b5f99c0493caf0a557aa1e8ba0581c8.jpg',
    price: '₹85.62',
  },
  {
    id: '3',
    title: 'D Tan Face Mask',
    image:
      'https://i.pinimg.com/474x/d0/2d/ce/d02dcea292577b78ffee8c66a3f10975.jpg',
    price: '₹275.50',
  },
  {
    id: '4',
    title: 'Turmeric Mask',
    image:
      'https://i.pinimg.com/474x/0d/11/b4/0d11b4b4a34cb5bfb24c6f692f39a187.jpg',
    price: '₹105.30',
  },
  {
    id: '5',
    title: 'Rosy Glow',
    image:
      'https://i.pinimg.com/474x/c1/41/a0/c141a06d6e80f483267c8f988eeb4f11.jpg',
    price: '₹105.30',
  },
  {
    id: '6',
    title: 'Vitamin-C Clay Mask',
    image:
      'https://i.pinimg.com/474x/27/ea/0a/27ea0afb64cfdb3fb373ee751a55b92b.jpg',
    price: '₹85.62',
  },
  {
    id: '7',
    title: 'Honey Face Mask',
    image:
      'https://i.pinimg.com/474x/06/b2/58/06b2582a78f141866554978336f201e8.jpg',
    price: '₹85.62',
  },
  {
    id: '8',
    title: 'Dead Sea Mud Mask',
    image:
      'https://i.pinimg.com/474x/b3/0c/88/b30c88c0611212b7eced04b0d82f77b8.jpg',
    price: '₹85.62',
  },
];

const FaceMaskPacks = ({navigation}) => {
  const [sortOption, setSortOption] = useState(null);
  const [filterOption, setFilterOption] = useState(null);

  const applyFilters = products => {
    if (!filterOption) return products;

    return products.filter(product => {
      const price = parseFloat(product.price.replace('₹', ''));
      return price >= filterOption[0] && price <= filterOption[1];
    });
  };

  const sortedProducts = [...skinCareProduct].sort((a, b) => {
    if (sortOption === 'priceLowToHigh') {
      return (
        parseFloat(a.price.replace('₹', '')) -
        parseFloat(b.price.replace('₹', ''))
      );
    } else if (sortOption === 'priceHighToLow') {
      return (
        parseFloat(b.price.replace('₹', '')) -
        parseFloat(a.price.replace('₹', ''))
      );
    }
    return 0;
  });

  const filteredAndSortedProducts = applyFilters(sortedProducts);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.catContainer}
      onPress={() => navigation.navigate('FaceMaskPackDetail', {item})}>
      <Image source={{uri: item.image}} style={styles.catImage} />
      <Text style={styles.catTitle}>{item.title}</Text>
      <Text style={styles.catPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.filterSortContainer}>
        <Filter setFilterOption={setFilterOption} />
        <Sort setSortOption={setSortOption} />
      </View>
      <FlatList
        data={filteredAndSortedProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default FaceMaskPacks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  catContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  catImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  catTitle: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  catPrice: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
  },
  filterSortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    color: 'black',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    color: 'black',
  },
  filterButtonText: {
    marginHorizontal: 5,
    fontSize: 16,
    color: '#333',
    color: 'black',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    color: 'black',
  },
  sortButtonText: {
    marginHorizontal: 5,
    fontSize: 16,
    color: '#333',
    color: 'black',
  },
});
