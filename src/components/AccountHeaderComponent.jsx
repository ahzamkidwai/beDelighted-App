import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const AccountHeaderComponent = () => {
    return (
        <View style={{margin:0,padding:0}}>
            <Text style={styles.emptyCartText}>My account </Text>
            <View style={styles.container}>
                <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/128/847/847969.png' }} 
                    style={styles.profileImage}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.greeting}>Hello!</Text>
                    <Text style={styles.email}>023.ashutosh@gmail.com</Text>
                </View>
            </View>

        </View>
    )
}

export default AccountHeaderComponent

const styles = StyleSheet.create({
    emptyCartText: {
        fontFamily: 'Fidena',
        fontSize: 20,
        
        letterSpacing: 0.8,
        color: 'black',
        fontWeight: 'bold',
        textAlign:'center',
        marginTop:75
        // marginVertical: 40,
        // marginTop: 100,
    },
    container: {
      display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        // borderWidth: 1,
        // borderColor: '#ccc',
        // borderRadius: 10,
        margin: 10,
        // justifyContent:'space-between'
      },
      profileImage: {
        width: 70,
        height: 70,
        borderRadius: 25,
        // marginRight:10,
        position:'absolute',
        // marginLeft:1,
        left:-80
      },
      textContainer: {
        flexDirection: 'column',
      },
      greeting: {
        fontSize: 16,
        color: '#000',
      },
      email: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
      },
})