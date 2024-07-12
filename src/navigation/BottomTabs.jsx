import React from 'react';
import { StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import CartScreen from '../screens/CartScreen';
import WishListScreen from '../screens/WishListScreen';0
import ShopScreen from '../screens/ShopScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, paddingBottom: 4 },
        tabBarItemStyle: { padding: 5 },
        tabBarStyle: { height: 50 },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            color: '#3F6065',
            fontSize: 10,
            fontFamily: 'Fidena',
            letterSpacing: 0.6,
          },
          headerShown: false,

          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="home-sharp" size={18} color="#3F6065" />
            ) : (
              <Ionicons name="home-outline" size={18} color="#3F6065" />
            ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarLabel: 'Shop',
          tabBarLabelStyle: {
            color: '#3F6065',
            fontSize: 10,
            fontFamily: 'Fidena',
            letterSpacing: 0.6,
          },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="search-sharp" size={18} color="#3F6065" />
            ) : (
              <Ionicons name="search-outline" size={18} color="#3F6065" />
            ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarLabelStyle: {
            color: '#3F6065',
            fontSize: 10,
            fontFamily: 'Fidena',
            letterSpacing: 0.6,

          },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="shopping-bag" size={18} color="#3F6065" />
            ) : (
              <SimpleLineIcons name="handbag" size={18} color="#3F6065" />
            ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishListScreen}
        options={{
          tabBarLabel: 'Wishlist',
          tabBarLabelStyle: {
            color: '#3F6065',
            fontSize: 10,
            fontFamily: 'Fidena',
            letterSpacing: 0.6,
          },
          headerShown: true,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="heart" size={18} color="#3F6065" />
            ) : (
              <AntDesign name="hearto" size={18} color="#3F6065" />
            ),
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarLabelStyle: {
            color: '#3F6065',
            fontSize: 10,
            fontFamily: 'Fidena',
            letterSpacing: 0.6,
          },
          headerShown: true,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={18} color="#3F6065" />
            ) : (
              <Ionicons name="person-outline" size={18} color="#3F6065" />
            ),
          // tabBarButton: props => (
          //   <TabBarButton
          //     {...props}
          //     onPress={() => handleAccountPress(props,navigation)}
          //   />
          // ),
        }}
      />
    </Tab.Navigator>
   
  )
}

export default BottomTabs

const styles = StyleSheet.create({})