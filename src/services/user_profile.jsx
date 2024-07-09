import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to fetch user profile data
export const fetchUserProfile = async () => {
    try {
        // Retrieve the stored token from AsyncStorage
        const token = await AsyncStorage.getItem('token');

        if (!token) {
            throw new Error('No token found');
        }

        const response = await fetch('https://native.bedelighted.afucent.com/wp-json/custom/v1/profile_qwertyuiop', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch profile data');
        }

        const profileData = await response.json();
        return profileData;
    } catch (error) {
        console.error('Error fetching profile data:', error);
        return null;
    }
};
