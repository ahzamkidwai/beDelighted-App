// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   FlatList,
//   Dimensions,
//   Pressable,
//   TouchableOpacity,
//   Animated,
// } from 'react-native';
// import React, { useEffect, useRef, useState } from 'react';
// import {useNavigation} from '@react-navigation/native';
// import { fetchAllProducts } from '../services/all_products';
// import { useDispatch, useSelector } from 'react-redux';
// import Icon from 'react-native-vector-icons/FontAwesome'; 
// import { addtowishlist, removefromwishlist } from '../Redux/Action';

// const HomeHairCareCategory = () => {
//   const navigation = useNavigation();
//   const screenWidth = Dimensions.get('window').width;
//   const itemWidth = screenWidth / 2;
//   const dispatch = useDispatch();

  
// const [haircaredata,setHaircaredata]=useState([])
// const wishlistData = useSelector((state) => state.reducerWishlist);
// const animationValues = useRef({}).current;
// const AllIds = wishlistData.map(product => product.id);


// useEffect(() => {
//   const getProductsData = async () => {
//     try {
//       const ProductsData = await fetchAllProducts();
//       if (ProductsData) {
//         const HaircareProduct = ProductsData.filter(product =>
//           product.categories.includes("Haircare") || product.categories.includes("Hair Care")
//         );
//         setHaircaredata(HaircareProduct);
//       }
//     } catch (error) {
//       console.error('Error fetching hair care products:', error);
//       // Handle error state or retry mechanism if needed
//     }
//   };

//   getProductsData();
// }, [wishlistData,haircaredata,handleWishlistPress]);






// const handleWishlistPress = (item) => {
  

//   // Update animation value
//   if (!animationValues[item.id]) {
//       animationValues[item.id] = new Animated.Value(1);
//   }

//   const idExists = AllIds.includes(item.id);
  
//   if (idExists) {
//       dispatch(removefromwishlist(item));
//       console.warn('Removed from wishlist:', wishlistData);
//       console.log(AllIds);
//   } else {
//       dispatch(addtowishlist(item));
//       console.warn('Added to wishlist:', wishlistData);
//       console.log(AllIds);
//   }

//   Animated.sequence([
//       Animated.timing(animationValues[item.id], {
//           toValue: 1.5,
//           duration: 200,
//           useNativeDriver: true,
//       }),
//       Animated.timing(animationValues[item.id], {
//           toValue: 1,
//           duration: 200,
//           useNativeDriver: true,
//       }),
//   ]).start();
// };



// const renderItem = ({ item }) => {
//     const idExists = AllIds.includes(item.id);
//     return (
//       <View>

//       <Pressable
//         style={[styles.itemContainer, { width: itemWidth }]}
//         onPress={() => navigation.navigate('SingleCart', { item })}>

//         <Image source={{ uri: item.image }} style={styles.categoryImages} />
//         <View style={styles.textContainer}>
//           <Text style={styles.itemText}>{item.title}</Text>
//           <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' ,paddingBottom:5}}>

//           <Text
//             style={{
//               color: 'green',
//               fontWeight: '500',
//               fontSize: 16,
//             }}>
//             {item.price}
//           </Text>
//           <TouchableOpacity onPress={() => handleWishlistPress(item)}>
//             <Animated.View style={{ transform: [{ scale: animationValues[item.id] || 1 }] }}>
//               <Icon
//                 name={idExists ? 'heart' : 'heart-o'}
//                 size={20}
//                 color={idExists ? 'red' : 'gray'}
//                 />
//             </Animated.View>
//           </TouchableOpacity>
//                 </View>
//         </View>
//       </Pressable>
//           </View>
//     );
//   };


//   return (
//     <View>
//       <View style={{paddingHorizontal: 10, paddingBottom: 5}}>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             // paddingHorizontal: 15,
//             backgroundColor: '#E7E7E7',
//           }}>
//           <Text
//             style={{
//               fontSize: 16,
//               fontWeight: '300',
//               fontFamily: 'Fidena',
//               letterSpacing: 0.6,
//               padding: 10,
//               color: '#000000',
//             }}>
//             Hair Care
//           </Text>
//         </View>
//         <FlatList
//           horizontal
//           data={haircaredata}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//           contentContainerStyle={styles.categoryContainer}
//           showsHorizontalScrollIndicator={false}
//           pagingEnabled
//           snapToInterval={itemWidth * 2}
//           decelerationRate="fast"
//         />
//       </View>
//     </View>
//   );
// };

// export default HomeHairCareCategory;

// const styles = StyleSheet.create({
//   categoryContainer: {
//     // paddingHorizontal: 10,
//     // flexDirection: 'row',
//     // justifyContent: 'space-between',
//   },
//   itemContainer: {
//     alignItems: 'center',
//     paddingTop: 5,
//   },
//   categoryImages: {
//     height: 190,
//     width: 190,
//     // borderRadius: 4,
//   },
//   textContainer: {
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     width: '100%',
//     paddingHorizontal: 10,
//   },
//   itemText: {
//     color: '#007FFF',
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//   },
// });







import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  Pressable,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import { fetchAllProducts } from '../services/all_products';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { addtowishlist, removefromwishlist } from '../Redux/Action';

const HomeHairCareCategory = () => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth / 2;
  const dispatch = useDispatch();

  const [haircaredata, setHaircaredata] = useState([]);
  const wishlistData = useSelector((state) => state.reducerWishlist);
  const animationValues = useRef({}).current;
  const AllIds = wishlistData.map(product => product.id);

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const ProductsData = await fetchAllProducts();
        if (ProductsData) {
          const HaircareProduct = ProductsData.filter(product =>
            product.categories.includes("Haircare") || product.categories.includes("Hair Care")
          );
          setHaircaredata(HaircareProduct);
        }
      } catch (error) {
        console.error('Error fetching hair care products:', error);
        // Handle error state or retry mechanism if needed
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
    } else {
        dispatch(addtowishlist(item));
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
    const idExists = AllIds.includes(item.id);
    return (
      <View style={[styles.itemContainer, { width: itemWidth }]}>
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
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hair Care</Text>
      </View>
      <FlatList
        horizontal
        data={haircaredata}
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

export default HomeHairCareCategory;
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / 2.15;

// const styles = StyleSheet.create({
  
//   container: {
//     flex: 1,
//     backgroundColor: '#F8F8F8',
//     paddingHorizontal: 10,
//     paddingBottom: 5,
//   },
//   header: {
//     backgroundColor: 'black',
//     padding: 10,
//     borderRadius: 5,
//     marginVertical: 10,
//   },
//   headerText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#fff',
//     textAlign:'center',
//     justifyContent:'center'

//   },
//   categoryContainer: {
//     paddingVertical: 10,
//   },
//   itemContainer: {
//     alignItems: 'center',
//     padding: 5,
//     marginHorizontal: 4,
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   categoryImages: {
//     height: 190,
//     width: itemWidth,
//     borderRadius: 10,
//   },
//   textContainer: {
//     width: '100%',
//     padding: 10,
//   },
//   itemText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 5,
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     position:'relative'
//   },
//   priceText: {
//     color: 'green',
//     fontWeight: '500',
//     fontSize: 16,
//     paddingBottom:5
   
//       },
// });
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