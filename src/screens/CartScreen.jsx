import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { fetchUserCartDetails } from '../services/user_cart_details';
import CartHeader from '../components/Cart/CartHeader';
import CartDetails from '../components/Cart/CartDetails';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BreadCrumbs from '../components/GlobalContent/BreadCrumbs';

const CartScreen = () => {

  const [cart, setCart] = useState({ items: [], total_items: 0, cart_total: '' });
  const navigation = useNavigation();

  useEffect(() => {
    const getCartDetails = async () => {
      const cartData = await fetchUserCartDetails();
      if (cartData) {
        console.log('Fetched Cart Details:', cartData);
        setCart(cartData);
      }
    };
    getCartDetails();
  }, []);

  const routes = [
    { name: 'Home', path: 'Home' },
    { name: 'CartScreen', path: 'CartScreen' },
  ];

  const handleNavigate = (path) => {
    navigation.navigate(path);
  };


  return (<>
    <View style={styles.handleLeft}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>

        <AntDesign name={'arrowleft'} size={24} style={{ marginLeft: 0, color: '#000' }} />

      </TouchableOpacity>

      <Text style={styles.navigationLeftText}>Cart Screen</Text>
    </View>
    <View style={styles.container1}>

    </View>
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container2}>
        <BreadCrumbs routes={routes} onNavigate={handleNavigate} />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.emptyCartText}>Cart </Text>
        {/* Component */}
        <CartHeader />
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
  </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
    backgroundColor: 'white',
    padding: 10

  },
  container1: {
    flex: 1,
    padding: 0.2,
  },
  container2: {
    flex: 1,
    padding: 10,
    position:'absolute',
    left:0
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  emptyCartText: {
    fontFamily: 'Fidena',
    fontSize: 20,
    letterSpacing: 0.8,
    color: 'black',
    fontWeight: '300',
    marginVertical: 40,
    marginTop: 100,
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
  handleLeft: {
    backgroundColor: 'white',
    borderRadius: 0,
    padding: 10,
    height: 55,
    elevation: 20,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center'

  },
  navigationLeftText: {
    fontSize: 23,
    fontWeight: '600',
    color: "#000",
    marginLeft: 20

  }
});
