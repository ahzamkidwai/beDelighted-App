import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';

const CartProductContent = ({ }) => {
  const [add, setAdd] = useState(0);

  const dummyProducts = [
    {
      id: '1',
      name: 'Moisturizer',
      price: '$999.00',
      description: 'Sold By: Be Delighted Dev',
      image: 'https://i.pinimg.com/474x/d2/08/74/d208747ef26352b15742c515acbff79a.jpg',
      total: '$999.00',
      originalPrice: '$1200.00',
      save: '$201.00'
    },
  ];

  return (
    <>
    
      {dummyProducts.map(product => (
        <View key={product.id} style={styles.card}>
          <Image source={{ uri: product.image }} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}><Text style={styles.originalPrice}>{product.originalPrice}</Text> {product.price}</Text>

            <Text style={styles.cashback}>SAVE {product.save}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.total}>Total {product.total}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => setAdd(add === 0 ? 0 : add - 1)}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.buttonText}>{add}</Text>
              <TouchableOpacity onPress={() => setAdd(add + 1)}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.description}>Remove Item</Text>

            {/* <TouchableOpacity mode="contained" style={styles.button} onPress={() => {}}>
              Add to Cart
            </TouchableOpacity> */}
          </View>
        </View>
      ))}
    </>
  );
};


export default CartProductContent;
const styles = StyleSheet.create({
  container: {
    // padding: 10,
    padding:0,
    // marginBottom:10,
    // backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    width: '60%',
    borderWidth: 1,
    borderStartEndRadius: 2,
    height: 32,
    borderRadius: 0,
    textAlign: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 0,
    marginBottom:12
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'normal',
    color: 'black',
  },
  card: {
    borderRadius: 10,
    elevation: 2,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    overflow: 'hidden',
    width: 400,
    display: 'flex',
    flexDirection: 'row',
    marginBottom:0
  },
  cashback: {
    width: 120,
    height: 25,
    textAlign: 'center',
    padding: 3,
    fontSize: 16,
    color: 'black',
    fontWeight: 'normal',
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black'
  },
  image: {
    padding: 0,
    margin: 0,
    width: 180,
    height: 270,
  },
  details: {
    marginTop: 10,
    fontSize: 23,
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  price: {
    fontSize: 22,
    color: 'black',
    marginVertical: 5,
  },
  originalPrice: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: 'lightblack',
    marginVertical: 5,
  },
  description: {
    fontSize: 12,
    color: '#757575',
    marginVertical: 5,
  },
  total: {
    fontSize: 12,
    color: 'black',
    marginVertical: 5,
    marginTop: 5,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#ff9800',
  },
})
