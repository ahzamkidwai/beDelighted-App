// import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
// import React from 'react';
// import {useNavigation} from '@react-navigation/native';

// const HomeSkinCareCategory = () => {
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
//             Skin Care
//           </Text>
//           {/* <Pressable onPress={() => navigation.navigate('SkinCare')}>
//             <Text
//               style={{
//                 fontSize: 14,
//                 fontWeight: 'bold',
//                 padding: 10,
//               }}>
//               View All
//             </Text>
//           </Pressable> */}
//         </View>
//       </View>
//       <View style={styles.categoryContainer}>
//         <View style={styles.itemContainer}>
//           <Image
//             source={{
//               uri: 'https://i.pinimg.com/474x/a6/9c/87/a69c87888f5d04f203d85e6367e1741c.jpg',
//             }}
//             style={styles.categoryImages}
//           />
//           <View style={styles.textContainer}>
//             <Text style={{color: 'green', fontWeight: 500, fontSize: 16}}>
//               $ 300
//             </Text>
//             <Text style={styles.itemText}>Face Cream</Text>
//           </View>
//         </View>
//         <View style={styles.itemContainer}>
//           <Image
//             source={{
//               uri: 'https://i.pinimg.com/474x/7a/97/6f/7a976fb92e368ed60fce8d88ac4dbd2e.jpg',
//             }}
//             style={styles.categoryImages}
//           />
//           <View style={styles.textContainer}>
//             <Text style={{color: 'green', fontWeight: 500, fontSize: 16}}>
//               $ 300
//             </Text>
//             <Text style={styles.itemText}>Face Mask</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default HomeSkinCareCategory;

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
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeSkinCareCategory = ({toggleButton}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();
  const skinCareProducts = [
    {
      id: '1',
      title: 'Face Cream',
      productPrice: '$ 300',
      imageUri:
        'https://i.pinimg.com/474x/a6/9c/87/a69c87888f5d04f203d85e6367e1741c.jpg',
      cashback: '$4.00 CASHBACK',
    },
    {
      id: '2',
      title: 'Swiss Beauty natural product',
      productPrice: '$ 300',
      imageUri:
        'https://i.pinimg.com/474x/7a/97/6f/7a976fb92e368ed60fce8d88ac4dbd2e.jpg',
      cashback: '$1.00 CASHBACK',
    },
    {
      id: '3',
      title: 'Face Cream',
      productPrice: '$ 300',
      imageUri:
        'https://i.pinimg.com/474x/7a/97/6f/7a976fb92e368ed60fce8d88ac4dbd2e.jpg',
      cashback: '$1.50 CASHBACK',
    },
    {
      id: '4',
      title: 'Face Mask',
      productPrice: '$ 300',
      imageUri:
        'https://i.pinimg.com/474x/7a/97/6f/7a976fb92e368ed60fce8d88ac4dbd2e.jpg',
      cashback: '$.05 CASHBACK',
    },
    {
      id: '5',
      title: 'Face Cream',
      productPrice: '$ 300',
      imageUri:
        'https://i.pinimg.com/474x/a6/9c/87/a69c87888f5d04f203d85e6367e1741c.jpg',
      cashback: '$1.00 CASHBACK',
    },
    {
      id: '6',
      title: 'Face Mask',
      productPrice: '$ 300',
      imageUri:
        'https://i.pinimg.com/474x/7a/97/6f/7a976fb92e368ed60fce8d88ac4dbd2e.jpg',
      cashback: '$4.00 CASHBACK',
    },
    {
      id: '7',
      title: 'Face Cream',
      productPrice: '$ 300',
      imageUri:
        'https://i.pinimg.com/474x/a6/9c/87/a69c87888f5d04f203d85e6367e1741c.jpg',
      cashback: '$4.00 CASHBACK',
    },
    {
      id: '8',
      title: 'Face Mask',
      productPrice: '$ 300',
      imageUri:
        'https://i.pinimg.com/474x/7a/97/6f/7a976fb92e368ed60fce8d88ac4dbd2e.jpg',
      cashback: '$4.00 CASHBACK',
    },
  ];

  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth / 2;

  const renderItem = ({item}) => (
    <View style={{marginTop: 10}}>
      <Pressable
        style={[styles.itemContainer, {width: itemWidth}]}
        onPress={() => navigation.navigate('SingleCart', {item})}>
        {/* onPress={() => navigation.navigate('Detail', {item})}> */}
        <Image source={{uri: item.imageUri}} style={styles.categoryImages} />
        {!toggleButton && (
          <View style={styles.bannerContainer}>
            <Text style={styles.bannerText}>Trial</Text>
          </View>
        )}
        <View style={styles.textContainer}>
          <Text style={styles.itemText}>{item.title}</Text>
          <Text
            style={{
              fontFamily: 'Montserrat-Regular',
              borderWidth: 1,
              borderColor: '#43454b',
              width: '70%',
              paddingHorizontal: 3,
              borderRadius: 3,
              fontWeight: '600',
              fontSize: 12,
              marginTop: 5,
            }}>
            {item.cashback}
          </Text>
          <Text
            style={{
              color: '#43454b',
              fontWeight: 500,
              fontSize: 16,
              marginTop: 6,
              marginBottom: 10,
            }}>
            {item.productPrice}
          </Text>
        </View>
      </Pressable>
    </View>
  );

  const handleScroll = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(offsetX / itemWidth);
    setActiveIndex(index);
  };

  const renderDotIndicator = () => {
    return (
      <View style={styles.dotContainer}>
        {skinCareProducts.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dotIndicator,
              {backgroundColor: index === activeIndex ? '#406066' : '#cccccc'},
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={{paddingHorizontal: 10}}>
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#E7E7E7',
        }}>
        <Text
          style={{
            fontFamily: 'Fidena',
            fontSize: 16,
            letterSpacing: 0.6,
            fontWeight: '300',
            padding: 10,
            color: '#000000',
          }}>
          Skin Care
        </Text>
      </View> */}

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Skin Care</Text>
      </View>

      <FlatList
        horizontal
        data={skinCareProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.categoryContainer}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={itemWidth * 2}
        decelerationRate="fast"
        onScroll={handleScroll}
      />
      {renderDotIndicator()}
    </View>
  );
};

export default HomeSkinCareCategory;

const styles = StyleSheet.create({
  categoryContainer: {
    // paddingHorizontal: 10,
  },
  itemContainer: {
    position: 'relative',
    // alignItems: 'center',
    // marginRight: 10,
  },
  categoryImages: {
    height: 180,
    width: 185,
    // borderRadius: 4,
  },
  textContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // paddingHorizontal: 10,
    // width: '100%',
  },
  itemText: {
    color: '#0066cc',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E7E7E7',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '300',
    fontFamily: 'Fidena',
    letterSpacing: 0.6,
    padding: 10,
    color: '#000000',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 2,
  },
  dotIndicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    marginBottom: 20,
  },
  bannerContainer: {
    position: 'absolute',
    top: 0,
    right: 12,
    backgroundColor: '#92be2b',
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  bannerText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});