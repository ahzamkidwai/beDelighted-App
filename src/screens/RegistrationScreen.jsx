import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  KeyboardAvoidingView,
  TextInput,
  Image,
  Platform,
  ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/globalStyles';
import Logo from '../assets/bedelighted-logo.png';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleRegister = async () => {
    if (!username) {
      setErrorMessage('Please enter a username');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }
    if (!password) {
      setErrorMessage('Please enter a password');
      return;
    }

    const user = { username, email, password };
    const serverUrl = 'https://native.bedelighted.afucent.com/wp-json/custom/v1/register_qwertyuiop';

    setLoading(true);
    setErrorMessage('');
    try {
      const response = await fetch(serverUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        setUsername('');
        setPassword('');
        setEmail('');
        navigation.navigate('LoginScreen');
      } else {
        setErrorMessage(data.message || 'An error occurred during registration. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred during registration. Please try again.');
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
        <View style={styles.centeredView}>
          <Pressable onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.switchText}>Login</Text>
          </Pressable>
          <Text style={[styles.switchText, { fontWeight: "300"  }]}>Register</Text>
        </View>

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
            Register an account
          </Text>

          <View style={styles.inputContainer}>
            <View style={styles.inputView}>
              <TextInput
                value={username}
                onChangeText={(text) => {
                  setUsername(text);
                  setErrorMessage('');
                }}
                placeholderTextColor={globalStyles.placeholder.color}
                style={styles.textInput}
                placeholder="Username"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputView}>
              <TextInput
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  setErrorMessage('');
                }}
                placeholderTextColor={globalStyles.placeholder.color}
                style={styles.textInput}
                placeholder="Email Address"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputView}>
              <TextInput
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setErrorMessage('');
                }}
                secureTextEntry
                placeholderTextColor={globalStyles.placeholder.color}
                style={styles.textInput}
                placeholder="Password"
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
          <View style={{ paddingVertical: 15 }} />
          <Pressable
            onPress={handleRegister}
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
                Register
              </Text>
            )}
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

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
  centeredView: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
  },
  switchText: {
    fontFamily: 'Fidena',
    letterSpacing: 0.6,
    fontSize: 26,
    fontWeight: '200',
    color: '#3F6065',
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

export default RegisterScreen;
