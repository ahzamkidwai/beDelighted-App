import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import DealTimer from './DealTimer';

const HomeDeals = ({toggleButton}) => {
  console.log('Toggle Button inside HomeDeals : ', toggleButton);
  return (
    <>
      {/* Deals of the day */}
      <View
        style={{
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            padding: 10,
            backgroundColor: '#E7E7E7',
            marginBottom: 10,
            color: '#000000',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Fidena',
                letterSpacing: 0.6,
                fontWeight: '300',
                // paddingHorizontal: 10,
              }}>
              Deals Of The Day
            </Text>
            <DealTimer />
          </View>
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 5,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/474x/7d/06/91/7d0691f7cc4f4b306fa31104090b2bc5.jpg',
            }}
            style={styles.categoryImages}
          />
          {!toggleButton && (
            <View style={styles.bannerContainer}>
              <Text style={styles.bannerText}>Trial</Text>
            </View>
          )}

          <View style={styles.textContainer}>
            <Text style={styles.itemText}>Fragrance & Beyond</Text>
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
              }}>
              $4.99 CASHBACK
            </Text>
            <Text
              style={{
                color: '#43454b',
                fontWeight: 500,
                fontSize: 16,
                marginTop: 6,
              }}>
              $ 300
            </Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/474x/21/44/ac/2144ac77377d63ce5962fdd1b511a56f.jpg',
            }}
            style={styles.categoryImages}
          />
          {!toggleButton && (
            <View style={styles.bannerContainer}>
              <Text style={styles.bannerText}>Trial</Text>
            </View>
          )}
          <View style={styles.textContainer}>
            <Text style={styles.itemText}>Fragrance & Beyond</Text>
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
              }}>
              $4.99 CASHBACK
            </Text>
            <Text
              style={{
                color: '#43454b',
                fontWeight: 500,
                fontSize: 16,
                marginTop: 6,
              }}>
              $ 300
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default HomeDeals;

const styles = StyleSheet.create({
  categoryContainer: {},
  itemContainer: {},
  categoryImages: {
    height: 180,
    width: 180,
    // borderRadius: 4,
  },
  textContainer: {
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    // paddingHorizontal: 10,
  },
  itemText: {
    color: '#007FFF',
    marginVertical: 5,
  },
  bannerContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#92be2b',
    paddingVertical: 4,
    paddingHorizontal: 12,
    // borderRadius: 3,
  },
  bannerText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
