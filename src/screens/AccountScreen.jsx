import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import AccountHeaderComponent from '../components/Account/AccountHeaderComponent';
import { fetchUserProfile } from '../services/user_profile';
import { fetchUserOrders } from '../services/user_order_details';
import { fetchUserAddresses } from '../services/user_address_details';
import AccountDashboard from '../components/Account/AccountDashboard';

const AccountScreen = () => {

  useEffect(() => {
    const getUserProfile = async () => {
      const profileData = await fetchUserProfile();
      if (profileData) {
        console.log('User Profile:', profileData);
      }
    };
    getUserProfile();
  }, []);

  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const fetchAddresses = async () => {
      const addressesData = await fetchUserAddresses();
      if (addressesData) {
        console.log('Fetched Addresses:', addressesData); // Log fetched addresses
        setAddresses(addressesData);
      }
    };

    fetchAddresses();
  }, []);


  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const ordersData = await fetchUserOrders();
      if (ordersData) {
        console.log('Fetched Orders:', ordersData); // Log fetched orders
        setOrders(ordersData);
      }
    };

    fetchOrders();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.headerContainer}>

      <AccountHeaderComponent />
      <AccountDashboard />
    </ScrollView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({

  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
    flexGrow: 1,
    backgroundColor: 'white',
    paddingVertical: 20,
  },

});