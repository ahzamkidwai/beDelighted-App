import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  Pressable,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { fetchAllProducts } from '../services/all_products';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { addtowishlist ,removefromwishlist } from '../Redux/Action';

const HomeSkinCareCategory = () => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth / 2;

  const wishlistData = useSelector((state) => state.reducerWishlist);
  const [data,setData]=useState()
  const dispatch = useDispatch();
  const AllIds = wishlistData.map(product => product.id);

  const animationValues = useRef({}).current;





  useEffect(() => {
    const getProductsData = async () => {
      const ProductsData = await fetchAllProducts();
      if(ProductsData){
        const skincareProduct = ProductsData.filter(product =>
          product.categories.includes("Skincare") || product.categories.includes("Skin Care")
      );
        // console.log('buekte7t',skincareProducts);
        setData(skincareProduct)
      }
    };

    getProductsData();
  }, [wishlistData]);

 


  const handleWishlistPress = (item) => {
    if (!animationValues[item.id]) {
      animationValues[item.id] = new Animated.Value(1);
    }
    const idExists = AllIds.includes(item.id);
    if (idExists) {
      dispatch(removefromwishlist(item));
      console.warn(wishlistData);
    } else {
      dispatch(addtowishlist(item));
      console.warn(wishlistData);
    }
    Animated.sequence([
      Animated.timing(animationValues[item.id], {
        toValue: 1.05,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(animationValues[item.id], {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const renderItem = ({ item }) => {
    
    const idExists = AllIds.includes(item.id)
    return(

    
      <View style={[styles.itemContainer]}>
      <Pressable onPress={() => navigation.navigate('SingleCart', { item })}>
        <Image source={{ uri: item.image }} style={styles.categoryImages} />
        <View style={styles.priceContainer}>
            <TouchableOpacity  onPress={() => handleWishlistPress(item)}>
              <Animated.View style={{ transform: [{ scale: animationValues[item.id] || 1 }] }}>
                <Icon
                style={{position:'absolute',right:7,top:8}}
                  name={idExists ? 'heart' : 'heart-o'}
                  size={25}
                  color={idExists ? 'red' : 'gray'}
                />
              </Animated.View>
            </TouchableOpacity>
          </View>
        <View style={styles.textContainer}>
          <Text style={styles.itemText}>{item.title}</Text>           
            <Text style={styles.priceText}>{item.price}</Text>
        </View>
      </Pressable>
    </View>
    )
  }
  return (
    <View>
      <View style={{ paddingHorizontal: 10, paddingBottom: 5 }}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Skin Care</Text>
        </View>
      </View>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.categoryContainer}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={itemWidth * 2}
        decelerationRate="fast"
      />
    </View>
  );
};

export default HomeSkinCareCategory;
const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth / 2.15;

const styles = StyleSheet.create({
  
   container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  header: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    textAlign:'center',
    justifyContent:'center'

  },
  categoryContainer: {
    paddingVertical: 10,
  },
  itemContainer: {
    alignItems: 'center',
    padding: 5,
    marginHorizontal: 5,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: itemWidth
  },
  categoryImages: {
    height: 190,
    width: itemWidth,
    borderRadius: 10,
  },
  textContainer: {
    width: '100%',
    padding: 10,
  },
  itemText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position:'relative'
  },
  priceText: {
    color: 'green',
    fontWeight: '500',
    fontSize: 16,
    paddingBottom:5
   
      },

  
});
