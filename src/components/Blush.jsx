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
    title: 'Blush',
    image:
      'https://i.pinimg.com/474x/9c/1c/c4/9c1cc4e5ef3ddac0795459333a454d28.jpg',
    price: '₹105.30',
  },
  {
    id: '2',
    title: 'Long Lasting Blush',
    image:
      'https://i.pinimg.com/474x/f6/e7/db/f6e7db55ff0e0064f313c010542a89b7.jpg',
    price: '₹85.62',
  },
  {
    id: '3',
    title: 'High End Blushes',
    image:
      'https://i.pinimg.com/474x/01/7b/2a/017b2a79e4814c3457a4f1f243e670f2.jpg',
    price: '₹275.50',
  },
  {
    id: '4',
    title: 'Beauty Blush',
    image:
      'https://i.pinimg.com/474x/71/44/15/7144159e7361047ee7cf8b890aa0bb1f.jpg',
    price: '₹105.30',
  },
  {
    id: '5',
    title: 'Rose Blush',
    image:
      'https://i.pinimg.com/474x/65/26/41/652641a434d1fc3f228d6bbebc02eed6.jpg',
    price: '₹105.30',
  },
  {
    id: '6',
    title: 'Matt Blush',
    image:
      'https://i.pinimg.com/474x/c7/0c/d6/c70cd6567398ca69d36c227ecc2fadc4.jpg',
    price: '₹85.62',
  },
];

const Blush = ({navigation}) => {
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

export default Blush;

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
