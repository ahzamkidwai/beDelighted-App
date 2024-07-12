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
      'https://i.pinimg.com/474x/3f/5e/a0/3f5ea002be828e643f1a1095aacf3fc5.jpg',
    price: '₹105.30',
  },
  {
    id: '2',
    title: 'Chocolate Touch',
    image:
      'https://i.pinimg.com/474x/0c/75/81/0c75818f4a2087dd760253c17bb950f4.jpg',
    price: '₹85.62',
  },
  {
    id: '3',
    title: 'Siso Hair Color (20g)',
    image:
      'https://i.pinimg.com/474x/74/49/47/7449470042aef6d8a0ed90b97e8d84e7.jpg',
    price: '₹275.50',
  },
  {
    id: '4',
    title: 'Pantene',
    image:
      'https://i.pinimg.com/474x/8e/5e/7c/8e5e7ca35e465132020079f3e576732c.jpg',
    price: '₹105.30',
  },
  {
    id: '5',
    title: 'Kerastase Smoother, stronger, shinier',
    image:
      'https://i.pinimg.com/564x/18/ac/23/18ac2305212e17f55e49bc889d6158b5.jpg',
    price: '₹105.30',
  },
  {
    id: '6',
    title: 'FARMASI',
    image:
      'https://i.pinimg.com/474x/d5/72/5e/d5725ec4a1455610e12fba7c51fd7337.jpg',
    price: '₹85.62',
  },
];

const Shampoo = ({navigation}) => {
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
      onPress={() => navigation.navigate('ShampooDetail', {item})}>
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
export default Shampoo;

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
    color: '#333',
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
