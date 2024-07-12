import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Pressable,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Logo from '../assets/bedelighted-logo.png';
import {useNavigation} from '@react-navigation/native';
import CartScreen from '../screens/CartScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LoginScreen from '../screens/LoginScreen';
import {useSelector} from 'react-redux';
const HomeHeader = () => {
  const navigation = useNavigation();
  const allProducts = useSelector(state => state.allProducts.products);
  let [suggestions, setSuggestions] = useState([]);

  const handleChange = value => {
    if (value.trim() === '') {
      setSuggestions([]);
    } else {
      let searchSuggestion =
        allProducts &&
        allProducts.length > 0 &&
        allProducts.filter(el =>
          el.title.toLowerCase().includes(value.toLowerCase()),
        );
      setSuggestions(searchSuggestion);
      console.log(setSuggestions(searchSuggestion))
    }
  };
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <Image style={styles.logo} source={Logo} />
        <View style={styles.iconContainer}>
         
          <Pressable onPress={() => navigation.navigate('Drawer')}>
            <FontAwesome name="align-justify" size={18} color="#3F6065" />
          </Pressable>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <TextInput
          style={{
            height: 40,
            width: '90%',
            borderWidth: 1,
            borderColor: '#ddd',
            paddingLeft: 10,
            color: 'gray',
            justifyContent: 'flex-start',
            fontFamily: 'Montserrat',
            letterSpacing: 0.6,
          }}
          placeholder="I'm shopping for..."
          onChangeText={handleChange}
        />
        <Ionicons
          name="search"
          size={24}
          color="#3F6065"
          style={styles.searchIcon}
        />
      </View>

      {suggestions && suggestions.length > 0 && (
        <View style={styles.suggestionsContainer}>
          <FlatList
            data={suggestions}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => console.log('Selected:', item.title)}>
                <View style={styles.suggestionItem}>
                  <Text>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
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
    backgroundColor: '#3F6065',
  },
});
