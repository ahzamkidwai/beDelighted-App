import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Collapsible from 'react-native-collapsible';

const CategoryScreen = () => {
  const categories = [
    {
      title: 'Skincare',
      items: ['Cream & Serums', 'Cream & Serums', 'Cream & Serums'],
    },
    {
      title: 'Makeup',
      items: ['Cream & Serums', 'Cream & Serums', 'Cream & Serums'],
    },
    {
      title: 'Haircare',
      items: ['Cream & Serums', 'Cream & Serums', 'Cream & Serums'],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {categories.map((category, index) => (
        <Accordion key={index} title={category.title}>
          {category.items.map((item, subIndex) => (
            <View key={subIndex} style={styles.subItem}>
              <Text>{item}</Text>
            </View>
          ))}
        </Accordion>
      ))}
    </ScrollView>
  );
};

const Accordion = ({title, children}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity
        onPress={() => setIsCollapsed(!isCollapsed)}
        style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        <Text style={styles.toggleIcon}>{isCollapsed ? '+' : '-'}</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.content}>{children}</View>
      </Collapsible>
    </View>
  );
};
export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  accordionContainer: {
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 16,
  },
  toggleIcon: {
    fontSize: 16,
  },
  content: {
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  subItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
