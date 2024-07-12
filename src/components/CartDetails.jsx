import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CartDetails = () => {
  const [inputArrow, setInputArrow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEditable, setIsEditable] = useState(true);
  const [text, setText] = useState(true);

  const handleCoupon = () => {
    setLoading(true);
    setIsEditable(false);
    setTimeout(() => {
      setText('');
      setLoading(false);
      setIsEditable(true);
    }, 2000);
  };

  const handleInput = () => {
    setInputArrow(!inputArrow);
  };
  return (
    <>
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
          <Text style={styles.value}>$400.00</Text>
        </View>

        <View style={styles.summaryItem}>
          <Text style={styles.label}>Via wallet</Text>
          <Text style={styles.value}>-$200.00</Text>
        </View>

        <View style={styles.summaryItem}>
          <Text style={styles.label}>Shipping</Text>
          <Text style={styles.value}>$20.00</Text>
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
          <Text style={styles.radioValue}>$20.00</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>$220.00</Text>
        </View>
      </View>
      <View style={styles.proceedButton}>
        <TouchableOpacity style={styles.checkoutButton}>
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
    // elevation: 5,
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
    // marginBottom:0
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
    // borderWidth:1
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
    fontSize: 18,
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
  proceedButton: {
    // backgroundColor: '#2d3e50',
    // borderRadius: 0,
    // width:'100%',
    // marginTop: 10,
    // marginBottom: 10,
    // alignItems: 'center',
  },
});
