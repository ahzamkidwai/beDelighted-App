import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Pressable,
  Platform,
  ActivityIndicator
} from 'react-native';
import Logo from '../assets/bedelighted-logo.png';
import globalStyles from '../styles/globalStyles';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleResetPassword = async () => {
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    const serverUrl = 'https://native.bedelighted.afucent.com/wp-json/custom/v1/forgot-password_qwertyuiop';

    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');
    try {
      const response = await fetch(serverUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message || 'A reset link has been sent to your email address.');
        setEmail('');
      } else {
        setErrorMessage(data.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.logo} source={Logo} />
      </View>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.centeredView}></View>

        <View
          style={{
            backgroundColor: 'white',
            margin: 15,
            paddingVertical: 20,
            borderRadius: 5,
          }}>
          <Text
            style={{
              padding: 10,
              paddingHorizontal: 30,
              color: 'black',
              fontSize: 16,
              fontFamily: 'Fidena',
              letterSpacing: 0.6,
              fontWeight: '300',
            }}>
            Forgot your password?
          </Text>

          <Text
            style={{
              padding: 10,
              paddingHorizontal: 30,
              color: 'black',
              fontSize: 16,
              fontFamily: 'Fidena',
              letterSpacing: 0.6,
              fontWeight: '300',
            }}>
            Please enter your email address. You will receive a link to create a new password via email.
          </Text>

          <View style={styles.inputContainer}>
            <View style={styles.inputView}>
              <TextInput
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  setErrorMessage('');
                  setSuccessMessage('');
                }}
                placeholderTextColor={globalStyles.placeholder.color}
                style={styles.textInput}
                placeholder="Email address"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>
          {errorMessage ? (
            <Text
              style={{
                color: 'red',
                textAlign: 'center',
                paddingHorizontal: 30,
                marginTop: 10,
              }}>
              {errorMessage}
            </Text>
          ) : null}
          {successMessage ? (
            <Text
              style={{
                color: 'green',
                textAlign: 'center',
                paddingHorizontal: 30,
                marginTop: 10,
              }}>
              {successMessage}
            </Text>
          ) : null}
          <View style={{ paddingVertical: 15 }} />
          <Pressable
            onPress={handleResetPassword}
            style={{
              width: '85%',
              backgroundColor: '#3F6065',
              borderRadius: 3,
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: 12,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {loading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 17,
                  fontWeight: '300',
                  fontFamily: 'Fidena',
                  letterSpacing: 0.6,
                }}>
                Reset Password
              </Text>
            )}
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C6DDED',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  keyboardView: {
    flex: 1,
    width: '100%',
  },
  inputContainer: {
    marginTop: 10,
    paddingHorizontal: 30,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 4,
  },
  textInput: {
    color: 'black',
    fontFamily: 'Montserrat',
    width: '100%',
    fontWeight: '200',
    fontSize: 16,
    borderColor: 'gray',
    borderWidth: 0.4,
    paddingHorizontal: 15,
    borderRadius: 3,
  },
});
