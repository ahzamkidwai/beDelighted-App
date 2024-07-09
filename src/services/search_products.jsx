export const fetchProductSearchResults = async (keyword) => {
    try {
        const response = await fetch(`https://native.bedelighted.afucent.com/wp-json/custom/v1/search_qwertyuiop/?keyword=${encodeURIComponent(keyword)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch product search results');
        }

        const searchResults = await response.json();
        return searchResults;
    } catch (error) {
        console.error('Error fetching product search results:', error);
        return null;
    }
};
