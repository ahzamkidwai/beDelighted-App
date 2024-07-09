

export const fetchAllProducts = async () => {
    try {
        const response = await fetch('https://native.bedelighted.afucent.com/wp-json/custom/v1/all-products_qwertyuiop', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        const productsData = await response.json();
        return productsData;
    } catch (error) {
        console.error('Error fetching products:', error);
        return null;
    }
};
