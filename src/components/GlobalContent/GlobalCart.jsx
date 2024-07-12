import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList, Pressable } from 'react-native';

const initialProducts = [
  {
    id: '1',
    image: 'https://dev.bedelighted.afucent.com/wp-content/uploads/2024/06/AdobeStock_749978431_Preview-300x300.jpeg',
    title: 'Sleeping Mask',
    price: '$500.00',
    cashback: '$4.99 CASHBACK'
  },
  {
    id: '2',
    image: 'https://dev.bedelighted.afucent.com/wp-content/uploads/2024/06/AdobeStock_749978431_Preview-300x300.jpeg',
    title: 'Facial Cleanser',
    price: '$250.00',
    cashback: '$2.99 CASHBACK'
  },
  {
    id: '3',
    image: 'https://i.pinimg.com/474x/d2/08/74/d208747ef26352b15742c515acbff79a.jpg',
    title: 'Moisturizer ',
    price: '$300.00',
    cashback: '$3.50 CASHBACK'
  },
  {
    id: '4',
    image: 'https://dev.bedelighted.afucent.com/wp-content/uploads/2024/06/AdobeStock_749978431_Preview-300x300.jpeg',
    title: 'Sunscreen',
    price: '$200.00',
    cashback: '$2.00 CASHBACK'
  },
  {
    id: '5',
    image: 'https://dev.bedelighted.afucent.com/wp-content/uploads/2024/06/AdobeStock_749978431_Preview-300x300.jpeg',
    title: 'Toner',
    price: '$180.00',
    cashback: '$1.80 CASHBACK'
  },
  {
    id: '6',
    image: 'https://dev.bedelighted.afucent.com/wp-content/uploads/2024/06/AdobeStock_749978431_Preview-300x300.jpeg',
    productName: 'Serum',
    price: '$220.00',
    cashback: '$2.20 CASHBACK'
  },
  {
    id: '7',
    image: 'https://dev.bedelighted.afucent.com/wp-content/uploads/2024/06/AdobeStock_749978431_Preview-300x300.jpeg',
    productName: 'Night Cream',
    price: '$400.00',
    cashback: '$4.00 CASHBACK'
  }
  ,
  {
    id: '8',
    image: 'https://dev.bedelighted.afucent.com/wp-content/uploads/2024/06/AdobeStock_749978431_Preview-300x300.jpeg',
    title: 'Night Cream1',
    price: '$400.001',
    cashback: '$4.001 CASHBACK'
  }

];

const GlobalCart1 = ({ image, title, price, cashback }) => {
  const imgUrl = 'https://i.pinimg.com/474x/d2/08/74/d208747ef26352b15742c515acbff79a.jpg'
  return (
    <View style={styles.cartContainer}>
      <Image
        style={styles.cartImage}
        source={{ uri:image}}
        onError={(error) => console.error('Image loading error:', error.nativeEvent.error)}
      />
      <Text style={styles.productName}>{title}</Text>
      <Text style={styles.productPrice}>{price}</Text>
      <Text style={styles.cashback}>{cashback}</Text>
      {/* <View style={styles.buttonContainer}>
        <Button title="Select options" onPress={() => console.log('Button pressed!')} />
      </View> */}
    </View>
  );
};

const GlobalCart = () => {
  const [products, setProducts] = useState(initialProducts);
  const navigation = useNavigation();

  const renderItem = ({ item }) =>{
    // console.warn("item_name",item)
    return (
    <Pressable
      onPress={() => navigation.navigate('SingleCart', { item })}
      style={{
        width: '100%',
        justifyContent:'space-between',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <GlobalCart1
        image={item.image}
        title={item.title}
        price={item.price}
        cashback={item.cashback}
      />
    </Pressable>
  )};

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default GlobalCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  flatListContent: {
    justifyContent: 'center',
  },
  cartpressContainer: {
    margin: 0,
    padding: 0
  },
  cartContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    width: '100%',
  },
  cartImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'start',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#e91e63',
    textAlign: 'start',
    marginBottom: 5,
  },
  cashback: {
    fontSize: 14,
    color: '#4caf50',
    textAlign: 'start',
    marginBottom: 10,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 10,
  }
});
