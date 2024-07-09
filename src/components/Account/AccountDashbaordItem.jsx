import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const AccountDashbaordItem = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.menuItem}>Hello 023.ashutosh@gmail.com (not 023.ashutosh@gmail.com? Log out)</Text>

            <Text style={styles.menuItem}>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</Text>
        </View>
    )
}

export default AccountDashbaordItem

const styles = StyleSheet.create({

    container: {
        padding: 1,
        // backgroundColor: '#fff',
        // borderWidth: 1,
        // borderColor: '#ccc',
        // width:"100%"
    },
    menuItem: {
        paddingVertical: 10,
        backgroundColor: '#fff',
        width: 360,
        textAlign: 'start',
       
    },
    activeItem: {
        backgroundColor: '#468289',
        width: 380,
    },
    menuText: {
        fontSize: 16,
        marginLeft: 9,
        fontWeight: 'bold'
    },
    content: {
        width: '70%',
        padding: 20,
    },
})