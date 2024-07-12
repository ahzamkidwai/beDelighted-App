import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Filter from '../../../GlobalContent/Filter';
import Sort from '../../../GlobalContent/Sort';

const skinCareProduct = [
  {
    id: '1',
    title: 'MARS Kajal',
    image:
      'https://i.pinimg.com/474x/81/6e/2d/816e2d0f7bd075e84138dd263b85891f.jpg',
    price: '₹105.30',
  },
  {
    id: '2',
    title: 'Organic Netra Baby Kajal',
    image:
      'https://i.pinimg.com/474x/11/24/df/1124df08ac80f26af1febddabd947486.jpg',
    price: '₹85.62',
  },
  {
    id: '3',
    title: 'Maybelline York Colossal Kajal',
    image:
      'https://i.pinimg.com/474x/2e/d1/e2/2ed1e2c56e8e22fd8cca9126fecd4e84.jpg',
    price: '₹275.50',
  },
  {
    id: '4',
    title: 'Kajal Eye Pencil',
    image:
      'https://i.pinimg.com/474x/5d/54/d9/5d54d998280fe324fd5fb48487124de4.jpg',
    price: '₹105.30',
  },
  {
    id: '5',
    title: 'MISS ROSE Eye Enhancing Black Kajal',
    image:
      'https://i.pinimg.com/474x/ac/77/66/ac77661718a250ba1270412596c28f87.jpg',
    price: '₹105.30',
  },
  {
    id: '6',
    title: 'Kohl Of Honour Intense Kajal',
    image:
      'https://i.pinimg.com/474x/a7/bd/5e/a7bd5ed27adb465c81aa6ba58876044f.jpg',
    price: '₹85.62',
  },
  {
    id: '7',
    title: 'Maliao Auto Kohl Kajal Pencil',
    image:
      'https://i.pinimg.com/474x/0c/df/cf/0cdfcf8a663d6755b98af36506846240.jpg',
    price: '₹85.62',
  },
  {
    id: '8',
    title: 'Eye Kajal Stick',
    image:
      'https://i.pinimg.com/474x/69/1e/53/691e539bbec871de9ae1bec8f53903c5.jpg',
    price: '₹85.62',
  },
];

const Kajal = ({navigation}) => {
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
      onPress={() => navigation.navigate('KajalDetail', {item})}>
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

export default Kajal;

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
