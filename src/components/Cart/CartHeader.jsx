import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CartHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewicon}>
        <AntDesign
          name="creditcard"
          size={40}
          color="#0066cc"
          style={styles.socialIcon}
        />
      </View>
      <View>
        <Text style={styles.text}>Upon placing this order a cashback of</Text>
        <Text style={styles.cashback}>$4,000</Text>
        <Text style={styles.text}>will be credited to your wallet.</Text>
      </View>
    </View>
  );
};

export default CartHeader;

const styles = StyleSheet.create({
  container: {
    // margin: 2,
    // padding: 10,
    // display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    gap: 60,
    //justifyContent: 'space-evenly',
    width: '100%',
    // marginRight: 3,
    // gap: 30,
    backgroundColor: '#f6f5f8',
    borderTopWidth: 5,
    borderBlockStartColor: '#1e85be',
  },
  socialIcon: {
    // marginHorizontal: 30,
    textAlign: 'center',
    cursor: 'pointer',
    color: '#1e85be',
    fontSize: 20,
    paddingHorizontal: 10,
  },
  viewicon: {
    // marginLeft: 5,
  },
  text: {
    fontSize: 16,
  },
  cashback: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  Icon: {
    // width: 40,
    // height: 30,
    // borderWidth: 2,
    // borderColor: 'blue',
    // backgroundColor: 'white',
  },
});
