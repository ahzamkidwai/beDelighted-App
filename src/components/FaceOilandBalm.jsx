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
    title: 'Face Oil',
    image:
      'https://i.pinimg.com/474x/a7/7d/ac/a77dacbc39b4a1e4b35af13f660beedc.jpg',
    price: '₹105.30',
  },
  {
    id: '2',
    title: 'Face Oil',
    image:
      'https://i.pinimg.com/474x/66/eb/fc/66ebfc28adc6be36efa7f8d52f43543a.jpg',
    price: '₹85.62',
  },
  {
    id: '3',
    title: 'Cleansing Balm',
    image:
      'https://i.pinimg.com/474x/41/d5/0b/41d50b14686b9f275d55a818f9613fcc.jpg',
    price: '₹275.50',
  },
  {
    id: '4',
    title: 'Fave Cleansing Balm',
    image:
      'https://i.pinimg.com/474x/f1/3b/94/f13b94ae4053ea64cc6503964270d643.jpg',
    price: '₹105.30',
  },
  {
    id: '5',
    title: 'Face Serum',
    image:
      'https://i.pinimg.com/474x/08/06/b4/0806b48a4a248234d571605b363d0d79.jpg',
    price: '₹105.30',
  },
  {
    id: '6',
    title: 'Facial Serum',
    image:
      'https://i.pinimg.com/474x/f5/62/fc/f562fcd25ce5c3e018ff46155e440227.jpg',
    price: '₹85.62',
  },
  {
    id: '7',
    title: 'Light Oil',
    image:
      'https://i.pinimg.com/474x/48/9c/36/489c368c230bc15ecb08eaa0afbe11c9.jpg',
    price: '₹85.62',
  },
  {
    id: '8',
    title: 'Light Oil',
    image:
      'https://i.pinimg.com/474x/a5/8e/cd/a58ecd2308977855e6e810d57d3d260f.jpg',
    price: '₹85.62',
  },
];

const FaceOilandBalm = ({navigation}) => {
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

export default FaceOilandBalm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    // borderRadius: 8,
    justifyContent: 'space-between',
  },
  catImage: {
    width: 150,
    height: 150,
    // borderRadius: 8,
  },
  catTitle: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0066cc',
  },
  catPrice: {
    marginTop: 4,
    fontSize: 14,
    // textAlign: 'center',
    color: 'black',
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