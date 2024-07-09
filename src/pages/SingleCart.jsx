import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useContext, useState} from 'react';
// import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import GlobalCart from './GlobalCart';
import {AuthContext} from '../context/AuthContext';
import {useNavigation, StackActions, useRoute} from '@react-navigation/native';

const SingleCart = ({route}) => {
  // const SingleCart = ({ productName, productPrice, cashback }) => {
  const img =
    'https://i.pinimg.com/474x/d2/08/74/d208747ef26352b15742c515acbff79a.jpg';
  const [add, setAdd] = useState(0);
  //   const {tokenforUser} = useContext(AuthContext);

  const navigation = useNavigation();
  const Route = useRoute();
  const currentScreen = Route.name;

  const handleNavigate = screen => {
    // navigation.dispatch(StackActions.push(screen));
    navigation.navigate(screen);
  };

  const breadcrumbs = [
    {screen: 'Home', label: 'Home'},
    {screen: '/', label: 'Single Cart'},
  ];

  // const route = useRoute();
  const {item} = route.params || {};
  // console.warn("working hai",item.title)ss
  // console.warn(item);
  if (!item) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Item not found</Text>
      </View>
    );
  }
  const handlePayment = () => {
    /* console.log('handlePayment');
    if (tokenforUser) {
      console.log('handlePayment');
      navigation.navigate('Checkout Page');
      console.warn('handlePayment');
    } else */ {
      navigation.navigate('LoginScreen');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        {breadcrumbs.map((item, index) => (
          <TouchableOpacity
            key={item.screen}
            onPress={() => handleNavigate(item.screen)}
            style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
            <Text
              style={{
                marginRight: 5,
                fontWeight: currentScreen === item.screen ? 'bold' : 'normal',
              }}>
              {item.label}
            </Text>
            {index !== breadcrumbs.length - 1 && <Text>&gt;</Text>}
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.mainContainer}>
        <Image
          source={{uri: item.imageUri || item.url}}
          style={styles.productImage}
        />
        <Text style={styles.productName}>
          {item.title}
          {item.productName}
        </Text>
        {/* <Text style={styles.productPrice}>$500.00{item.price}</Text> */}
        <Text style={styles.productPrice}>{item.productPrice}</Text>
        <Text style={styles.normalText}>Status: In stock</Text>
        <Text style={styles.normalText}>Seller: Admin</Text>
        <Text style={styles.cashback}>{item.cashback}</Text>
        {/* <Text style={styles.cashback}>$4.99 CASHBACK{item.cashback}</Text> */}
        <Text style={styles.normalText}>Color:</Text>
        <Text style={styles.normalTextContent}>r</Text>
        <Text style={styles.Quantity}>Quantity</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => setAdd(add === 0 ? 0 : add - 1)}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.buttonText}>{add}</Text>
          <TouchableOpacity onPress={() => setAdd(add + 1)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer2}
          onPress={() => console.log('Product Added')}>
          <Text style={styles.addToCart} onPress={handlePayment}>
            Add To Cart
          </Text>
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <Text style={styles.icons}>
            <Icon
              name="heart-o"
              size={30}
              color="#3b5998"
              style={styles.socialIcon}
            />
            <Text style={styles.text}>Wishlist</Text>
          </Text>
          <Text style={styles.icons}>
            <Icon
              name="bar-chart"
              size={30}
              color="#3b5998"
              style={styles.socialIcon}
            />
            <Text style={styles.text}>Compare</Text>
          </Text>
        </View>

        <View style={styles.socialIconsContainer}>
          <TouchableOpacity onPress={() => console.log('Facebook clicked')}>
            <FontAwesome5
              name="facebook"
              size={40}
              color="#3b5998"
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('X clicked')}>
            <FontAwesome5
              name="twitter"
              size={40}
              color="#000000"
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Google clicked')}>
            <FontAwesome5
              name="google"
              size={40}
              color="#db4437"
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('LinkedIn clicked')}>
            <FontAwesome5
              name="linkedin"
              size={40}
              color="#0077b5"
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('VK clicked')}>
            <FontAwesome5
              name="vk"
              size={40}
              color="#4c75a3"
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Pinterest clicked')}>
            <FontAwesome5
              name="pinterest"
              size={40}
              color="#bd081c"
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.specificationText}>Specification</Text>
        <Text style={styles.buttonText}>Additional information</Text>
        <View style={styles.buttonContainer3}>
          <Text style={styles.additionalText}>color</Text>
          <Text style={styles.additionalText}>r</Text>
        </View>

        <Text style={styles.buttonTextforReview}>Reviews: (0)</Text>
        <Text style={styles.normalText2}>
          Only logged in customers who have purchased this product may leave a
          review.
        </Text>
        <Text style={styles.normalText2}>There are no reviews yet.</Text>

        <Text style={styles.buttonTextforReview}>
          See It Styled On Instagram
        </Text>

        <Text style={styles.buttonTextforReview}>Related Products</Text>
        <View style={styles.iconContainer}>
          <GlobalCart />
        </View>
      </View>
    </ScrollView>
  );
};

export default SingleCart;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  mainContainer: {
    flex: 1,
    padding: 20,
    borderBlockColor: 'grey',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  socialIcon: {
    margin: 10,
    textAlign: 'center',
    cursor: 'pointer',
    // borderWidth:1
  },
  buttonContainer: {
    width: '100%',
    height: 40,
    borderRadius: 0,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 0,
  },
  buttonContainer2: {
    width: '100%',
    height: 40,
    borderRadius: 0,
    backgroundColor: '#406066',
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  buttonContainer3: {
    width: '100%',
    height: 40,
    borderRadius: 0,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // textAlign: 'center',
    alignItems: 'center',
    marginTop: 22,
    marginBottom: 20,
  },
  additionalText: {
    fontSize: 23,
    textAlign: 'left',
    borderColor: 'grey',
    marginLeft: 8,
    marginRight: 153,
  },

  addToCart: {
    color: 'white',
    fontSize: 25,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 25,
    justifyContent: 'center',
    margin: 35,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // socialIcon: {
  //     marginRight: 10,
  // },
  text: {
    fontSize: 18,
    color: 'dark-grey',
  },
  iconContainer: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  icon: {
    fontSize: 24,
    color: 'black',
    margin: 3,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonTextforReview: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    height: 60,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 23,
  },
  specificationText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    height: 60,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 15,
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  productImage: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginBottom: 30,
    borderColor: 'black',
  },
  productName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    height: 60,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  productPrice: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'black',
  },
  cashback: {
    width: 160,
    textAlign: 'center',
    padding: 5,
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  normalText: {
    fontSize: 20,
    color: 'grey',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  normalText2: {
    fontSize: 15,
    color: 'grey',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  normalTextContent: {
    fontSize: 20,
    color: 'grey',
    fontWeight: 'bold',
    borderRadius: 15,
    borderWidth: 1.5,
    width: 29,
    margin: 3,
    textAlign: 'center',
    marginBottom: 26,
  },
  Quantity: {
    fontSize: 18,
    color: 'grey',
    fontWeight: 'bold',
    marginTop: 2,
    marginBottom: 5,
  },
  icons: {
    fontSize: 18,
    color: 'grey',
    gap: 3,
    fontWeight: 'bold',
    marginTop: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 30,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});
