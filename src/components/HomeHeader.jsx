import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Pressable,
  Switch,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Logo from '../assets/bedelighted-logo.png';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native-paper';

const HomeHeader = ({toggleButton, setToggleButton}) => {
  const navigation = useNavigation();

  const toggleSwitch = () => {
    setToggleButton(!toggleButton);
  };
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <Image style={styles.logo} source={Logo} />
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Switch
            trackColor={{false: '#406066', true: '#e6e6e6'}}
            thumbColor={toggleButton ? '#406066' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={toggleButton}
          />
          {toggleButton ? (
            <Text style={{color: '#406066', fontWeight: '700'}}> Shop </Text>
          ) : (
            <Text style={{color: '#406066', fontWeight: '700'}}> Trial</Text>
          )}
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={styles.iconContainer}>
          <Pressable onPress={() => navigation.navigate('Drawer')}>
            <FontAwesome name="align-justify" size={22} color="#3F6065" />
          </Pressable>
        </View>

        <TextInput
          style={{
            height: 40,
            width: '80%',
            borderWidth: 1,
            borderColor: '#ddd',
            paddingLeft: 10,
            color: 'gray',
            // justifyContent: 'flex-start',
            fontFamily: 'Fidena',
            letterSpacing: 0.6,
          }}
          placeholder="I'm shopping for..."
        />
        <Ionicons
          name="search"
          size={24}
          // color="#3F6065"
          style={styles.searchIcon}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  logo: {
    height: 120,
    width: 120,
    marginTop: -20,
    marginLeft: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 15,
    paddingHorizontal: 20,
  },
  searchContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // paddingHorizontal: 10,
    // backgroundColor: '#fff',
    // borderWidth: 1,
    // borderColor: '#ddd',
    // marginTop: 10,
    // width: '100%',
  },
  searchInput: {
    // flex: 1,
    // height: 40,
    // paddingLeft: 10,
    // color: '#000000',
    // width: '90%',
  },
  searchIcon: {
    padding: 6.5,
    color: 'white',
    backgroundColor: '#406066',
    // justifyContent: 'flex-end',
  },
});
