import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useState , useEffect} from 'react';
import {
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AccountHeaderComponent from '../components/Account/AccountHeaderComponent';

import { fetchUserProfile } from '../services/user_profile';
import { fetchUserOrders } from '../services/user_order_details';
import { fetchUserAddresses } from '../services/user_address_details';
import AccountDashboard from '../components/Account/AccountDashboard';

const AccountScreen = () => {
  const [inputArrow, setInputArrow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEditable, setIsEditable] = useState(true);
  const [text, setText] = useState(true);

  const handleCoupon = () => {
    setLoading(true);
    setIsEditable(false);
    setTimeout(() => {
      setText('');
      setLoading(false);
      setIsEditable(true);
    }, 2000);
  };

  const handleInput = () => {
    setInputArrow(!inputArrow);
  };

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
    <AccountDashboard/>
    </ScrollView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#F1F1F1',
    padding: 20,
    borderRadius: 0,
    // elevation: 5,
    margin: 20,
    gap: 11,
    width: '90%',
    borderWidth: 2,
    borderColor: '#E1E1E1',
  },
  loaderContainer: {
    top: 5,
    left: 2,
    bottom: 8,
    right: 0,
    zIndex: 1,
  },
  applyButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 0.9,
    height: 48,
  },
  iconstyle: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 0,
    width: '90%',
  },
  mainCouponArea: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  couponContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    width: '80%',
    marginRight: 13,
  },
  couponInput: {
    padding: 10,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
    flexGrow: 1,
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  couponLabel: {
    // marginBottom:0
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
    fontSize: 16,
    color: 'grey',
  },
  socialIcon: {
    margin: 10,
    textAlign: 'center',
    cursor: 'pointer',
    color: 'grey',
    // borderWidth:1
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  summaryItem2: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  shippingInfo: {
    fontSize: 14,
    color: '#777',
    marginVertical: 2,
  },
  changeAddress: {
    fontSize: 14,
    color: '#007bff',
    marginVertical: 2,
  },
  shippingOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#007bff',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioLabel: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  radioValue: {
    fontSize: 16,
    color: '#333',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  checkoutButton: {
    backgroundColor: '#2d3e50',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    width: 405,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});