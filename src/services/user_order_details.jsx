import AsyncStorage from '@react-native-async-storage/async-storage';

const fetchUserOrders = async () => {
    try {
        const token = await AsyncStorage.getItem('token'); // Assuming token storage in AsyncStorage

        if (!token) {
            throw new Error('No token found');
        }

        const response = await fetch('https://native.bedelighted.afucent.com/wp-json/custom/v1/user_orders_qwertyuiop', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user orders');
        }

        const ordersData = await response.json();
        return ordersData;
    } catch (error) {
        console.error('Error fetching user orders:', error);
        return null;
    }
};

export { fetchUserOrders };
