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
    title: 'Face Mask',
    image:
      'https://i.pinimg.com/474x/9a/54/e6/9a54e6e886f8e51fe31e610c179c5b0a.jpg',
    price: '₹105.30',
  },
  {
    id: '2',
    title: 'Orange Beauty Facial Mask',
    image:
      'https://i.pinimg.com/474x/68/82/38/68823842bc0ffea2882af84da4537b5b.jpg',
    price: '₹85.62',
  },
  {
    id: '3',
    title: 'SomeByMi Mask',
    image:
      'https://i.pinimg.com/474x/b8/a0/cc/b8a0ccd7183adbea6e739c6ba1707261.jpg',
    price: '₹275.50',
  },
  {
    id: '4',
    title: 'Collagen Sheet Mask',
    image:
      'https://i.pinimg.com/474x/28/10/e6/2810e6f04f4d11152f9a68679458de78.jpg',
    price: '₹105.30',
  },
  {
    id: '5',
    title: 'Sheet Mask',
    image:
      'https://i.pinimg.com/474x/d2/3b/ce/d23bce4612b7feb3b2376a412da7881a.jpg',
    price: '₹105.30',
  },
  {
    id: '6',
    title: 'Pull Up Mask 30 Sheets',
    image:
      'https://i.pinimg.com/474x/91/64/02/9164026aa42f756dda3d1bd6a7146e6f.jpg',
    price: '₹85.62',
  },
  {
    id: '7',
    title: 'Mama earth Vitamin-C',
    image:
      'https://i.pinimg.com/564x/f1/80/5c/f1805cf6a536b135d3b79dcc4dee067a.jpg',
    price: '₹85.62',
  },
  {
    id: '8',
    title: 'Honey Face Mask',
    image:
      'https://i.pinimg.com/474x/a7/af/dc/a7afdca0241e5a5be8130e7d6543717c.jpg',
    price: '₹85.62',
  },
];

const SheetMask = ({navigation}) => {
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
      onPress={() => navigation.navigate('SheetMaskDetail', {item})}>
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

export default SheetMask;

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
