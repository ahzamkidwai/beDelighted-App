import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';


const AccountOrders = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewicon}>
        <Text>
          <AntDesign name="creditcard" size={40} color="#db4437" style={styles.socialIcon} />
        </Text>
      </View>
      <View>
        <Text style={styles.text}>No order has been made yet.</Text>
        <Text style={styles.cashback}>Browse Product</Text>
      </View>
    </View>
  )
}

export default AccountOrders

const styles = StyleSheet.create({
  container: {
    width: 370,
    justifyContent: 'flex-start',
    margin: 1,
    height:70,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    // marginRight: 3,
    gap: 30,
    backgroundColor: '#c5deee',
    borderTopWidth: 5,
    borderBlockStartColor: '#1E85BE'
  },
  socialIcon: {
    margin: 10,
    textAlign: 'center',
    cursor: 'pointer',
    // color: '#1E85BE',
    color:'#000',

    fontSize: 25
  },
  viewicon: {
    marginLeft: 5,
  },
  text: {
    fontSize: 16,
    color:'#000'
  },
  cashback: {
    fontSize: 14,
    fontWeight: 'bold',
    color:'#000'

  },
  Icon: {
    width: 40,
    height: 30,
    borderWidth: 2,
    borderColor: "blue",
    backgroundColor: "white",

  }

})