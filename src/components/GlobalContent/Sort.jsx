import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';

const Sort = ({setSortOption}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const renderSortOptions = () => (
    <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <TouchableOpacity
        style={styles.modalOverlay}
        onPress={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.modalOption}
            onPress={() => {
              setSortOption('priceLowToHigh');
              setModalVisible(false);
            }}>
            <Text style={styles.modalText}>Price: Low to High</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalOption}
            onPress={() => {
              setSortOption('priceHighToLow');
              setModalVisible(false);
            }}>
            <Text style={styles.modalText}>Price: High to Low</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );

  return (
    <View>
      {renderSortOptions()}
      <TouchableOpacity
        style={styles.sortButton}
        onPress={() => setModalVisible(true)}>
        <Ionicons name="funnel" size={20} color="#333" />
        <Text style={styles.sortButtonText}>Sort by latest</Text>
        <Ionicons name="chevron-down" size={20} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

export default Sort;

const styles = StyleSheet.create({
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sortButtonText: {
    marginHorizontal: 5,
    fontSize: 16,
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: '30%',
    marginRight: 10,
  },
  modalOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  modalText: {
    fontSize: 16,
    color: '#333',
  },
});
