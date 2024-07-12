import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const HomeDeals = () => {
  return (
    <>
      {/* Deals of the day */}
      <View style={{paddingHorizontal: 8}}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Fidena',
            letterSpacing: 0.6,
            fontWeight: '300',
            padding: 10,
            backgroundColor: '#E7E7E7',
            marginBottom: 5,
            color: '#000000',
          }}>
          Deals Of The Day
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/474x/7d/06/91/7d0691f7cc4f4b306fa31104090b2bc5.jpg',
            }}
            style={styles.categoryImages}
          />
          <View style={styles.textContainer}>
            <Text style={{color: 'green', fontWeight: 500, fontSize: 16}}>
              $ 300
            </Text>
            <Text style={styles.itemText}>Fragrance & Beyond</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/474x/21/44/ac/2144ac77377d63ce5962fdd1b511a56f.jpg',
            }}
            style={styles.categoryImages}
          />
          <View style={styles.textContainer}>
            <Text style={{color: 'green', fontWeight: 500, fontSize: 16}}>
              $ 300
            </Text>
            <Text style={styles.itemText}>Fragrance & Beyond</Text>
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
    height: 190,
    width: 190,
  },
  textContainer: {
    paddingHorizontal: 10,
  },
  itemText: {
    color: '#007FFF',
  },
});
