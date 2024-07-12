import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
} from 'react-native';
import React, { useReducer, useState } from 'react';
import { RadioButton } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CheckoutFooter = () => {
    const [selectedValue1, setSelectedValue1] = useState('');
    const [selectedValue2, setSelectedValue2] = useState('');
    const [noteToggle, setNoteToggle] = useState(false);

    const toggleNoteSwitch = () => setNoteToggle(previousState => !previousState);

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
                    <Text style={{ color: 'black', fontSize: 20 }}>Shipping Option</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderWidth: 2,
                            paddingVertical: 6,
                            borderColor: '#A9A9A9',
                            borderRadius: 6,
                            marginVertical: 20,
                        }}>
                        <RadioButton.Android
                            value="option1"
                            status={selectedValue1 === 'option1' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedValue1('option1')}
                            color="black"
                        />
                        <Text style={{ fontSize: 16 }}>Market Place Free Shipping</Text>
                        <Text style={{ fontSize: 16, marginRight: 8 }}>FREE</Text>
                    </View>
                </View>

                <View>
                    <Text style={{ color: 'black', fontSize: 20 }}>Payment Option</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderWidth: 2,
                            paddingVertical: 6,
                            borderColor: '#A9A9A9',
                            borderRadius: 6,
                            marginTop: 20,
                        }}>
                        <RadioButton.Android
                            value="option1"
                            status={selectedValue2 === 'option2' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedValue2('option2')}
                            color="black"
                        />
                        <Text style={{ fontSize: 16 }}>Cash on Delivery</Text>
                        <View></View>
                    </View>
                    <Text style={{ fontSize: 14, textAlign: 'center' }}>
                        {'\n'}Pay with Cash Upon Delivery
                    </Text>
                </View>

                <View style={{ marginTop: 40 }}>
                    <Text onPress={toggleNoteSwitch}>
                        {!noteToggle ? (
                            <Text>
                                <AntDesign name={'plus'} size={14} /> Add a note to your order
                            </Text>
                        ) : (
                            <Text>
                                <AntDesign name={'minus'} size={14} /> Add a note to your order
                            </Text>
                        )}

                    </Text>
                    {noteToggle && (
                        <TextInput
                            style={{
                                fontSize: 15,
                                borderWidth: 1,
                                borderColor: '#f1f1f1',
                                borderRadius: 10,
                                marginTop: 25,
                            }}
                            placeholder="Notes about your order, e.g. special notes for delivery"
                            value={formState.additionalNote}
                            onChangeText={text => handleTextChange('additionalNote', text)}
                        />
                    )}
                </View>

            </View>

            <View style={styles.horizontalLine}>
                <View style={styles.line} />
            </View>

            <View style={{ marginHorizontal: 20, marginTop: 10, marginBottom: 40 }}>
                <Text style={{ fontSize: 15, color: 'black' }}>
                    By proceeding with your purchase you agree to our{' '}
                    <Text style={{ color: '#0066cc' }}>Terms and Conditions </Text>
                    and Privacy policy
                </Text>
            </View>
            <View style={{ marginHorizontal: 20, marginBottom: 40 }}>
                <Button color="#406066" title="Not Purchasable" />
            </View>

        </>
    )
}

export default CheckoutFooter

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
    contactInformation: {
        marginHorizontal: 20,
    },
})