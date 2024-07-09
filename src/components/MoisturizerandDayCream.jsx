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
    title: 'Day Cream',
    image:
      'https://i.pinimg.com/474x/93/dd/8a/93dd8ab46fc5827416a419665bea4fb2.jpg',
    price: '₹105.30',
  },
  {
    id: '2',
    title: 'Gigi Acnon Day Cream',
    image:
      'https://i.pinimg.com/474x/47/22/3f/47223fbd4039e9531c6812cf5372dbdd.jpg',
    price: '₹85.62',
  },
  {
    id: '3',
    title: 'Day Cream Moisturizer',
    image:
      'https://i.pinimg.com/474x/d5/f5/e0/d5f5e07e7d99320082d7be333be75019.jpg',
    price: '₹275.50',
  },
  {
    id: '4',
    title: 'Ponds Day Cream',
    image:
      'https://i.pinimg.com/474x/2c/65/4c/2c654cbace4dbb3657171c22535e1d2f.jpg',
    price: '₹105.30',
  },
  {
    id: '5',
    title: 'ESTÉE LAUDER DayWear',
    image:
      'https://i.pinimg.com/474x/fe/b0/b4/feb0b4a63c9d734888b169c88d422dc7.jpg',
    price: '₹105.30',
  },
  {
    id: '6',
    title: 'Moisturizer',
    image:
      'https://i.pinimg.com/474x/bb/bd/c1/bbbdc1187e1521c5ff14960ca3a4cb71.jpg',
    price: '₹85.62',
  },
];

const MoisturizerandDayCream = ({navigation}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.catContainer}
      onPress={() =>
        navigation.navigate('MoisturizerAndDayCreamDetail', {item})
      }>
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

export default MoisturizerandDayCream;

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
