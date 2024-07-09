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
    title: 'Depuffing Eye Patches',
    image:
      'https://i.pinimg.com/474x/98/35/ea/9835ea644efc025fc8e31b28a58afe09.jpg',
    price: '₹105.30',
  },
  {
    id: '2',
    title: 'Hydra-Gel Eye-Patches',
    image:
      'https://i.pinimg.com/474x/29/b6/70/29b670f9d859995d7ffaf88785c51395.jpg',
    price: '₹85.62',
  },
  {
    id: '3',
    title: 'Snail Hydrogel Eye Patch',
    image:
      'https://i.pinimg.com/474x/41/f3/e5/41f3e5c07ebbc361c234682ca4146d60.jpg',
    price: '₹275.50',
  },
  {
    id: '4',
    title: 'Eye Patch',
    image:
      'https://i.pinimg.com/474x/ef/93/1f/ef931fb46a29d5763d33710ab2af780f.jpg',
    price: '₹105.30',
  },
];

const EyePatches = ({navigation}) => {
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

export default EyePatches;

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
