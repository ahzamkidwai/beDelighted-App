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
    title: 'Hair Serum',
    image:
      'https://i.pinimg.com/474x/45/02/a0/4502a09e3467ac54d406887d3dfb648e.jpg',
    price: '₹105.30',
  },
  {
    id: '2',
    title: 'Hair Serum',
    image:
      'https://i.pinimg.com/474x/7c/aa/65/7caa65f5da01123d7724e57c473016be.jpg',
    price: '₹85.62',
  },
  {
    id: '3',
    title: 'Argan Oil',
    image:
      'https://i.pinimg.com/474x/66/9e/3e/669e3ed81e2a44047bf72eec442ded6d.jpg',
    price: '₹275.50',
  },
  {
    id: '4',
    title: 'LOreal',
    image:
      'https://i.pinimg.com/474x/48/8c/51/488c5140db0eb218f1dd3bb98f3c736b.jpg',
    price: '₹105.30',
  },
  {
    id: '5',
    title: 'BRAHMI OIL-stronger, shinier',
    image:
      'https://i.pinimg.com/474x/63/be/72/63be7297b203f54f180a94e0b2517d8e.jpg',
    price: '₹105.30',
  },
  {
    id: '6',
    title: 'RoseMary Oil',
    image:
      'https://i.pinimg.com/474x/b5/35/d1/b535d1b71788b1b068bdfcbef73b320b.jpg',
    price: '₹85.62',
  },
  {
    id: '7',
    title: 'Ordinary',
    image:
      'https://i.pinimg.com/474x/a0/6c/59/a06c5991b455cf06500144c9b1daff17.jpg',
    price: '₹85.62',
  },
  {
    id: '8',
    title: 'Jaqueline Bacich-Parratt',
    image:
      'https://i.pinimg.com/474x/e8/a7/f1/e8a7f1964763eec40108c367c4e37cec.jpg',
    price: '₹85.62',
  },
];

const HairOilSerum = ({navigation}) => {
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
      onPress={() => navigation.navigate('Oil & Serum Detail', {item})}>
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

export default HairOilSerum;

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
