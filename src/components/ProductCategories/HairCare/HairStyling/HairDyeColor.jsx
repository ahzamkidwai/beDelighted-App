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
    title: 'Natural Hair Color',
    image:
      'https://i.pinimg.com/474x/7b/72/9a/7b729a7f9419b114e0659fd60e2c8337.jpg',
    price: '₹105.30',
  },
  {
    id: '2',
    title: 'Chocolate Touch',
    image:
      'https://i.pinimg.com/474x/1e/be/0f/1ebe0f765232f1710a3dc374d7d69d3e.jpg',
    price: '₹85.62',
  },
  {
    id: '3',
    title: 'Siso Hair Color (20g)',
    image:
      'https://i.pinimg.com/474x/65/21/18/6521186a1ae866f8f89e35821f874331.jpg',
    price: '₹275.50',
  },
  {
    id: '4',
    title: 'Kajal Eye Pencil',
    image:
      'https://i.pinimg.com/474x/8b/3c/d2/8b3cd2dfab2f387a6658079235cc55b8.jpg',
    price: '₹105.30',
  },
  {
    id: '5',
    title: 'Smoother, stronger, shinier',
    image:
      'https://i.pinimg.com/474x/2c/05/36/2c0536b8432dc9a5b6819d1edee30f27.jpg',
    price: '₹105.30',
  },
  {
    id: '6',
    title: 'Jaqueline Bacich-Parratt',
    image:
      'https://i.pinimg.com/474x/74/81/41/748141ac4bace5e149992e6b8c6f56a5.jpg',
    price: '₹85.62',
  },
];

const HairDyeColor = ({navigation}) => {
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
      onPress={() => navigation.navigate('HairDyeDetail', {item})}>
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

export default HairDyeColor;

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
  },
  filterButtonText: {
    marginHorizontal: 5,
    fontSize: 16,
    color: '#333',
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
  },
  sortButtonText: {
    marginHorizontal: 5,
    fontSize: 16,
    color: '#333',
  },
});
