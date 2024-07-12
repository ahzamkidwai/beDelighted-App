// import {StyleSheet, Text, View, Pressable} from 'react-native';
// import { fetchUserWishlistDetails } from '../services/user_wishlist_details';
// import React, { useState, useEffect } from 'react';
// import {useNavigation} from '@react-navigation/native';

// const WishListScreen = () => {
//   const navigation = useNavigation();

//     const [wishlist, setWishlist] = useState({ items: [], total_items: 0 });

//     useEffect(() => {
//         const getWishlistDetails = async () => {
//             const wishlistData = await fetchUserWishlistDetails();
//             if (wishlistData) {
//                 console.log('Fetched Wishlist Details:', wishlistData); // Log the fetched wishlist details
//                 setWishlist(wishlistData);
//             }
//         };

//         getWishlistDetails();
//     }, []);


//   return (
//     <View style={{flex: 1}}>
//       <View style={styles.iconContainer}>
//         {/* <Pressable onPress={() => navigation.navigate(CartScreen)}>
//           <SimpleLineIcons name="handbag" size={22} color="#3F6065" />
//         </Pressable>
//         <Pressable onPress={() => navigation.navigate(LoginScreen)}>
//           <Ionicons name="person-outline" size={22} color="#3F6065" />
//         </Pressable> */}
//         {/* <Pressable onPress={() => navigation.openDrawer()}>
//             <FontAwesome name="align-justify" size={18} color="#3F6065" />
//           </Pressable> */}
//       </View>
//       <View
//         style={{
//           justifyContent: 'center',
//           alignItems: 'center',
//           marginTop: '50%',
//         }}>
//         <Text
//           style={{
//             fontSize: 18,
//             letterSpacing: 0.6,
//             color: 'black',
//             fontWeight: 700,
//             fontFamily: 'Fidena',
//             fontSize: 18,
//             letterSpacing: 0.6,
//           }}>
//           Wishlist
//         </Text>
//       </View>
//       <View>
//         <Text
//           style={{
//             borderColor: '#E6E6E6',
//             borderWidth: 1,
//             height: 40,
//             margin: 10,
//             // width: 200,
//             backgroundColor: '#E6E6E6',
//             // justifyContent: 'center',
//             // alignItems: 'center',
//             paddingHorizontal: 20,
//             padding: 10,
//             fontFamily: 'Fidena',
//             color: 'gray',
//             fontSize: 12,
//             letterSpacing: 0.6,
//           }}>
//           The wishlist is empty.
//         </Text>
//         <Pressable onPress={() => navigation.navigate('Shop')}>
//           <View style={{paddingHorizontal: 20, marginTop: 15}}>
//             <Text
//               style={{
//                 backgroundColor: '#3F6065',
//                 width: 150,
//                 padding: 15,
//                 color: 'white',
//                 fontFamily: 'Fidena',
//                 letterSpacing: 0.6,
//                 fontSize: 13,
//               }}>
//               Return to shop
//             </Text>
//           </View>
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// export default WishListScreen;

// const styles = StyleSheet.create({
//   iconContainer: {
//     flexDirection: 'row',
//     gap: 15,
//     paddingHorizontal: 20,
//     justifyContent: 'flex-end',
//     marginTop: 10,
//   },
// });





import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { removefromwishlist } from '../Redux/Action';
import bedelighted from '../assets/bedelighted-logo.png'


const WishlistComponent = ({ navigation }) => {
  const data = useSelector((state) => state.reducerWishlist);
  const dispatch = useDispatch();

  console.log(data);
const handleNVIAGTE =()=>{
  console.warn("dadnasn");
}

  const removeFromWishlist = (item) => {
    dispatch(removefromwishlist(item));
    // console.warn(item.id);
  };
  const datalength = data.length
  const removeHTMLTags = (html) => {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  };

  {
    if (datalength >= 1) {
      return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <Text style={styles.header}>
            Wishlist
          </Text>
          <ScrollView style={styles.container}>
            {data.map((item) => (
              <View key={item.id} style={styles.productContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.detailsContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                  <Text style={styles.cashback}>{item.cashback}</Text>
                  {/* <Text style={styles.details} source={{ html: removeHTMLTags(item.description) }} ></Text> */}
                  <Text style={styles.details}>{removeHTMLTags(item.description)}</Text>
                </View>
                <TouchableOpacity onPress={() => removeFromWishlist(item)}>
                  <Text style={styles.remove}>X</Text>
                </TouchableOpacity>
              </View>
            ))}

          </ScrollView>
        </View>
      );
    } else {
      return (
        <View >
          {/* <Text style={{fontSize:20,color:'black',textAlign:'center'}}>Wishlist is Empty</Text> */}
          <Image source={bedelighted} style={styles.emptyImage} />
          <TouchableOpacity
            style={styles.button}
            onPress={()=> navigation.navigate('Home')} >
            <Text style={styles.buttonText}>Go and Shop Nows</Text>
          </TouchableOpacity>

        </View>
      )
    }
  }



};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5,
  },
  cashback: {
    fontSize: 14,
    color: '#5cb85c',
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
  remove: {
    fontSize: 20,
    fontWeight: '500',
    color: '#555',
    right: 0,
  },
  header: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  emptyImage: {
    width: 400,
    height: 550,
    resizeMode: 'contain',
    position: 'absolute',

  },
  button: {
    backgroundColor: '#3F6065',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginHorizontal: 100,
    marginVertical: 30,
    width: 200,
    height: 50,
    position: 'relative',
    // bottom:0,
    top: 400
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default WishlistComponent;

