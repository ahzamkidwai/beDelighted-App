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
    title: 'MARS Kajal',
    image:
      'https://img.freepik.com/free-photo/eyeshadow-palette-with-multiple-shades-cosmetic-powder_23-2150260876.jpg?ga=GA1.1.909963268.1698345736&semt=ais_user',
    price: '₹105.30',
  },
  {
    id: '2',
    title: 'Organic Netra Baby Kajal',
    image:
      'https://img.freepik.com/free-photo/eyeshadow-palette-with-multiple-shades-cosmetic-powder_23-2150260870.jpg?ga=GA1.1.909963268.1698345736&semt=ais_user',
    price: '₹85.62',
  },
  {
    id: '3',
    title: 'Maybelline York Colossal Kajal',
    image:
      'https://img.freepik.com/premium-photo/various-makeup-products-black-surface_93675-79631.jpg?ga=GA1.1.909963268.1698345736&semt=ais_user',
    price: '₹275.50',
  },
  {
    id: '4',
    title: 'Kajal Eye Pencil',
    image:
      'https://img.freepik.com/premium-photo/eyeshadow-makeup-10-pallate-20_725646-83.jpg?ga=GA1.1.909963268.1698345736&semt=ais_user',
    price: '₹105.30',
  },
  {
    id: '5',
    title: 'MISS ROSE Eye Enhancing Black Kajal',
    image:
      'https://img.freepik.com/free-photo/combination-makeup-textures_23-2150039218.jpg?ga=GA1.1.909963268.1698345736&semt=ais_user',
    price: '₹105.30',
  },
  {
    id: '6',
    title: 'Kohl Of Honour Intense Kajal',
    image:
      'https://img.freepik.com/free-photo/view-eyeshadow-palette-with-shades-cosmetic-powder_23-2150260868.jpg?ga=GA1.1.909963268.1698345736&semt=ais_user',
    price: '₹85.62',
  },
  {
    id: '7',
    title: 'Maliao Auto Kohl Kajal Pencil',
    image:
      'https://img.freepik.com/premium-photo/color-professional-cosmetic-palette-dark-background-close-up_93675-80762.jpg?ga=GA1.1.909963268.1698345736&semt=ais_user',
    price: '₹85.62',
  },
  {
    id: '8',
    title: 'Eye Kajal Stick',
    image:
      'https://img.freepik.com/premium-photo/set-female-cosmetics-pink-background_1048944-8369215.jpg?ga=GA1.1.909963268.1698345736&semt=ais_user',
    price: '₹85.62',
  },
];

const EyeShadow = ({navigation}) => {
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
      onPress={() => navigation.navigate('EyeShadowDetail', {item})}>
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

export default EyeShadow;

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
