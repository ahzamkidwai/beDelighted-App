import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Logo from '../assets/bedelighted-logo.png';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useContext, useState} from 'react';
import globalStyles from '../styles/globalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();
  const {setToken,redirectPath}  =  useContext(AuthContext)
  const route = useRoute();
  const {redirectTo} = route.params || false;
  console.log("paramsOne:",route.params)

  // const handleGuestLogin = () => {
  //   navigation.navigate('GuestScreen');
  // };

  const validateEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = async () => {
    // if (!validateEmail(email)) {
    //   setErrorMessage('Please enter a valid email address');
    //   return;
    // }
    // if (!password) {
    //   setErrorMessage('Please enter your password');
    //   return;
    // }

    // setLoading(true);
    // setErrorMessage('');
    // try {
    //   const response = await fetch(
    //     'https://native.bedelighted.afucent.com/wp-json/jwt-auth/v1/token',
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         username: email,
    //         password: password,
    //       }),
    //     },
    //   );

    //   const data = await response.json();

    //   if (response.ok) {
    //     let userToken = await AsyncStorage.setItem('token', data.token);
    //     await AsyncStorage.setItem('email', email);
    //     console.log("userToken",data.token);
        setToken("Adnan");
        // setToken(data.token);
        // if (redirectTo) {
        //   console.log(redirectTo,"redirectTo");
          navigation.navigate(redirectTo);
    //     // } else {
    //     //   navigation.replace('Main');
    //     // } 

    //   } else {
    //     console.log('Error:', data);
    //     setErrorMessage('Please check your credentials.');
    //   }
    // } catch (error) {
    //   console.log('Login Error:', error);
    //   setErrorMessage('Login error. Something went wrong.');
    // } finally {
    //   setLoading(false);
    // }
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
        <Text style={[styles.switchText, { fontWeight: "300" }]}>Login</Text>
          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text style={styles.switchText}>Register</Text>
          </Pressable>
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
              // paddingBottom: 25,
            }}>
            Log in your account
          </Text>

          <View style={styles.inputContainer}>
            <View style={styles.inputView}>
              <TextInput
                value={email}
                onChangeText={text => {
                  setEmail(text);
                  setErrorMessage('');
                }}
                placeholderTextColor={globalStyles.placeholder.color}
                style={[styles.textInput]}
                placeholder="Email Address"
              />
            </View>
          </View>
          <View>
            <View style={styles.inputContainer}>
              <View style={styles.inputView}>
                <TextInput
                  value={password}
                  onChangeText={text => {
                    setPassword(text);
                    setErrorMessage('');
                  }}
                  secureTextEntry={true}
                  placeholderTextColor={globalStyles.placeholder.color}
                  style={[styles.textInput]}
                  placeholder="Password"
                />
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 6,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 30,
              paddingVertical: 6,
            }}>
            <Text style={{color: '#000000', fontWeight: 300}}>Remember me</Text>
            <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={{color: '#007FFF', fontWeight: '300'}}>
                Forgot your password?
              </Text>
            </Pressable>
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
          <View style={{paddingVertical: 15}} />
          <Pressable
            onPress={handleLogin}
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
                Log in
              </Text>
            )}
          </Pressable>
        </View>
        {/* <View style={{ marginTop: 0 }}>
          <Pressable
            onPress={handleGuestLogin}
            style={{
              width: '85%',
              backgroundColor: '#3F6065',
              borderRadius: 3,
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: 12,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontFamily: 'Fidena',
                letterSpacing: 0.6,
                fontSize: 17,
                fontWeight: '300',
              }}
            >
              Login as guest
            </Text>
          </Pressable>
        </View> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C6DDED',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    // marginTop: 10,
  },
  keyboardView: {
    flex: 1,
    width: '100%',
  },
  centeredView: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
    // paddingVertical: 20,
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
    fontWeight: 450,
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
