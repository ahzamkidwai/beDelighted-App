/* import {StyleSheet, Text, View, Pressable} from 'react-native';
import { fetchUserWishlistDetails } from '../services/user_wishlist_details';
import React, { useState, useEffect } from 'react';
import {useNavigation} from '@react-navigation/native';

const WishListScreen = () => {
  const navigation = useNavigation();

    const [wishlist, setWishlist] = useState({ items: [], total_items: 0 });

    useEffect(() => {
        const getWishlistDetails = async () => {
            const wishlistData = await fetchUserWishlistDetails();
            if (wishlistData) {
                console.log('Fetched Wishlist Details:', wishlistData); // Log the fetched wishlist details
                setWishlist(wishlistData);
            }
        };

        getWishlistDetails();
    }, []);


  return (
    <View style={{flex: 1}}>
      <View style={styles.iconContainer}>
        {/* <Pressable onPress={() => navigation.navigate(CartScreen)}>
          <SimpleLineIcons name="handbag" size={22} color="#3F6065" />
        </Pressable>
        <Pressable onPress={() => navigation.navigate(LoginScreen)}>
          <Ionicons name="person-outline" size={22} color="#3F6065" />
        </Pressable> }
        {/* <Pressable onPress={() => navigation.openDrawer()}>
            <FontAwesome name="align-justify" size={18} color="#3F6065" />
          </Pressable> }
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '50%',
        }}>
        <Text
          style={{
            fontSize: 18,
            letterSpacing: 0.6,
            color: 'black',
            fontWeight: 700,
            fontFamily: 'Fidena',
            fontSize: 18,
            letterSpacing: 0.6,
          }}>
          Wishlist
        </Text>
      </View>
      <View>
        <Text
          style={{
            borderColor: '#E6E6E6',
            borderWidth: 1,
            height: 40,
            margin: 10,
            // width: 200,
            backgroundColor: '#E6E6E6',
            // justifyContent: 'center',
            // alignItems: 'center',
            paddingHorizontal: 20,
            padding: 10,
            fontFamily: 'Fidena',
            color: 'gray',
            fontSize: 12,
            letterSpacing: 0.6,
          }}>
          The wishlist is empty.
        </Text>
        <Pressable onPress={() => navigation.navigate('Shop')}>
          <View style={{paddingHorizontal: 20, marginTop: 15}}>
            <Text
              style={{
                backgroundColor: '#3F6065',
                width: 150,
                padding: 15,
                color: 'white',
                fontFamily: 'Fidena',
                letterSpacing: 0.6,
                fontSize: 13,
              }}>
              Return to shop
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default WishListScreen;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    gap: 15,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    marginTop: 10,
  },
});
 */

import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const WishListScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <View style={styles.iconContainer}>
        {/* Uncomment and add icons and functionality as needed */}
        {/* <Pressable onPress={() => navigation.navigate(CartScreen)}>
          <SimpleLineIcons name="handbag" size={22} color="#3F6065" />
        </Pressable>
        <Pressable onPress={() => navigation.navigate(LoginScreen)}>
          <Ionicons name="person-outline" size={22} color="#3F6065" />
        </Pressable>
        <Pressable onPress={() => navigation.openDrawer()}>
            <FontAwesome name="align-justify" size={18} color="#3F6065" />
        </Pressable> */}
      </View>
      <View style={styles.centeredContainer}>
        <Text style={styles.wishlistText}>Wishlist</Text>
      </View>
      <View>
        <Text style={styles.emptyWishlistText}>The wishlist is empty.</Text>
        <Pressable onPress={() => navigation.navigate('Shop')}>
          <View style={styles.returnToShopButtonContainer}>
            <Text style={styles.returnToShopButtonText}>Return to shop</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default WishListScreen;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    gap: 15,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50%',
  },
  wishlistText: {
    fontSize: 18,
    letterSpacing: 0.6,
    color: 'black',
    fontWeight: '700',
    fontFamily: 'Fidena',
  },
  emptyWishlistText: {
    borderColor: '#E6E6E6',
    borderWidth: 1,
    height: 40,
    margin: 10,
    backgroundColor: '#E6E6E6',
    paddingHorizontal: 20,
    padding: 10,
    fontFamily: 'Fidena',
    color: 'gray',
    fontSize: 12,
    letterSpacing: 0.6,
  },
  returnToShopButtonContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
  },
  returnToShopButtonText: {
    backgroundColor: '#3F6065',
    width: 150,
    padding: 15,
    color: 'white',
    fontFamily: 'Fidena',
    letterSpacing: 0.6,
    fontSize: 13,
  },
});
