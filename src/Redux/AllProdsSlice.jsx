import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: '1',
      title: 'Face Cream',
      price: '₹ 300',
      imageUri:
        'https://i.pinimg.com/474x/66/a2/bc/66a2bc392c78a205e33b55e6dc11ad99.jpg',
    },
    {
      id: '2',
      title: 'Swiss Beauty natural product',
      price: '₹ 300',
      imageUri:
        'https://i.pinimg.com/474x/30/82/f7/3082f72dce7c49c33bc08c03d32675e4.jpg',
    },
    {
      id: '3',
      title: 'Face Cream',
      price: '₹ 300',
      imageUri:
        'https://i.pinimg.com/474x/66/a2/bc/66a2bc392c78a205e33b55e6dc11ad99.jpg',
    },
    {
      id: '4',
      title: 'Face Mask',
      price: '₹ 300',
      imageUri:
        'https://i.pinimg.com/474x/7a/97/6f/7a976fb92e368ed60fce8d88ac4dbd2e.jpg',
    },
    {
      id: '5',
      title: 'Face Cream',
      price: '₹ 300',
      imageUri:
        'https://i.pinimg.com/474x/a6/9c/87/a69c87888f5d04f203d85e6367e1741c.jpg',
    },
    {
      id: '6',
      title: 'Face Mask',
      price: '₹ 300',
      imageUri:
        'https://i.pinimg.com/474x/7a/97/6f/7a976fb92e368ed60fce8d88ac4dbd2e.jpg',
    },
    {
      id: '7',
      title: 'Face Cream',
      price: '₹ 300',
      imageUri:
        'https://i.pinimg.com/474x/a6/9c/87/a69c87888f5d04f203d85e6367e1741c.jpg',
    },
    {
      id: '8',
      title: 'Face Mask',
      price: '₹ 300',
      imageUri:
        'https://i.pinimg.com/474x/7a/97/6f/7a976fb92e368ed60fce8d88ac4dbd2e.jpg',
    },
    {
      id: '9',
      title: 'Dior',
      price: '₹ 3000',
      imageUri:
        'https://i.pinimg.com/474x/72/4c/41/724c41ad5f78c41727da792c9c10a824.jpg',
    },
    {
      id: '10',
      title: 'Chanel',
      price: '₹ 300',
      imageUri:
        'https://i.pinimg.com/474x/d7/5e/25/d75e25d87125f35c88500869420ac7af.jpg',
    },
    {
      id: '11',
      title: 'Versace',
      price: '₹ 300',
      imageUri:
        'https://i.pinimg.com/564x/00/ff/7c/00ff7c737ba8b39ae79c73af4e956355.jpg',
    },
    {
      id: '12',
      title: 'Gucci Flora',
      price: '₹ 300',
      imageUri:
        'https://i.pinimg.com/474x/29/44/1b/29441b3aedac2f1fb41c58888f029b06.jpg',
    },
    {
      id: '13',
      title: 'Michael Kors',
      price: '₹ 300',
      imageUri:
        'https://i.pinimg.com/474x/7a/23/f9/7a23f9a3c160f54be65aafb35293a780.jpg',
    },
    {
      id: '14',
      title: 'Prada',
      price: '₹ 300',
      imageUri:
        'https://i.pinimg.com/474x/a0/6b/be/a06bbee35f083bcc2a5bf895b84cf12e.jpg',
    },
    {
      id: '15',
      title: 'Zara',
      price: '₹ 300',
      imageUri:
        'https://i.pinimg.com/474x/b8/55/06/b8550632b95030077cdc14f67b921595.jpg',
    },
    {
      id: '16',
      title: 'White Musk',
      price: '₹ 300',
      imageUri:
        'https://i.pinimg.com/474x/71/69/e5/7169e54b41c2813a66d9e168d95ccafc.jpg',
    },
  ],
};

const hairCareSlice = createSlice({
  name: 'hairCare',
  initialState,
  reducers: {},
});

export const selectHairCareProducts = state => state.allProducts.products;
export default hairCareSlice.reducer;
