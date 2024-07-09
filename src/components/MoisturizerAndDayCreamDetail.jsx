import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
          {'\n '}
        </Text>

        <View
          style={{
            marginHorizontal: 10,

            //borderWidth: 1,
            //borderColor: 'red',
          }}>
          <Text
            style={{
              borderWidth: 0.5,
              marginRight: '70%',
              fontFamily: 'Montserrat-Regular',
              fontSize: 10.5,
              borderRadius: 2,
            }}>
            $2.00 CASHBACK
          </Text>
        </View>

        <View style={{marginHorizontal: 10, marginVertical: 15}}>
          <Text
            style={{
              fontFamily: 'Montserrat-Regular',
            }}>
            Quantity
          </Text>
          <View
            style={{
              marginVertical: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderWidth: 0.5,
                borderColor: '#999999',
              }}>
              <AntDesign name="minus" size={24} color={'#999999'} />
              <Text style={{fontSize: 20, color: '#999999'}}>0</Text>
              <AntDesign name="plus" size={24} color={'#999999'} />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 10,
            marginHorizontal: 20,
            marginVertical: 20,
          }}>
          <View style={{flexDirection: 'row', gap: 8}}>
            <AntDesign name="hearto" size={20} color={'#999999'} />
            <Text style={{fontSize: 16, color: '#999999'}}>Wishlist</Text>
          </View>

          <View style={{flexDirection: 'row', gap: 8}}>
            <View style={{borderWidth: 1, borderColor: '#999999'}}>
              <Feather name="bar-chart-2" size={20} color={'#999999'} />
            </View>
            <Text style={{fontSize: 16, color: '#999999'}}>Compare</Text>
          </View>
        </View>
        <View style={styles.horizontalLine} />
        <View>
          <Text style={{fontFamily: 'Montserrat-Regular', fontSize: 12}}>
            Categories :{' '}
            <Text style={{color: 'rgb(0, 153, 204)'}}>
              Face Oils & Balm Skincare
            </Text>
          </Text>
        </View>
        {/* Social Media Icons */}
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
