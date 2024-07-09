import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { CheckBox } from '@rneui/themed';
const AccountSeller = () => {
  const [data, setData] = useState([]);
  const [isSelected , setSelection]  =useState(false)

  useEffect(() => {
   
    setData([]);
  }, []);

  const renderHeader = (item) => (
    <View style={styles.headerRow}>
      <View style={[styles.iconColumn, styles.headerCell]}>
      {/* <CheckBox
          checked={isSelected}
          onPress={()=>setSelection(!isSelected)}
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checkedColor="red"
        /> */}
        
      </View>
      <Text style={[styles.headerCell, styles.textCell]}>Seller Profile</Text>
      <Text style={[styles.headerCell, styles.textCell]}>Seller Name</Text>
      <Text style={[styles.headerCell, styles.textCell]}>Seller Collection</Text>
      <Text style={[styles.headerCell, styles.textCell]}>Action</Text>
    </View>
  );

  const renderEmptyComponent = () => (
    <View style={styles.emptyRow}>
      <Text style={styles.emptyText}>No Data Found</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.container}>
    <View style={styles.iconRow} >
      <Icon name="delete" size={24} />
    </View>
    {renderHeader(item)}
    <FlatList
      data={data}
      ListEmptyComponent={renderEmptyComponent}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
    <View style={styles.footer}>
      <Text style={styles.emptyText}>Showing 0 to 0 of 0 (0 Pages)</Text>
    </View>
  </View>
  );


  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Icon name="delete" size={24} color="grey"/>
      </View>
      {renderHeader()}
      <FlatList
        data={data}
        ListEmptyComponent={renderEmptyComponent}
        renderItem={renderItem} 
        keyExtractor={(item, index) => index.toString()} 
      />    
      <View style={styles.footer}>
        <Text style={styles.emptyText}>Showing 0 to 0 of 0 (0 Pages)</Text>
      </View>
    </View>
  )
}

export default AccountSeller

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 5,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  iconColumn: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
  },
  textCell: {
    textAlign: 'center',
    color:'grey'
  },
  imageCell: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  emptyRow: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: 'grey',
  },
  actionText: {
    color: 'blue',
  },
  footer: {
    marginTop: 10,
    alignItems: 'center',
  },
})