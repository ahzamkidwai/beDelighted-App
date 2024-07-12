import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

const CartHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewicon}>
        <Text>
          <AntDesign name="creditcard" size={40} color="#db4437" style={styles.socialIcon} />
        </Text>
      </View>
      <View>
        <Text style={styles.text}>Upon placing this order a cashback of</Text>
        <Text style={styles.cashback}>$4,000</Text>
        <Text style={styles.text}>will be credited to your wallet.</Text>
      </View>
    </View>
  )
}

export default CartHeader;

const styles = StyleSheet.create({
  container: {
    width: 398,
    justifyContent: 'flex-start',
    margin: 2,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    // marginRight: 3,
    gap:30,
    backgroundColor: 'lightgrey',
    borderTopWidth: 5,
    borderBlockStartColor: 'blue'
  },
  socialIcon: {
    margin: 10,
    textAlign: 'center',
    cursor: 'pointer',
    color: 'blue',
    fontSize: 25
  },
  viewicon: {
    marginLeft: 5,
  },
  text: {
    fontSize: 16,
  },
  cashback: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  Icon: {
    width: 40,
    height: 30,
    borderWidth: 2,
    borderColor: "blue",
    backgroundColor: "white",

  }

})