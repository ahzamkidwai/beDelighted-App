import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const CheckoutHeader = () => {
    return (
        <>
            <Text style={styles.entrytitle}>Checkout</Text>
            <View style={styles.woocommerceMessage}>
                <View style={styles.woocommerceMessageContent}>
                    <Text style={styles.woocommerceMessageContentIcon}>
                        <Ionicons name="chatbubble-outline" size={20} />
                    </Text>
                    <Text style={styles.woocommerceMessageInfo}>
                        Upon placing this order a cashback of {'\n'} $4.99 will be credited
                        to your wallet.
                    </Text>
                </View>
            </View>
            <View style={styles.horizontalLine}>
                <View style={styles.line} />
            </View>
        </>
    )
}

export default CheckoutHeader

const styles = StyleSheet.create({
      entrytitle: {
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 50,
        color: 'black',
        fontSize: 24,
        fontFamily: 'Arial',
        fontWeight: 'bold',
      },
      woocommerceMessage: {
        paddingHorizontal: 20,
        marginHorizontal: 20,
        padding: 20,
        backgroundColor: '#f1f1f1',
      },
      woocommerceMessageContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      woocommerceMessageContentIcon: {
        paddingHorizontal: 10,
      },
      woocommerceMessageInfo: {
        padding: 10,
        fontSize: 16,
        color: 'black',
        fontFamily: 'Montserrat',
        color: '#666',
      },
      line: {
        borderBottomColor: '#f1f1f1',
        borderBottomWidth: 2,
        width: '100%',
      },
      horizontalLine: {
        marginVertical: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
      },
    
})