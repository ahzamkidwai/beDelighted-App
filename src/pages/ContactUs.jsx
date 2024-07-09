import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native'

import React, { useState } from 'react'

 const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const img = 'https://i.pinimg.com/474x/d2/08/74/d208747ef26352b15742c515acbff79a.jpg'
  const img2 = 'https://dev.bedelighted.afucent.com/wp-content/uploads/2024/05/Delight-transparent-e1716747988667.png'

  const handleSubmit = () => {
    // Implement form submission logic here (e.g., send email)
    console.log('Form submitted:', { name, email, number, message });

    alert('Thank you for contacting us! We will respond shortly.');

    setName('');
    setEmail('');
    setNumber('');
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>


      {/* <Image source={{uri:img}} height={300} width={400} style={{marginBottom:23}}/> */}

      <View style={styles.form}>
      <Text style={styles.inputLabel}>Your Name</Text>

        <TextInput
          style={styles.input}
          // placeholder="Your Name "
          value={name}
          onChangeText={setName}
          autoCapitalize="none"
        />
        <Text style={styles.inputLabel}>Your Email</Text>

        <TextInput
          style={styles.input}
          // placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Text style={styles.inputLabel}>Mobile Number</Text>

        <TextInput
          style={styles.input}
          // placeholder="Mobile Number"
          value={number}
          keyboardType='n'
          clearButtonMode=''
          onChangeText={setNumber}
        />
        <Text style={styles.inputLabel}>Message</Text>
        <TextInput
          style={styles.messageInput}
          // placeholder="Message"
          value={message}
          onChangeText={setMessage}
          multiline={true}
          numberOfLines={4}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    fontFamily:'font-family: Montserrat, Arial, sans-serif;'
  },
  title: {
    margin:78,
    // marginBottom:74,
    textAlign:'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    marginBottom: 30,
    marginTop:50
  },
  input: {
    height: 60,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  inputLabel:{
    fontSize: 18,
    textAlign:'left'
  },
  messageInput: {
    height: 100,
    paddingLeft: 10,
    paddingTop:0,
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#406066',
    padding: 15,
    borderRadius: 3,
    width:84,
    alignItems: 'center', // Center the text inside the button
  },
  buttonText: {
    color: '#ffffff', // Text color inside the button
    fontWeight: 'bold', // Make the text bold
  },
});

export default ContactUs;