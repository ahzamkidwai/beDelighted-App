import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchUserWishlistDetails = async () => {
    try {
        const token = await AsyncStorage.getItem('token'); // Assuming you store the JWT token in AsyncStorage
        
        if (!token) {
            throw new Error('No token found');
        }
        
        const response = await fetch('https://native.bedelighted.afucent.com/wp-json/custom/v1/wishlist_qwertyuiop', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch wishlist details');
        }

        const wishlistData = await response.json();
        return wishlistData;
    } catch (error) {
        console.error('Error fetching wishlist details:', error);
        return null;
    }
};
