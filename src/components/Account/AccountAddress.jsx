import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AccountAddress = () => {
  return (
    <View>
      <Text style={styles.heading}>Billing address</Text>
      <Text style={styles.line} />
      <Text style={styles.underText}>You Have Not Set Up This Type Of Address Yet.</Text>

      <Text style={styles.editText}> Edit</Text>

      <Text  style={styles.heading}>Shipping address </Text>
      <Text style={styles.line} />

      <Text style={styles.underText}> You Have Not Set Up This Type Of Address Yet.</Text>

      <Text style={styles.editText}> Edit</Text>
    </View>
  )
}

export default AccountAddress

const styles = StyleSheet.create({

  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    // marginVertical: 5,
  },
  heading:{
    fontSize:20,
    color:'black',
    fontWeight:'500',
    // marginVertical: 15,
    marginTop:15
  },
  underText:{
    fontSize:15,
    fontWeight:'400',

    marginVertical: 10,
    color:'black'

  },
  editText:{
    fontSize:15,
    fontWeight:'400',

    marginVertical: 10,
    color:'blue'

  }
})