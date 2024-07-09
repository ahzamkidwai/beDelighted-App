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
    title: 'Face Gel',
    image:
      'https://i.pinimg.com/474x/83/7c/37/837c37c8122fccc1c7c136b6ccb2935e.jpg',
    price: '₹105.30',
  },
  {
    id: '2',
    title: 'Vitamin Gel',
    image:
      'https://i.pinimg.com/474x/3c/1c/89/3c1c8912f8131fea5551a8b7654cd1f2.jpg',
    price: '₹85.62',
  },
  {
    id: '3',
    title: 'Cleansing Gel',
    image:
      'https://i.pinimg.com/474x/2c/2b/8d/2c2b8d3def1baa4cb1f67a7dcf07b309.jpg',
    price: '₹275.50',
  },
  {
    id: '4',
    title: 'Anti wrinkles Gel',
    image:
      'https://i.pinimg.com/474x/f1/3b/94/f13b94ae4053ea64cc6503964270d643.jpg',
    price: '₹105.30',
  },
  {
    id: '5',
    title: 'HydroBoost Gel',
    image:
      'https://i.pinimg.com/474x/d5/a4/76/d5a4760d79dd1128b1206c6322b86d30.jpg',
    price: '₹105.30',
  },
  {
    id: '6',
    title: 'Vitamin C Gel',
    image:
      'https://i.pinimg.com/474x/58/0b/d4/580bd489cebe147fe9b0aec2a481ace3.jpg',
    price: '₹85.62',
  },
];

const FaceGel = ({navigation}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.catContainer}
      onPress={() => navigation.navigate('FaceGelDetail', {item})}>
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

export default FaceGel;

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
