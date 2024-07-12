import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
const BreadCrumbs = ({ routes, onNavigate }) => {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>

        {routes.map((route, index) => (
            
          <View key={index} style={styles.breadcrumbItem}>
            <TouchableOpacity onPress={() => onNavigate(route.path)}>
              <Text style={index < routes.length - 1?styles.breadcrumbText:styles.breadcrumbTextActive}>{route.name}</Text>

            </TouchableOpacity>
            {index < routes.length - 1 && (
              <Icon name="chevron-right" size={15} style={styles.icon} />
            )}
          </View>
        ))
        }
      </View>
    )
}

export default BreadCrumbs

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
      },
      breadcrumbItem: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      breadcrumbText: {
        color: '#000',
        fontSize: 16,
      },
      breadcrumbTextActive: {
        color: 'grey',
        fontSize: 16,
      },
      icon: {
        color: '#7F7F7F',
        marginHorizontal: 5,
      },
})