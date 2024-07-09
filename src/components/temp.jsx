import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const MoisturizerAndDayCreamDetail = ({route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.horizontalLine} />
        <Text style={styles.price}>{item.price}</Text>

        <Text
          style={{
            fontSize: 14,
            color: 'black',
            marginHorizontal: 5,
            fontFamily: 'Montserrat-Thin',
          }}>
          {'\n'} Status :{' '}
          <Text
            style={{
              color: '#8bc500',
              fontFamily: 'Montserrat-Bold',
              fontWeight: '600',
            }}>
            {' '}
            In Stock {'\n'}
          </Text>
        </Text>
        <Text
          style={{
            fontSize: 12,
            marginHorizontal: 10,
            fontFamily: 'Montserrat-Regular',
          }}>
          Seller: Admin
        </Text>

        <View>
          <Text>$2.00 CASHBACK</Text>
        </View>
      </View>
    </View>
  );
};

export default MoisturizerAndDayCreamDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  detailsContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  image: {height: 260},
  title: {
    paddingHorizontal: 10,
    marginTop: 20,
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: 0.6,
    fontWeight: '300',
    color: 'black',
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#e1e1e1',
    marginVertical: 10,
  },
  price: {
    paddingHorizontal: 10,
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    fontWeight: '400',
    color: 'black',
    // fontWeight: '700',
  },
});
