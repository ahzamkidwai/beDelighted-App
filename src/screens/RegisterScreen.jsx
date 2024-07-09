// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   Pressable,
//   KeyboardAvoidingView,
//   TextInput,
//   Image,
//   Alert,
//   Platform,
// } from 'react-native';
// import React, {useState} from 'react';
// import {useNavigation} from '@react-navigation/native';
// import Logo from '../assets/bedelighted-logo.png';

// const RegisterScreen = () => {
//   console.log('RegisterScreen loaded');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigation = useNavigation();

//   const handleRegister = async () => {
//     const user = {name, email, password};
//     const serverUrl =
//       Platform.OS === 'android'
//         ? 'http://localhost:8081/register'
//         : 'http://localhost:8081/register';

//     try {
//       console.log('Making API request to:', serverUrl, 'with user:', user);
//       const response = await axios.post(serverUrl, user);
//       console.log('Response from server:', response);

//       Alert.alert(
//         'Registration Successful',
//         'You have registered successfully',
//       );

//       setName('');
//       setPassword('');
//       setEmail('');

//       navigation.navigate('Login');
//     } catch (error) {
//       console.log('Catch Registration error:', error.message);

//       Alert.alert(
//         'Registration Error',
//         'An error occurred during registration. Please try again.',
//       );
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View>
//         <Image style={styles.logo} source={Logo} />
//       </View>
//       <KeyboardAvoidingView
//         style={styles.keyboardView}
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       >
//         <View style={styles.centeredView}>
//           <Text style={styles.loginText}>Login</Text>
//           <Pressable onPress={() => navigation.navigate('Register')}>
//             <Text style={styles.registerText}>Register</Text>
//           </Pressable>
//         </View>

//         <View
//           style={{
//             backgroundColor: 'white',
//             margin: 15,
//             paddingVertical: 20,
//             borderRadius: 5,
//           }}>
//           <Text
//             style={{
//               padding: 10,
//               paddingHorizontal: 30,
//               color: 'black',
//               fontSize: 16,
//               fontFamily: 'Fidena',
//               letterSpacing: 0.6,
//               fontWeight: '300',
//               // paddingBottom: 25,
//             }}>
//             Register An Account
//           </Text>

//           <View style={styles.inputContainer}>
//             <View style={styles.inputView}>
//               <TextInput
//                 value={name}
//                 editable={false}
//                 style={styles.textInput}
//                 placeholder="Enter your name"
//               />
//             </View>
//           </View>

//           <View style={styles.inputContainer}>
//             <View style={styles.inputView}>
//               {/* <MaterialIcons
//               style={{marginLeft: 8}}
//               name="email"
//               size={24}
//               color="gray"
//               /> */}
//               <TextInput
//                 value={email}
//                 editable={false}
//                 style={styles.textInput}
//                 placeholder="Enter your email"
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//               />
//             </View>
//           </View>

//           <View style={styles.inputContainer}>
//             <View style={styles.inputView}>
//               <TextInput
//                 value={password}
//                 editable={false}
//                 secureTextEntry={true}
//                 style={styles.textInput}
//                 placeholder="Enter your password"
//               />
//             </View>
//           </View>

//           {/* <View style={styles.optionsContainer}>
//             <Text style={{color: '#000000'}}>Keep me logged in</Text>
//             <Text style={{color: '#007FFF', fontWeight: '700'}}>
//               Forgot password
//             </Text>
//           </View> */}

//           <View style={{ paddingVertical: 15 }} />
//           <Pressable onPress={handleRegister}
//            style={{
//             width: '85%',
//             backgroundColor: '#3F6065',
//             borderRadius: 3,
//             marginLeft: 'auto',
//             marginRight: 'auto',
//             padding: 12,
//             flexDirection: 'row',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}>
//             <Text style={{
//                   textAlign: 'center',
//                   color: 'white',
//                   fontSize: 17,
//                   fontWeight: '300',
//                   fontFamily: 'Fidena',
//                   letterSpacing: 0.6,
//                 }}
//             >Register</Text>
//           </Pressable>
//         </View>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// export default RegisterScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#C6DDED',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 200,
//     height: 200,
//     // marginTop: 10,
//   },
//   keyboardView: {
//     flex: 1,
//     width: '100%',
//   },
//   centeredView: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     gap: 40,
//     // paddingVertical: 20,
//   },
//   loginText: {
//     fontFamily: 'Fidena',
//     letterSpacing: 0.6,
//     fontSize: 26,
//     fontWeight: '500',
//     color: '#3F6065',
//   },
//   registerText: {
//     fontFamily: 'Fidena',
//     letterSpacing: 0.6,
//     fontSize: 26,
//     fontWeight: '500',
//     color: '#3F6065',
//   },
//   inputContainer: {
//     marginTop: 10,
//     paddingHorizontal: 30,
//   },
//   inputView: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     fontWeight: 450,
//     backgroundColor: 'white',
//     paddingVertical: 4,
//   },
//   textInput: {
//     color: 'black',
//     fontFamily: 'Montserrat',
//     width: '100%',
//     fontWeight: '200',
//     fontSize: 16,
//     borderColor: 'gray',
//     borderWidth: 0.4,
//     paddingHorizontal: 15,
//     borderRadius: 3,
//   },
//   optionsContainer: {
//     marginTop: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//   },
  
// });
