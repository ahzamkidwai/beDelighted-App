// import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AccountOrders from './AccountOrders';
import AccountDownload from './AccountDownload';
import AccountDetails from './AccountDetails';
import AccountSeller from './AccountSeller';
import FAQ from '../../pages/FAQ';
import ContactUs from '../../pages/ContactUs';
import AccountDashbaordItem from './AccountDashbaordItem';
import AccountBecomeASeller from './AccountBecomeASeller';
import AccountAddress from './AccountAddress';
import { useNavigation } from '@react-navigation/native';

const AccountDashboard = () => {
    const [inputArrow, setInputArrow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isEditable, setIsEditable] = useState(true);
    const [text, setText] = useState(true);
    const [items, setItems] = useState(false);
    const navigation  = useNavigation();

    const handleCoupon = () => {
        setLoading(true);
        setIsEditable(false);
        setTimeout(() => {
            setText('');
            setLoading(false);
            setIsEditable(true);
        }, 2000);
    };

    const handleInput = () => {
        setInputArrow(!inputArrow);
    };

    const [activeItem, setActiveItem] = useState('DASHBOARD');

    const handleItems = (itemName) => {
        setActiveItem(itemName);
    };
    const renderComponent = () => {
        switch (activeItem) {
            case 'DASHBOARD':
                return <AccountDashbaordItem/>;
            case 'ORDERS':
                return <AccountOrders/>;
            case 'DOWNLOADS':
                return <AccountDownload />;
            case 'ADDRESSES':
                return <AccountAddress />;
            case 'ACCOUNT_DETAILS':
                return <AccountDetails />;
            case 'MY_FAVORITE_SELLERS':
                return <AccountSeller />;
            case 'BECOME_A_SELLER':
                return <AccountBecomeASeller />;
            case 'FAQ':
                return <FAQ/>;
            case 'CONTACT_US':
                return <ContactUs/>;
            case 'LOG_OUT':
                return (navigation.navigate("AccountScreen"))
            default:
                return <AccountDashbaordItem/>;
        }
    }
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.menuItem, activeItem === 'DASHBOARD' && styles.activeItem]}
                    onPress={() => handleItems('DASHBOARD')}
                >
                    <Text style={[styles.menuText,activeItem === 'DASHBOARD' && styles.activeItem1]}>DASHBOARD</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.menuItem, activeItem === 'ORDERS' && styles.activeItem]}
                    onPress={() => handleItems('ORDERS')}
                >
                    <Text style={[styles.menuText,activeItem === 'ORDERS' && styles.activeItem1]}>ORDERS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.menuItem, activeItem === 'DOWNLOADS' && styles.activeItem]}
                    onPress={() => handleItems('DOWNLOADS')}
                >
                    <Text style={[styles.menuText,activeItem === 'DOWNLOADS' && styles.activeItem1]}>DOWNLOADS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.menuItem, activeItem === 'ADDRESSES' && styles.activeItem]}
                    onPress={() => handleItems('ADDRESSES')}
                >
                    <Text style={[styles.menuText,activeItem === 'ADDRESSES' && styles.activeItem1]}>ADDRESSES</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.menuItem, activeItem === 'ACCOUNT_DETAILS' && styles.activeItem]}
                    onPress={() => handleItems('ACCOUNT_DETAILS')}
                >
                    <Text style={[styles.menuText,activeItem === 'ACCOUNT_DETAILS' && styles.activeItem1]}>ACCOUNT DETAILS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.menuItem, activeItem === 'MY_FAVORITE_SELLERS' && styles.activeItem]}
                    onPress={() => handleItems('MY_FAVORITE_SELLERS')}
                >
                    <Text style={[styles.menuText,activeItem === 'MY_FAVORITE_SELLERS' && styles.activeItem1]}><Text style={{fontSize:20,fontWeight:'600'}}></Text> MY FAVORITE SELLERS</Text>
                    {/* <Text style={[styles.menuText,activeItem === 'MY_FAVORITE_SELLERS' && styles.activeItem]}><Text style={{fontSize:20,fontWeight:'600'}}>♡</Text> MY FAVORITE SELLERS</Text> */}
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.menuItem, activeItem === 'BECOME_A_SELLER' && styles.activeItem]}
                    onPress={() => handleItems('BECOME_A_SELLER')}
                >
                    <Text style={[styles.menuText,activeItem === 'BECOME_A_SELLER' && styles.activeItem1]}> BECOME A SELLER</Text>
                    {/* <Text style={[styles.menuText,activeItem === 'BECOME_A_SELLER' && styles.activeItem]}>⚙ BECOME A SELLER</Text> */}
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.menuItem, activeItem === 'FAQ' && styles.activeItem]}
                    onPress={() => handleItems('FAQ')}
                >
                    <Text style={[styles.menuText,activeItem === 'FAQ' && styles.activeItem1]}> FAQ</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.menuItem, activeItem === 'CONTACT_US' && styles.activeItem]}
                    onPress={() => handleItems('CONTACT_US')}
                >
                    <Text style={[styles.menuText,activeItem === 'CONTACT_US' && styles.activeItem1]}> CONTACT US</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.menuItem, activeItem === 'LOG_OUT' && styles.activeItem]}
                    onPress={() => handleItems('LOG_OUT')}
                >
                    <Text style={styles.menuText1}>LOG OUT</Text>
                    {/* <Text style={[styles.menuText1,activeItem === 'LOG_OUT' && styles.activeItem]}>LOG OUT</Text> */}
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                {renderComponent()}
            </View>


        </>
    )
}

export default AccountDashboard

const styles = StyleSheet.create({

    container: {
        padding: 1,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    menuItem: {
        paddingVertical: 15,
        backgroundColor: '#fff',
        width: 360,
        textAlign: 'start',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    activeItem: {
        backgroundColor: '#468289',
        width: 370,
        color:'#fff'
    },
    activeItem1: {
        // backgroundColor: '#468289',
        width: 370,
        color:'#fff'
    },
    menuText: {
        fontSize: 16,
        marginLeft: 9,
        fontWeight: '400',
        color:'#000'

    },
    menuText1: {
        fontSize: 16,
        marginLeft: 13,
        fontWeight: '400',
        color:'red'

    },
    content: {
        width: '100%',
        padding: 20,
    },

})