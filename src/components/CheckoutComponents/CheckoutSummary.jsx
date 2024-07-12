import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
  } from 'react-native';
  import React, { useReducer, useState } from 'react';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
 
const CheckoutSummary = () => {
    const [toggleButton, setToggleButton] = useState(false);
  const [toggleButton2, setToggleButton2] = useState(false);
  const [selectedValue1, setSelectedValue1] = useState('');
  const [selectedValue2, setSelectedValue2] = useState('');
  const [focusedInput, setFocusedInput] = useState(null);

  const toggleSwitch = () => setToggleButton(previousState => !previousState);
  const toggleSwitch2 = () => setToggleButton2(previousState => !previousState);

  const handleFocus = index => setFocusedInput(index);
  const handleBlur = () => setFocusedInput(null);

  const initialFormState = {
    couponCode: '',
    emailAddress: '',
    country: '',
    firstName: '',
    lastName: '',
    address: '',
    addtionalAddress: '',
    city: '',
    state: '',
    pinCode: '',
    phoneNumber: '',
    additionalNote: '',
  };

  const reducerHandler = (state, action) => {
    switch (action.type) {
      case 'HANDLE_INPUT_TEXT':
        return {
          ...state,
          [action.field]: action.payload,
        };
      default:
        return state;
    }
  };

  const [formState, dispatch] = useReducer(reducerHandler, initialFormState);

  const handleTextChange = (field, value) => {
    dispatch({
      type: 'HANDLE_INPUT_TEXT',
      field: field,
      payload: value,
    });
    console.log('initialFormState is : ', formState);
    console.log('Selected Value 1 : ', selectedValue1);
    console.log('Selected Value 2 : ', selectedValue2);
  };
 
  
    return (
        <>
            <View>
                <View style={styles.orderDetails}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                        <Text>Order Summary</Text>
                        {!toggleButton ? (
                            <MaterialIcons
                                name={'expand-more'}
                                size={30}
                                color="#666"
                                style={styles.socialIcon}
                                onPress={toggleSwitch}
                            />
                        ) : (
                            <MaterialIcons
                                name={'expand-less'}
                                size={30}
                                color="#666"
                                style={styles.socialIcon}
                                onPress={toggleSwitch}
                            />
                        )}
                    </View>
                    {toggleButton && (
                        <View style={{ flexDirection: 'row', marginVertical: 30 }}>
                            <View style={{ marginHorizontal: 20 }}>
                                <Image
                                    src="https://sdcdn.io/mac/in/mac_sku_NY9N70_1x1_0.png?width=1080&height=1080"
                                    style={{ padding: 24, height: 80 }}
                                />
                            </View>
                            <View>
                                <Text>Bright Beauty Cream</Text>
                                <Text>$600.00</Text>
                                <Text>Sold By: Be Delighted Dev</Text>
                                <Text>Color: R</Text>
                            </View>
                            <Text>$1,200.00</Text>
                        </View>
                    )}
                </View>
            </View>

            <View style={styles.horizontalLine}>
                <View style={styles.line} />
            </View>

            <View>
                <View style={styles.orderDetails}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                        <Text>Add a Coupon</Text>
                        {!toggleButton2 ? (
                            <MaterialIcons
                                name={'expand-more'}
                                size={30}
                                color="#666"
                                style={styles.socialIcon}
                                onPress={toggleSwitch2}
                            />
                        ) : (
                            <MaterialIcons
                                name={'expand-less'}
                                size={30}
                                color="#666"
                                style={styles.socialIcon}
                                onPress={toggleSwitch2}
                            />
                        )}
                    </View>
                    {toggleButton2 && (
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginVertical: 2,
                            }}>
                            <TextInput
                                style={[
                                    styles.input,
                                    focusedInput === 0 && styles.inputFocused,
                                ]}
                                onFocus={() => handleFocus(0)}
                                onBlur={handleBlur}
                                placeholder="Enter Code"
                        placeholderTextColor={'grey'}

                                value={formState.couponCode}
                                onChangeText={text => handleTextChange('couponCode', text)}
                            />
                            <Text
                                style={{
                                    backgroundColor: '#f1f1f1',
                                    paddingHorizontal: 21,
                                    textAlign: 'center',
                                    paddingTop: 10,
                                }}>
                                Apply
                            </Text>
                        </View>
                    )}
                </View>

                <View style={styles.horizontalLine}>
                    <View style={styles.line} />
                </View>

                <View style={styles.orderBill}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.orderBillDetails}>SubTotals</Text>
                        <Text style={styles.orderBillDetails}>$1,200.00</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.orderBillDetails}>Via Wallet</Text>
                        <Text style={styles.orderBillDetails}>-$5.00</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.orderBillDetails}>Shipping</Text>
                        <Text style={styles.orderBillDetails}>$40.00</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.orderBillDetails}>
                            Marketplace Flat Rate Shipping {'\n'}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.orderBillDetails}>
                            Shipping to Australian Capital Territory, Australia
                        </Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default CheckoutSummary

const styles = StyleSheet.create({
      line: {
        borderBottomColor: '#f1f1f1',
        borderBottomWidth: 2,
        width: '100%',
      },
      horizontalLine: {
        marginVertical: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
      },
      orderDetails: {
        marginHorizontal: 20,
      },
      input: {
        borderColor: '#f1f1f1',
        borderWidth: 1,
        width: '80%',
        padding: 5,
        color:'#000'
      },
      inputFocused: {
        borderColor: '#333',
      },
      orderBill: {
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 40,
      },
      orderBillDetails: {
        lineHeight: 20,
        color:'grey'
      },
})