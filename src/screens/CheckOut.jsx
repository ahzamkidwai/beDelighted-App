import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import HomeHeader from '../components/HomeHeader';
import BreadCrumbs from '../components/GlobalContent/BreadCrumbs';
import CheckoutHeader from '../components/CheckoutComponents/CheckoutHeader';
import CheckoutSummary from '../components/CheckoutComponents/CheckoutSummary';
import CheckoutFooter from '../components/CheckoutComponents/CheckoutFooter';
import ShippingAddress from '../components/CheckoutComponents/ShippingAddress';

const CheckOut = ({ navigation }) => {
  const routes = [
    { name: 'Home', path: 'Home' },
    { name: 'CartScreen', path: 'CartScreen' },
    { name: 'Checkout', path: 'Checkout' },
  ];

  const handleNavigate = (path) => {
    navigation.navigate(path);
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>

      <View style={styles.container}>
        <BreadCrumbs routes={routes} onNavigate={handleNavigate} />
      </View>

      <HomeHeader />

      <CheckoutHeader />

      <CheckoutSummary />

      <ShippingAddress/>
     
      <CheckoutFooter />

    </ScrollView>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

