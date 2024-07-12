import React, { useEffect } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  ScrollView,
  ImageBackground,
  Button,
  FlatList,
} from 'react-native';
// import Carousel from 'react-native-snap-carousel';
import HomeCarousal from '../components/HomeCarousal';
import HomeHeader from '../components/HomeHeader';
import Banner from '../assets/Banner.jpg';
import HomeDeals from '../components/HomeDeals';
import HomeCategory from '../components/HomeCategory';
import HomeSkinCareCategory from '../components/HomeSkinCareCategory';
import HomeHairCareCategory from '../components/HomeHairCareCategory';
import HomeFragranceCategory from '../components/HomeFragranceCategory';

import { fetchUserProfile } from '../services/user_profile';

const HomeScreen = () => {

  useEffect(() => {
    const getUserProfile = async () => {
        const profileData = await fetchUserProfile();
        if (profileData) {
            console.log('User Profile:', profileData);
        }
    };

    getUserProfile();
}, []);

  return (
    <ScrollView style={styles.container}>
      <HomeHeader />
      <HomeCarousal />
      {/* Banner */}
      <Image source={Banner} style={styles.bannerImage} />
      <HomeDeals />
      {/* Banner2 */}
      <View style={styles.banner2Container}>
        <ImageBackground
          source={{
            uri: 'https://i.pinimg.com/564x/db/d7/a4/dbd7a47b2135572da54e710a567b5114.jpg',
          }}
          style={styles.banner2Image}
          imageStyle={{
            // borderRadius: 4,
            width: '100%',
          }}>
          <View style={styles.buttonContainer}>
            <Button
              title="Click Me"
              onPress={() => alert('Button Pressed!')}
              color="#3F6065"
            />
          </View>
        </ImageBackground>
      </View>
      <HomeCategory />
      <HomeSkinCareCategory />
      <HomeHairCareCategory />
      {/* <HomeFragranceCategory /> */}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bannerImage: {
    width: '97%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 250,
    // borderRadius: 4,
    margin: 5,
  },

  banner2Image: {
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 250,
    // borderRadius: 4,
    margin: 10,
  },
  banner2Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner2Image: {
    width: '95%',
    height: 250,
    borderRadius: 4,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    margin: 20,
  },
  buttonContainer: {
    marginBottom: 10,
    marginLeft: 10,
  },
  buttonContainer: {
    // backgroundColor: '#3F6065',
    borderRadius: 4,
    padding: 5,
    paddingHorizontal: 40,
    paddingBottom: 40,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
});
