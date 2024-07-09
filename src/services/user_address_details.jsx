import AsyncStorage from '@react-native-async-storage/async-storage';

const fetchUserAddresses = async () => {
    try {
        const token = await AsyncStorage.getItem('token'); // Assuming token storage in AsyncStorage

        if (!token) {
            throw new Error('No token found');
        }

        const response = await fetch('https://native.bedelighted.afucent.com/wp-json/custom/v1/user_addresses_qwertyuiop', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user addresses');
        }

        const addressesData = await response.json();
        return addressesData;
    } catch (error) {
        console.error('Error fetching user addresses:', error);
        return null;
    }
};

export { fetchUserAddresses };
