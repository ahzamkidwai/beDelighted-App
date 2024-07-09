import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

const skinCareProduct = [
  {
    id: '1',
    title: 'BB Cream',
    image:
      'https://i.pinimg.com/474x/bd/65/91/bd65916ada077652497ffc5843cdd58a.jpg',
    price: '₹105.30',
  },
  {
    id: '2',
    title: 'S-40 Core2 BB Cream',
    image:
      'https://i.pinimg.com/474x/45/b4/00/45b400df6a45a1bdc434cb2bc8af1cdd.jpg',
    price: '₹85.62',
  },
  {
    id: '3',
    title: 'BB Cream Beauty Balm',
    image:
      'https://i.pinimg.com/474x/4f/c9/7a/4fc97ac076d5b8f739eb97f498dd06cb.jpg',
    price: '₹275.50',
  },
  {
    id: '4',
    title: 'Light And Medium BB Cream',
    image:
      'https://i.pinimg.com/474x/7c/49/fb/7c49fbebfbd6307adc440938a3f52cfe.jpg',
    price: '₹105.30',
  },
  {
    id: '5',
    title: 'SPF 40 BB Cream',
    image:
      'https://i.pinimg.com/474x/95/6f/68/956f68e1f4bfa5bab0878ca034298b6d.jpg',
    price: '₹105.30',
  },
  {
    id: '6',
    title: 'Golden Cream',
    image:
      'https://i.pinimg.com/474x/e7/59/84/e759840f759ef68d0d628fb5ff373b0c.jpg',
    price: '₹105.30',
  },
];

const BBCream = ({navigation}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.catContainer}
      onPress={() => navigation.navigate('BBCreamDetail', {item})}>
      <Image source={{uri: item.image}} style={styles.catImage} />
      <Text style={styles.catTitle}>{item.title}</Text>
      <Text style={styles.catPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={20} color="#333" />
          <Text style={styles.filterButtonText}>Filter</Text>
          <Ionicons name="chevron-down" size={20} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortButton}>
          <Ionicons name="funnel" size={20} color="#333" />
          <Text style={styles.sortButtonText}>Sort by latest</Text>
          <Ionicons name="chevron-down" size={20} color="#333" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={skinCareProduct}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default BBCream;

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
    color: '#888',
  },
  filterContainer: {
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
