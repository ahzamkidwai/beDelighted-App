import React from 'react';
import { StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import CartScreen from '../screens/CartScreen';
import ForgotPassword from '../screens/ForgotPassword';
import FragranceDetail from '../components/FragranceDetailScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import DrawerComp from '../components/DrawerComp';
import FAQ from '../components/Account/FAQ';
import ContactUs from '../components/Account/ContactUs';
import GlobalCart from '../components/GlobalContent/GlobalCart';
import SingleCart from '../components/GlobalContent/SingleCart';
import FaceoilandBalmDetail from '../components/ProductCategories/Skincare/CreamJel&Serum/FaceoilandBalmDetail';
import FaceOilandBalm from '../components/ProductCategories/Skincare/CreamJel&Serum/FaceOilandBalm';
import MoisturizerandDayCream from '../components/ProductCategories/Skincare/CreamJel&Serum/MoisturizerandDayCream';
import MoisturizerAndDayCreamDetail from '../components/ProductCategories/Skincare/CreamJel&Serum/MoisturizerAndDayCreamDetail';
import NightCream from '../components/ProductCategories/Skincare/CreamJel&Serum/NightCream';
import NightCreamDetail from '../components/ProductCategories/Skincare/CreamJel&Serum/NightCreamDetail';
import FaceGel from '../components/ProductCategories/Skincare/CreamJel&Serum/FaceGel';
import FaceGelDetail from '../components/ProductCategories/Skincare/CreamJel&Serum/FaceGelDetail';
import FaceMaskPacks from '../components/ProductCategories/Skincare/Masks/FaceMaskPacks';
import FaceMaskPackDetail from '../components/ProductCategories/Skincare/Masks/FaceMaskPackDetail';
import SheetMask from '../components/ProductCategories/Skincare/Masks/SheetMask';
import SheetMaskDetail from '../components/ProductCategories/Skincare/Masks/SheetMaskDetail';
import SleepingMask from '../components/ProductCategories/Skincare/Masks/SleepingMask';
import SleepingMaskDetail from '../components/ProductCategories/Skincare/Masks/SleepingMaskDetail';
import UnderEyeRoll from '../components/ProductCategories/Skincare/EyeCare/UnderEyeRoll';
import UnderEyeRollDetail from '../components/ProductCategories/Skincare/EyeCare/UnderEyeRollDetail';
import EyePatches from '../components/ProductCategories/Skincare/EyeCare/EyePatches';
import EyePatchesDetail from '../components/ProductCategories/Skincare/EyeCare/EyePatchesDetail';
import BBCream from '../components/ProductCategories/Makeup/Face/BBCream';
import BBCreamDetail from '../components/ProductCategories/Makeup/Face/BBCreamDetail';
import Blush from '../components/ProductCategories/Makeup/Face/Blush';
import BlushDetail from '../components/ProductCategories/Makeup/Face/BlushDetail';
import Highlighters from '../components/ProductCategories/Makeup/Face/Highlighters';
import HighlighterDetail from '../components/ProductCategories/Makeup/Face/HighlighterDetail';
import CheckOut from '../screens/CheckOut';
import BottomTabGuest from './BottomTabGuest';
import BottomTabs from './BottomTabs';
import Fixers from '../components/ProductCategories/Makeup/Face/Fixers';
import FixerDetail from '../components/ProductCategories/Makeup/Face/FixerDetail';
import HairTools from '../components/ProductCategories/HairCare/HairTools&Acce/HairTools';
import HairToolDetail from '../components/ProductCategories/HairCare/HairTools&Acce/HairToolDetail';
import HairDyeColor from '../components/ProductCategories/HairCare/HairStyling/HairDyeColor';
import HairDyeDetail from '../components/ProductCategories/HairCare/HairStyling/HairDyeDetail';
import Shampoo from '../components/ProductCategories/HairCare/HairStyling/Shampoo';
import ShampooDetail from '../components/ProductCategories/HairCare/HairStyling/ShampooDetail';
import HairOilSerum from '../components/ProductCategories/HairCare/HairStyling/HairOil&Serum';
import HairOilSerumDetail from '../components/ProductCategories/HairCare/HairStyling/HairOil&SerumDetail';
import Kajal from '../components/ProductCategories/Makeup/Eye/Kajal';
import KajalDetail from '../components/ProductCategories/Makeup/Eye/KajalDetail';
import EyeLiner from '../components/ProductCategories/Makeup/Eye/EyeLiner';
import EyeLinerDetail from '../components/ProductCategories/Makeup/Eye/EyeLinerDetail';
import EyeShadow from '../components/ProductCategories/Makeup/Eye/EyeShadow';
import EyeShadowDetail from '../components/ProductCategories/Makeup/Eye/EyeShadowDetail';
const Stack = createNativeStackNavigator();

// Stack Navigation***************************************************

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false, BottomTabs: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{ headerShown: false, BottomTabs: true }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false, BottomTabs: false }}
        />
        {/* we can attach header here in screen */}
        <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Drawer" component={DrawerComp} />
        {/* <Stack.Screen name="Detail" component={SkinCareDetailScreen} /> */}
        <Stack.Screen name="FaceOilandBalm" component={FaceOilandBalm} />
        <Stack.Screen
          name="FaceoilandBalmDetail"
          component={FaceoilandBalmDetail}
        />
        <Stack.Screen
          name="MoisturizerandDayCream"
          component={MoisturizerandDayCream}
        />
        <Stack.Screen
          name="MoisturizerAndDayCreamDetail"
          component={MoisturizerAndDayCreamDetail}
        />
        <Stack.Screen name="NightCream" component={NightCream} />
        <Stack.Screen name="NightCreamDetail" component={NightCreamDetail} />
        <Stack.Screen name="FaceGel" component={FaceGel} />
        <Stack.Screen name="FaceGelDetail" component={FaceGelDetail} />
        <Stack.Screen name="FaceMaskPack" component={FaceMaskPacks} />
        <Stack.Screen
          name="FaceMaskPackDetail"
          component={FaceMaskPackDetail}
        />
        <Stack.Screen name="SheetMask" component={SheetMask} />
        <Stack.Screen name="SheetMaskDetail" component={SheetMaskDetail} />
        <Stack.Screen name="SleepingMask" component={SleepingMask} />
        <Stack.Screen
          name="SleepingMaskDetail"
          component={SleepingMaskDetail}
        />
        <Stack.Screen name="UnderEyeRoll" component={UnderEyeRoll} />
        <Stack.Screen
          name="UnderEyeRollDetail"
          component={UnderEyeRollDetail}
        />
        <Stack.Screen name="Kajal" component={Kajal} />
        <Stack.Screen name="KajalDetail" component={KajalDetail} />
        <Stack.Screen name="EyeLiner" component={EyeLiner} />
        <Stack.Screen name="EyeLinerDetail" component={EyeLinerDetail} />
        <Stack.Screen name="EyeShadow" component={EyeShadow} />
        <Stack.Screen name="EyeShadowDetail" component={EyeShadowDetail} />

        <Stack.Screen name="EyePatches" component={EyePatches} />
        <Stack.Screen name="EyePatchesDetail" component={EyePatchesDetail} />
        <Stack.Screen name="BBCream" component={BBCream} />
        <Stack.Screen name="BBCreamDetail" component={BBCreamDetail} />
        <Stack.Screen name="Blush" component={Blush} />
        <Stack.Screen name="BlushDetail" component={BlushDetail} />
        <Stack.Screen name="Highlighters" component={Highlighters} />
        <Stack.Screen name="HighlighterDetail" component={HighlighterDetail} />
        <Stack.Screen name="FragranceDetail" component={FragranceDetail} />
        <Stack.Screen name="FAQs" component={FAQ} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="Related Products" component={GlobalCart} />

        <Stack.Screen name="Fixers" component={Fixers} />
        <Stack.Screen name="FixerDetail" component={FixerDetail} />
        <Stack.Screen name="HairTools" component={HairTools} />
        <Stack.Screen name="HairToolDetail" component={HairToolDetail} />
        <Stack.Screen name="HairDyeColor" component={HairDyeColor} />
        <Stack.Screen name="HairDyeDetail" component={HairDyeDetail} />
        <Stack.Screen name="Shampoo" component={Shampoo} />
        <Stack.Screen name="ShampooDetail" component={ShampooDetail} />
        <Stack.Screen name="HairOil & Serum" component={HairOilSerum} />
        <Stack.Screen
          name="Oil & Serum Detail"
          component={HairOilSerumDetail}
        />

        <Stack.Screen
          name="Checkout"
          component={CheckOut}
          options={{ headerShown: true, BottomTabs: true }}
        />
        <Stack.Screen name="SingleCart" component={SingleCart} options={{ headerShown: true, BottomTabs: false }
        }
        />
        {/* <Stack.Screen
          name="SkinCare"
          component={SkinCare} */}
        {/* // options={{headerShown: false}} */}
        {/* /> */}
        {/* <Stack.Screen name="HairCare" component={HairCare} /> */}
        {/* <Stack.Screen name="Fragrance" component={Fragrance} /> */}
        <Stack.Screen
          name="GuestScreen"
          component={BottomTabGuest}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});