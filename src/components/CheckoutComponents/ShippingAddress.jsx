import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Button,
    TextInput,
} from 'react-native';
import React, { useReducer, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';



const ShippingAddress = () => {
   
    const [apartmentToggle, setApartmentToggle] = useState(false);
    const [selectedValue1, setSelectedValue1] = useState('');
    const [selectedValue2, setSelectedValue2] = useState('');
    const [focusedInput, setFocusedInput] = useState(null);

    const toggleApartmentSwitch = () =>
        setApartmentToggle(previousState => !previousState);

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
            <View style={styles.contactInformation}>
                <View>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '600' }}>
                        Contact Information
                    </Text>
                    <Text style={[{ marginVertical: 15},styles.textColor]}>
                        We'll use this email to send you details and updates about your
                        order.
                    </Text>
                    <TextInput
                        style={[
                            styles.inputTextForm,
                            focusedInput === 1 && styles.inputTextFormFocused,
                        ]}
                        onFocus={() => handleFocus(1)}
                        onBlur={handleBlur}
                        placeholder="Email Address"
                        placeholderTextColor={'grey'}
                        value={formState.emailAddress}
                        onChangeText={text => handleTextChange('emailAddress', text)}
                    />
                </View>

                <View>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '600' }}>
                        Shipping Address
                    </Text>
                    <Text style={[{ marginVertical: 15 },styles.textColor]}>
                        Enter the address where you want your order delivered.
                    </Text>
                    <TextInput
                        style={[
                            styles.inputTextForm,
                            focusedInput === 2 && styles.inputTextFormFocused,
                        ]}
                        onFocus={() => handleFocus(2)}
                        onBlur={handleBlur}
                        placeholder="Country/Region"
                        placeholderTextColor={'grey'}

                        value={formState.country}
                        onChangeText={text => handleTextChange('country', text)}
                    />
                    <TextInput
                        style={[
                            styles.inputTextForm,
                            focusedInput === 3 && styles.inputTextFormFocused,
                        ]}
                        onFocus={() => handleFocus(3)}
                        onBlur={handleBlur}
                        placeholder="First Name"
                        placeholderTextColor={'grey'}

                        value={formState.firstName}
                        onChangeText={text => handleTextChange('firstName', text)}
                    />
                    <TextInput
                        style={[
                            styles.inputTextForm,
                            focusedInput === 4 && styles.inputTextFormFocused,
                        ]}
                        onFocus={() => handleFocus(4)}
                        onBlur={handleBlur}
                        placeholder="Last Name"
                        placeholderTextColor={'grey'}

                        value={formState.lastName}
                        onChangeText={text => handleTextChange('lastName', text)}
                    />
                    <TextInput
                        style={[
                            styles.inputTextForm,
                            focusedInput === 5 && styles.inputTextFormFocused,
                        ]}
                        onFocus={() => handleFocus(5)}
                        onBlur={handleBlur}
                        placeholder="Address"
                        placeholderTextColor={'grey'}

                        value={formState.address}
                        onChangeText={text => handleTextChange('address', text)}
                    />
                    {!apartmentToggle && (
                        <Text onPress={toggleApartmentSwitch}>
                            <AntDesign name={'plus'} size={14} /> Add Apartment, suite, etc.
                        </Text>
                    )}
                    {apartmentToggle && (
                        <TextInput
                            style={[
                                styles.inputTextForm,
                                focusedInput === 6 && styles.inputTextFormFocused,
                            ]}
                            onFocus={() => handleFocus(6)}
                            onBlur={handleBlur}
                            placeholder="Add Apartment, suite, etc."
                        placeholderTextColor={'grey'}

                            value={formState.addtionalAddress}
                            onChangeText={text => handleTextChange('additionalAddress', text)}
                        />
                    )}
                    <TextInput
                        style={[
                            styles.inputTextForm,
                            focusedInput === 7 && styles.inputTextFormFocused,
                        ]}
                        onFocus={() => handleFocus(7)}
                        onBlur={handleBlur}
                        placeholder="City"
                        placeholderTextColor={'grey'}

                        value={formState.city}
                        onChangeText={text => handleTextChange('city', text)}
                    />
                    <TextInput
                        style={[
                            styles.inputTextForm,
                            focusedInput === 8 && styles.inputTextFormFocused,
                        ]}
                        onFocus={() => handleFocus(8)}
                        onBlur={handleBlur}
                        placeholder="State"
                        placeholderTextColor={'grey'}

                        value={formState.state}
                        onChangeText={text => handleTextChange('state', text)}
                    />
                    <TextInput
                        style={[
                            styles.inputTextForm,
                            focusedInput === 9 && styles.inputTextFormFocused,
                        ]}
                        onFocus={() => handleFocus(9)}
                        onBlur={handleBlur}
                        placeholder="PIN Code"
                        placeholderTextColor={'grey'}

                        value={formState.pinCode}
                        onChangeText={text => handleTextChange('pinCode', text)}
                    />
                    <TextInput
                        style={[
                            styles.inputTextForm,
                            focusedInput === 10 && styles.inputTextFormFocused,
                        ]}
                        onFocus={() => handleFocus(10)}
                        onBlur={handleBlur}
                        placeholder="Phone (Optional)"
                        placeholderTextColor={'grey'}

                        value={formState.phoneNumber}
                        onChangeText={text => handleTextChange('phoneNumber', text)}
                    />
                </View>
            </View>
        </>
    )
}

export default ShippingAddress

const styles = StyleSheet.create({
   
    orderDetails: {
        marginHorizontal: 20,
    },
    input: {
        borderColor: '#f1f1f1',
        borderWidth: 1,
        width: '80%',
        padding: 5,
    },
    contactInformation: {
        marginHorizontal: 20,
    },
    inputTextForm: {
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#f1f1f1',
        borderRadius: 10,
        marginVertical: 10,
        color:"#000"
    },
    inputTextFormFocused: {
        borderColor: '#333',
    },
    textColor:{
        color:'grey'
    }
})