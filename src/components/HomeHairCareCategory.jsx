import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  Pressable,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';

const hairCareProducts = [
  {
    id: '1',
    title: 'Face Cream',
    productPrice: '$ 300',
    imageUri:
      'https://i.pinimg.com/474x/66/a2/bc/66a2bc392c78a205e33b55e6dc11ad99.jpg',
    cashback: '$4.00 CASHBACK',
  },
  {
    id: '2',
    title: 'Swiss Beauty natural product',
    productPrice: '$ 300',
    imageUri:
      'https://i.pinimg.com/474x/30/82/f7/3082f72dce7c49c33bc08c03d32675e4.jpg',
    cashback: '$4.00 CASHBACK',
  },
  {
    id: '3',
    title: 'Face Cream',
    productPrice: '$ 300',
    imageUri:
      'https://i.pinimg.com/474x/66/a2/bc/66a2bc392c78a205e33b55e6dc11ad99.jpg',
    cashback: '$4.00 CASHBACK',
  },
  {
    id: '4',
    title: 'Face Mask',
    productPrice: '$ 300',
    imageUri:
      'https://i.pinimg.com/474x/7a/97/6f/7a976fb92e368ed60fce8d88ac4dbd2e.jpg',
    cashback: '$4.00 CASHBACK',
  },
  {
    id: '5',
    title: 'Face Cream',
    productPrice: '$ 300',
    imageUri:
      'https://i.pinimg.com/474x/a6/9c/87/a69c87888f5d04f203d85e6367e1741c.jpg',
    cashback: '$4.00 CASHBACK',
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

const HomeHairCareCategory = ({toggleButton}) => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth / 2;
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const renderItem = ({item}) => (
    <View style={{marginTop: 10}}>
      <Pressable
        style={[styles.itemContainer, {width: itemWidth}]}
        onPress={() => navigation.navigate('SingleCart', {item})}>
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
        {hairCareProducts.map((_, index) => (
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
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Hair Care</Text>
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
        onScroll={handleScroll}
        ref={flatListRef}
      />
      {renderDotIndicator()}
    </View>
  );
};

export default HomeHairCareCategory;

const styles = StyleSheet.create({
  categoryContainer: {},
  itemContainer: {
    position: 'relative',
  },
  categoryImages: {
    height: 180,
    width: 185,
  },
  textContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // paddingHorizontal: 10,
  },
  itemText: {
    color: '#007FFF',
    marginTop: 5,
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
});
