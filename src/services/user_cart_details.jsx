import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchUserCartDetails = async () => {
    try {
        const token = await AsyncStorage.getItem('token'); // Assuming you store the JWT token in AsyncStorage
        
        if (!token) {
            throw new Error('No token found');
        }
        
        const response = await fetch('https://native.bedelighted.afucent.com/wp-json/custom/v1/cart_qwertyuiop', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch cart details');
        }

        const cartData = await response.json();
        return cartData;
    } catch (error) {
        console.error('Error fetching cart details:', error);
        return null;
    }
};
