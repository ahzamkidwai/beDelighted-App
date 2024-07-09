import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Collapsible from 'react-native-collapsible';
import {useNavigation} from '@react-navigation/native';
import {fetchAllProducts} from '../services/all_products';
import {fetchProductSearchResults} from '../services/search_products';

const ShopScreen = () => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchAllProducts();
      if (productsData) {
        console.log('Fetched Products:', productsData); // Log the fetched products data
        setProducts(productsData);
      }
    };

    getProducts();
  }, []);

  const handleSearch = async () => {
    if (keyword.trim()) {
      const results = await fetchProductSearchResults(keyword);
      if (results) {
        console.log('Search Results:', results); // Log the search results
        setSearchResults(results);
      }
    }
  };

  const categories = [
    {
      title: 'Skincare',
      items: [
        {
          title: 'Cream, Gel & Serum',
          items: [
            'Face oils & Balm',
            'Face moisturizer & day cream',
            'Night Cream',
            'Face Gels',
          ],
        },
        {
          title: 'Masks',
          items: ['Face Masks & Packs', 'Sheet Masks', 'Sleeping Masks'],
        },
        {
          title: 'Eye Care',
          items: [
            'Under Eye Cream, Gel & Serum',
            'Under Eye Roll On',
            'Eye Masks & Patches',
          ],
        },
        {
          title: 'Kits & Combos',
          items: ['Kits & Gift Sets', 'Facial Kits'],
        },
        {
          title: 'Cleansers',
          items: ['Face Scrubs & Exfoilators', 'Face Wash & Cleansers'],
        },
        {
          title: 'Toners',
          items: ['Rose Water', 'Face tonners & Mist'],
        },
      ],
    },
    {
      title: 'Makeup',
      items: [
        {
          title: 'Face',
          items: [
            'BB & CC Cream',
            'Blush',
            'Highlighters',
            'Setting Spray & Fixers',
          ],
        },
        {
          title: 'Eyes',
          items: ['Kajal & Kohls', 'Eyeliner', 'Eye shadow'],
        },
        {
          title: 'Lips',
          items: ['Lip Gloss', 'Lip Liner', 'Lip Plumper & Primers'],
        },
        {
          title: 'Nails',
          items: ['Nail Art', 'Nail Polish', 'Nail Polish Remover'],
        },
        {
          title: 'Tools & Brushes',
          items: ['Brush & Brush Sets', 'Sponge & Applicators', 'Mirrors'],
        },
        {
          title: 'Makeup Kits',
          items: [],
        },
      ],
    },
    {
      title: 'Hair Care',
      items: [
        {
          title: 'Hair Tools & Accessories',
          items: ['Head Massager'],
        },
        {
          title: 'Hair Styling',
          items: [
            'Hair Color',
            'Hair Cream. Packs  Masks',
            'Shampoo',
            'Hair Oil',
            'Hair Serum',
          ],
        },
        {
          title: 'Hair Cream, Packs & Masks',
          items: [],
        },
        {
          title: 'Hair Care Kits & Giftsets',
          items: [],
        },
        {
          title: 'Shampoo',
          items: [],
        },
        {
          title: 'Hair Oil',
          items: [],
        },
        {
          title: 'Hair Serum',
          items: [],
        },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          paddingHorizontal: 10,
          backgroundColor: '#3F6068',
          height: 80,
        }}>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            backgroundColor: 'white',
            marginVertical: 20,
          }}>
          <TextInput
            style={{
              height: 40,
              width: '90%',
              borderWidth: 1,
              borderColor: '#ddd',
              paddingLeft: 20,
              color: '#636363',
              fontFamily: 'Montserrat-Regular',
              letterSpacing: 0.6,
              justifyContent: 'flex-start',
            }}
            placeholder="I'm shopping for..."
            placeholderTextColor={'#636363'}
            onChangeText={text => setKeyword(text)}
            value={keyword}
            onSubmitEditing={handleSearch}
          />
          <TouchableOpacity onPress={handleSearch}>
            <Ionicons
              name="search"
              size={24}
              // color="white"
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      {categories.map((category, index) => (
        <Accordion key={index} title={category.title} items={category.items} />
      ))}
    </ScrollView>
  );
};

const Accordion = ({title, items}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navigation = useNavigation();
  const categoryMap = {
    'Face oils & Balm': 'FaceOilandBalm',
    'Face moisturizer & day cream': 'MoisturizerandDayCream',
    'Night Cream': 'NightCream',
    'Face Gels': 'FaceGel',
    'Face Masks & Packs': 'FaceMaskPack',
    'Sheet Masks': 'SheetMask',
    'Sleeping Masks': 'SleepingMask',
    'Under Eye Cream, Gel & Serum': 'SkinCare',
    'Under Eye Roll On': 'UnderEyeRoll',
    'Eye Masks & Patches': 'EyePatches',
    'BB & CC Cream': 'BBCream',
    Blush: 'Blush',
    Highlighters: 'Highlighters',
    'Setting Spray & Fixers': 'SkinCare',
    'Kajal & Kohls': 'SkinCare',
    Eyeliner: 'SkinCare',
    'Eye shadow': 'SkinCare',
    'Head Massager': 'SkinCare',
    'Hair Color': 'SkinCare',
    'Hair Cream. Packs  Masks': 'SkinCare',
    Shampoo: 'SkinCare',
    'Hair Oil': 'SkinCare',
    'Hair Serum': 'SkinCare',
  };

  const handlePress = item => {
    const screenName = categoryMap[item];
    if (screenName) {
      navigation.navigate(screenName, {category: item});
    }
  };

  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity
        onPress={() => setIsCollapsed(!isCollapsed)}
        style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        <Text style={styles.toggleIcon}>{isCollapsed ? '+' : '-'}</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed} style={{backgroundColor: '#666666'}}>
        <View style={styles.content}>
          {items.map((item, index) =>
            typeof item === 'string' ? (
              <TouchableOpacity
                key={index}
                style={styles.subItem}
                onPress={() => handlePress(item)}>
                <Text style={styles.subItemText}>{item}</Text>
              </TouchableOpacity>
            ) : (
              <Accordion key={index} title={item.title} items={item.items} />
            ),
          )}
        </View>
      </Collapsible>
    </View>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  accordionContainer: {
    // marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 14,
    backgroundColor: '#f1f1f1',
    // borderBottomWidth: 1,
    // borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 16,
    // fontFamily: 'Montserrat',
    letterSpacing: 0.8,
    color: 'black',
    fontWeight: '400',
  },
  toggleIcon: {
    fontSize: 20,
    color: 'black',
  },

  content: {
    padding: 10,
    // backgroundColor: '#f9f9f9',
    backgroundColor: '#f9f9f9',
    color: 'black',
    fontWeight: '300',
  },
  subItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  subItemText: {
    color: '#666666',
  },
  searchIcon: {
    padding: 8,
    color: 'white',
    backgroundColor: 'black',
  },
});
