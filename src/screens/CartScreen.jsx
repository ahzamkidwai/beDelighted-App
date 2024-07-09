import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useState, useEffect, useReducer} from 'react';
import {fetchUserCartDetails} from '../services/user_cart_details';
import CartHeader from '../components/Cart/CartHeader';
import CartProductContent from '../components/Cart/CartProductContent';
import CartDetails from '../components/Cart/CartDetails';

const CartScreen = () => {
  const [cart, setCart] = useState({items: [], total_items: 0, cart_total: ''});

  useEffect(() => {
    const getCartDetails = async () => {
      const cartData = await fetchUserCartDetails();
      if (cartData) {
        console.log('Fetched Cart Details:', cartData); // Log the fetched cart details
        setCart(cartData);
      }
    };
    getCartDetails();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.emptyCartText}>Cart </Text>
        {/* Component */}
        <CartHeader />
        <CartProductContent />
        <CartDetails />
        {/* Component */}

        <Text style={styles.newInStoreText}>New in Store!</Text>
      </View>
      <View style={styles.productContainer}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/474x/1d/ff/9c/1dff9c3f7bfa25e1c5c399faa58dc8ee.jpg',
          }}
          style={styles.image}
        />
        <Text style={styles.productName}>Blush</Text>
        <Text style={styles.productPrice}>$ 550/-</Text>
        <Text style={styles.addToCartButton}>Add to Cart</Text>
      </View>
      <View style={styles.productContainer}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/474x/1d/ff/9c/1dff9c3f7bfa25e1c5c399faa58dc8ee.jpg',
          }}
          style={styles.image}
        />
        <Text style={styles.productName}>Blush</Text>
        <Text style={styles.productPrice}>$ 550/-</Text>
        <Text style={styles.addToCartButton}>Add to Cart</Text>
      </View>
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  emptyCartText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,

    letterSpacing: 0.9,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 40,
    marginTop: 50,
  },
  newInStoreText: {
    fontSize: 22,
    fontFamily: 'Fidena',
    color: 'black',
    fontWeight: '800',
    marginBottom: 10,
  },
  productContainer: {
    alignItems: 'center',
    marginBottom: 40,
    width: '100%',
  },
  image: {
    width: 300,
    height: 200,
    marginTop: 20,
    // resizeMode: 'contain',
  },
  productName: {
    paddingTop: 15,
    fontSize: 16,
    color: '#0000CC',
  },
  productPrice: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '500',
  },
  addToCartButton: {
    fontSize: 16,
    marginTop: 12,
    color: 'white',
    fontWeight: '500',
    backgroundColor: '#3b3b3b',
    padding: 16,
    borderRadius: 60,
  },
});
