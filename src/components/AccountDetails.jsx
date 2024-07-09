import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {TextInput,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AccountDetails = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showCnPassword, setShowCnPassword] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { id: 1, label: 'Subscribe to our newsletter' },
    { id: 2, label: 'Unsubscribe from our newsletter' },
    { id: 3, label: 'Receive Order Updates' },
  ];
  const handleSelectOption = (optionId) => {
    setSelectedOption(optionId);
  };
  const handleSubmit = () => {
    console.log('Form submitted:');

    alert('Thank you for filling the address! We will respond shortly.');
  };


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First name <Text style={styles.required}>*</Text></Text>
        <TextInput style={styles.input} placeholder="First name"  placeholderTextColor="grey"/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last name <Text style={styles.required}>*</Text></Text>
        <TextInput style={styles.input} placeholder="Last name"placeholderTextColor="grey" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Display name <Text style={styles.required}>*</Text></Text>
        <TextInput style={styles.input} placeholder="Display name" defaultValue="023.ashutosh@gmail.com" placeholderTextColor="grey"/>
        <Text style={styles.hint}>This will be how your name will be displayed in the account section and in reviews</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email address <Text style={styles.required}>*</Text></Text>
        <TextInput style={styles.input} placeholder="Email address" defaultValue="023.ashutosh@gmail.com" placeholderTextColor="grey"/>
      </View>

      <Text style={styles.sectionHeader}>Password change</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Current password (leave blank to leave unchanged)</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            secureTextEntry={!showCurrentPassword}
            placeholder="Current password" placeholderTextColor="grey"
          />
          <TouchableOpacity onPress={() => setShowCurrentPassword(!showCurrentPassword)} style={styles.iconStyling}>
            <Icon name={showCurrentPassword ? 'visibility' : 'visibility-off'} size={24} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>New password (leave blank to leave unchanged)</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            secureTextEntry={!showNewPassword}
            placeholder="New password"
            placeholderTextColor="grey"
          />
          <TouchableOpacity onPress={() => setShowNewPassword(!showNewPassword)} style={styles.iconStyling}>
            <Icon name={showNewPassword ? 'visibility' : 'visibility-off'} size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm new password </Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            secureTextEntry={!showCnPassword}
            placeholder="New password" placeholderTextColor="grey"
          />
          <TouchableOpacity onPress={() => setShowCnPassword(!showCnPassword)} style={styles.iconStyling}>
            <Icon name={showNewPassword ? 'visibility' : 'visibility-off'} size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
      {options.map((option) => (
        <TouchableOpacity
          key={option.id}
          onPress={() => handleSelectOption(option.id)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <View
            style={{
              height: 24,
              width: 24,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: option.id === selectedOption ? '#007AFF' : '#000',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
              fontWeight:'300',
              color:'red'
            }}>
            {option.id === selectedOption && (
              <View
                style={{
                  height: 12,
                  width: 12,
                  borderRadius: 6,
                  backgroundColor: '#007AFF',
                }}
              />
            )}
          </View>
          <Text style={{color:'grey'}}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
    <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
    </View>
  )
}

export default AccountDetails

const styles = StyleSheet.create({
  iconStyling:{
    position:'absolute',
    right:9,
    top:12,    
  },
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold',
    color:'#000'
  },
  required: {
    color: 'red',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    width:'100%',
    color:'grey',
  },
  // input{

  // },
  hint: {
    color: '#888',
    fontSize: 12,
    marginTop: 5,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
    color:'grey'
  },
  bottomText:{
    color:'grey',
    fontWeight:'400',
    marginVertical:5
  },
  passwordContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    position:'relative',
    width:'100%',
    // borderWidth: 1,
    // borderColor: '#ccc',
    // borderRadius: 5,
    // paddingRight: 10,
  },

  submitButton: {
    backgroundColor: '#406066',
    padding: 15,
    borderRadius: 0,
    width:120,
    alignItems: 'center',
    textAlign:'center',
    borderRadius:3,
    marginTop:5

  },
  buttonText: {
    color: '#ffffff', 
    fontWeight: 'bold', 
    
    // width:110,
  },
})