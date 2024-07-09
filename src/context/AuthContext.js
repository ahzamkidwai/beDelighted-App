import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tokenforUser,setToken] = useState(null);
  console.log("tokenss",tokenforUser);


  const login = async (username, password) => {
    console.log(username,password,"username password")
    try {
      const response = await axios.post('https://native.bedelighted.afucent.com/wp-json/jwt-auth/v1/token', {
        username: username,
        password: password
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      const { token, user_email, user_nicename, user_display_name } = response.data;
      const userData = { token, email: user_email, nicename: user_nicename, displayName: user_display_name };

      setUser(userData);
      await AsyncStorage.setItem('user', JSON.stringify(userData));

    } catch (error) {
      console.error('Login Error:', error.response.data);
      throw error;
    }
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  const checkAuth = async () => {
    const storedUser = await AsyncStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    return storedUser;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, checkAuth ,setToken,tokenforUser}}>
      {children}
    </AuthContext.Provider>
  );
};
