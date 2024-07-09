// import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
// import React from 'react';
// import {useNavigation} from '@react-navigation/native';

// const HomeFragranceCategory = () => {
//   const navigation = useNavigation();
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
//               fontSize: 20,
//               fontWeight: 'bold',
//               padding: 10,
//             }}>
//             Fragrance
//           </Text>
//         </View>
//       </View>
//       <View style={styles.categoryContainer}>
//         <View style={styles.itemContainer}>
//           <Image
//             source={{
//               uri: 'https://i.pinimg.com/474x/b3/49/9a/b3499a2811ec4b80ae3afc91f4e9c355.jpg',
//             }}
//             style={styles.categoryImages}
//           />
//           <View style={styles.textContainer}>
//             <Text style={{color: 'green', fontWeight: 500, fontSize: 16}}>
//               $ 300
//             </Text>
//             <Text style={styles.itemText}>Perfume</Text>
//           </View>
//         </View>
//         <View style={styles.itemContainer}>
//           <Image
//             source={{
//               uri: 'https://i.pinimg.com/474x/d7/5e/25/d75e25d87125f35c88500869420ac7af.jpg',
//             }}
//             style={styles.categoryImages}
//           />
//           <View style={styles.textContainer}>
//             <Text style={{color: 'green', fontWeight: 500, fontSize: 16}}>
//               $ 300
//             </Text>
//             <Text style={styles.itemText}>Chanel</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default HomeFragranceCategory;

// const styles = StyleSheet.create({
//   categoryContainer: {
//     paddingHorizontal: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   itemContainer: {
//     alignItems: 'center',
//   },
//   categoryImages: {
//     height: 190,
//     width: 190,
//     borderRadius: 4,
//   },
//   textContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   itemText: {
//     color: '#007FFF',
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
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const hairCareProducts = [
  {
    id: '1',
    title: 'Dior',
    price: '$ 3000',
    imageUri:
      'https://i.pinimg.com/474x/72/4c/41/724c41ad5f78c41727da792c9c10a824.jpg',
  },
  {
    id: '2',
    title: 'Chanel',
    price: '$ 300',
    imageUri:
      'https://i.pinimg.com/474x/d7/5e/25/d75e25d87125f35c88500869420ac7af.jpg',
  },
  {
    id: '3',
    title: 'Versace',
    price: '$ 300',
    imageUri:
      'https://i.pinimg.com/564x/00/ff/7c/00ff7c737ba8b39ae79c73af4e956355.jpg',
  },
  {
    id: '4',
    title: 'Gucci Flora',
    price: '$ 300',
    imageUri:
      'https://i.pinimg.com/474x/29/44/1b/29441b3aedac2f1fb41c58888f029b06.jpg',
  },
  {
    id: '5',
    title: 'Michael Kors',
    price: '$ 300',
    imageUri:
      'https://i.pinimg.com/474x/7a/23/f9/7a23f9a3c160f54be65aafb35293a780.jpg',
  },
  {
    id: '6',
    title: 'Prada',
    price: '$ 300',
    imageUri:
      'https://i.pinimg.com/474x/a0/6b/be/a06bbee35f083bcc2a5bf895b84cf12e.jpg',
  },
  {
    id: '7',
    title: 'Zara',
    price: '$ 300',
    imageUri:
      'https://i.pinimg.com/474x/b8/55/06/b8550632b95030077cdc14f67b921595.jpg',
  },
  {
    id: '8',
    title: 'White Musk',
    price: '$ 300',
    imageUri:
      'https://i.pinimg.com/474x/71/69/e5/7169e54b41c2813a66d9e168d95ccafc.jpg',
  },
];

const HomeFragranceCategory = () => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth / 2;

  const renderItem = ({item}) => (
    <View>
      <Pressable
        style={[styles.itemContainer, {width: itemWidth}]}
        onPress={() => navigation.navigate('FragranceDetail', {item})}>
        <Image source={{uri: item.imageUri}} style={styles.categoryImages} />
        <View style={styles.textContainer}>
          <Text style={styles.itemText}>{item.title}</Text>
          <Text
            style={{
              color: 'green',
              fontWeight: '500',
              fontSize: 16,
            }}>
            {item.price}
          </Text>
        </View>
      </Pressable>
    </View>
  );
  return (
    <View>
      <View style={{paddingHorizontal: 10, paddingBottom: 5}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // paddingHorizontal: 15,
            backgroundColor: '#E7E7E7',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '300',
              fontFamily: 'Fidena',
              letterSpacing: 0.6,
              padding: 10,
              color: '#000000',
            }}>
            Fragrance
          </Text>
        </View>
        <FlatList
          horizontal
          data={hairCareProducts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.categoryContainer}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToInterval={itemWidth * 2}
          decelerationRate="fast"
        />
      </View>
    </View>
  );
};

export default HomeFragranceCategory;

const styles = StyleSheet.create({
  categoryContainer: {
    // paddingHorizontal: 10,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  itemContainer: {
    alignItems: 'center',
    paddingTop: 5,
  },
  categoryImages: {
    height: 190,
    width: 190,
    // borderRadius: 4,
  },
  textContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 10,
  },
  itemText: {
    color: '#007FFF',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
