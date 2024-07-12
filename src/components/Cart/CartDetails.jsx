import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { removefromcart } from '../../Redux/Action';

const CartDetails = () => {
  const [inputArrow, setInputArrow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEditable, setIsEditable] = useState(true);
  const [text, setText] = useState('');
  const [quantities, setQuantities] = useState({});
  const Cartdata = useSelector((state) => state.reducer);
  const [totalPrice, setTotalPrice] = useState(0);
  const {tokenforUser} = useContext(AuthContext);
  const navigation = useNavigation();
  // console.log(tokenforUser);

  const dispatch = useDispatch()
  

  useEffect(() => {
    // Initialize quantities state based on Cartdata
    const initialQuantities = {};
    Cartdata.forEach(product => {
      initialQuantities[product.id] = 1;
    });
    setQuantities(initialQuantities);
  }, [Cartdata]);

  useEffect(() => {
    calculateTotal();
  }, [Cartdata, quantities]);

  const handleCoupon = () => {
    setLoading(true);
    setIsEditable(false);
    setTimeout(() => {
      setText('');
      setLoading(false);
      setIsEditable(true);
    }, 2000);
  };
  const handlePayment=()=>{
    console.log("handlePayment")
    if(tokenforUser){
      console.log("handlePayment")

      alert(`Proceeding to checkout with total price: ${totalPrice.toFixed(2)}`);
      navigation.navigate('Checkout');
    console.warn("handlePayment")
    } else{
      navigation.navigate("LoginScreen", { redirectTo: 'CartScreen' });
    }
  }

  const handleInput = () => {
    setInputArrow(!inputArrow);
  };

  const calculateTotal = () => {
    let total = 0;
    Cartdata.forEach(product => {
      const productTotal = parseFloat(product.price) * (quantities[product.id] || 1);
      total += isNaN(productTotal) ? 0 : productTotal;
    });
    setTotalPrice(total);
  };

  const handleRemoveFromCart =(item)=>{
    dispatch(removefromcart(item.id)) 
    console.warn(Cartdata);
  }



  const handleQuantityChange = (productId, change) => {
    setQuantities(prevQuantities => {
      const newQuantities = { ...prevQuantities };
      newQuantities[productId] = Math.max((newQuantities[productId] || 1) + change, 1);
      return newQuantities;
    });
  };

  return (
    <>
      {Cartdata.map(product => (
        <View key={product.id} style={styles.card}>
          <Image source={{ uri: product.image }} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.name}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.description}>{product.details}</Text>
            <Text style={styles.total}>Total: {(parseFloat(product.price) * quantities[product.id]).toFixed(2)}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => handleQuantityChange(product.id, -1)}>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: '900' }}>-</Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 20, color: 'white' }}>{quantities[product.id]}</Text>
              <TouchableOpacity onPress={() => handleQuantityChange(product.id, 1)}>
                <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',}}>
              <Icon name="delete" size={23} color="black" />
              <Text style={styles.remove}  onPress={()=>handleRemoveFromCart(product)}  >Remove</Text>
            </View>
          </View>
        </View>
      ))}

      <View style={styles.container}>
        <View style={styles.iconstyle}>
          <Text style={styles.couponLabel} onPress={handleInput}>
            Add a coupon
          </Text>
          <Text>
            <MaterialIcons
              name={!inputArrow ? 'expand-more' : 'expand-less'}
              size={40}
              color="#bd081c"
              style={styles.socialIcon}
            />
          </Text>
        </View>
        {inputArrow && (
          <View style={styles.mainCouponArea}>
            <View style={styles.couponContainer}>
              <TextInput
                style={styles.couponInput}
                placeholder="Add a coupon"
                editable={isEditable}
                value={text}
                onChangeText={newText => setText(newText)}
              />
            </View>
            <TouchableOpacity onPress={handleCoupon} style={styles.applyButton}>
              {loading ? (
                <View style={styles.loaderContainer}>
                  <ActivityIndicator size="small" color="#007bff" />
                </View>
              ) : (
                <Text style={styles.applyButtonText}>Apply</Text>
              )}
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.line} />

        <View style={styles.summaryItem}>
          <Text style={styles.label}>Subtotal</Text>
          <Text style={styles.value}>{totalPrice.toFixed(2)}</Text>
        </View>

        <View style={styles.summaryItem}>
          <Text style={styles.label}>Via wallet</Text>
          <Text style={styles.value}>-200.00</Text>
        </View>

        <View style={styles.summaryItem}>
          <Text style={styles.label}>Shipping</Text>
          <Text style={styles.value}>20.00</Text>
        </View>

        <View style={styles.summaryItem2}>
          <Text style={styles.shippingInfo}>
            Marketplace Flat Rate Shipping
          </Text>
          <Text style={styles.shippingInfo}>
            Shipping to Australian Capital Territory, Australia
          </Text>
          <Text style={styles.changeAddress}>Change address</Text>
        </View>

        <View style={styles.shippingOption}>
          <TouchableOpacity style={styles.radioCircle} />
          <Text style={styles.radioLabel}>Marketplace Flat Rate Shipping</Text>
          <Text style={styles.radioValue}>20.00</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>{(totalPrice - 200 + 20).toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.proceedButton}>
        <TouchableOpacity style={styles.checkoutButton} onPress={handlePayment}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CartDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F1F1',
    padding: 20,
    borderRadius: 0,
    margin: 20,
    gap: 11,
    width: '90%',
    borderWidth: 2,
    borderColor: '#E1E1E1',
  },
  loaderContainer: {
    top: 5,
    left: 2,
    bottom: 8,
    right: 0,
    zIndex: 1,
  },
  applyButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 0.9,
    height: 48,
  },
  iconstyle: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 0,
    width: '90%',
  },
  mainCouponArea: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  couponContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    width: '80%',
    marginRight: 13,
  },
  couponInput: {
    padding: 10,
  },
  couponLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
    fontSize: 16,
    color: 'grey',
  },
  socialIcon: {
    margin: 10,
    textAlign: 'center',
    cursor: 'pointer',
    color: 'grey',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  summaryItem2: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  shippingInfo: {
    fontSize: 14,
    color: '#777',
    marginVertical: 2,
  },
  changeAddress: {
    fontSize: 14,
    color: '#007bff',
    marginVertical: 2,
  },
  shippingOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#007bff',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioLabel: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  radioValue: {
    fontSize: 16,
    color: '#333',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  totalLabel: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  checkoutButton: {
    backgroundColor: '#2d3e50',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    width: 405,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '90%',
    borderWidth: 1,
    borderStartEndRadius: 2,
    height: 32,
    borderRadius: 0,
    textAlign: 'center',
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 7,
  },
  buttonText: {
    fontSize: 84,
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
    marginBottom: 0,
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
    borderColor: 'black',
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
  container2: {
    width: '100%',
    height: '100%',
  },
  catImage: {
    width: 100,
    height: 100,
  },
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: 'green',
  },
  totals: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  proceedButton: {
    // backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  remove:{
    color:'black',
    fontSize:20,
    // padding:50
  }
});
