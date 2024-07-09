import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native'


const AccountBecomeASeller = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const img = 'https://i.pinimg.com/474x/d2/08/74/d208747ef26352b15742c515acbff79a.jpg'
  const img2 = 'https://dev.bedelighted.afucent.com/wp-content/uploads/2024/05/Delight-transparent-e1716747988667.png'

  const handleSubmit = () => {
    console.log('Form submitted:', { name, email, number, message });

    alert('Thank you for contacting us! We will respond shortly.');

    setName('');
    setEmail('');
    setNumber('');
    setMessage('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First name <Text style={styles.required}>*</Text></Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last name <Text style={styles.required}>*</Text></Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Shop Name <Text style={styles.required}>*</Text></Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Shop URL  <Text style={styles.required}>*</Text></Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number <Text style={styles.required}>*</Text></Text>
        <TextInput style={styles.input} />
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.buttonText}>Make Request</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AccountBecomeASeller

const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginVertical: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',

  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'normal',
  },
  required: {
    color: 'red',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5,
    fontSize: 16,
    height: 3,
  },
  title: {
    margin: 78,
    // marginBottom:74,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    marginBottom: 30,
    marginTop: 50
  },
  input: {
    height: 45,
    padding: 10,
    borderRadius: 0,
    backgroundColor: 'white',
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  inputLabel: {
    fontSize: 18,
    textAlign: 'left'
  },
  messageInput: {
    height: 100,
    paddingLeft: 10,
    paddingTop: 0,
    borderRadius: 0,
    backgroundColor: 'white',
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#406066',
    padding: 15,
    borderRadius: 0,
    width: 140,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize:15
  },
})