import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';

const Filter = ({setFilterOption}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const renderFilterOptions = () => (
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
              setFilterOption([0, 100]);
              setModalVisible(false);
            }}>
            <Text style={styles.modalText}>₹0 - ₹100</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalOption}
            onPress={() => {
              setFilterOption([100, 250]);
              setModalVisible(false);
            }}>
            <Text style={styles.modalText}>₹100 - ₹250</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalOption}
            onPress={() => {
              setFilterOption([250, Infinity]);
              setModalVisible(false);
            }}>
            <Text style={styles.modalText}>₹250 and above</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalOption}
            onPress={() => {
              setFilterOption([0, Infinity]);
              setModalVisible(false);
            }}>
            <Text style={styles.modalText}>All</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );

  return (
    <View>
      {renderFilterOptions()}
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => setModalVisible(true)}>
        <Ionicons name="filter" size={20} color="#333" />
        <Text style={styles.filterButtonText}>Filter</Text>
        <Ionicons name="chevron-down" size={20} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  filterButtonText: {
    marginHorizontal: 5,
    fontSize: 16,
    color: 'black',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: '30%',
    marginLeft: 10,
  },
  modalOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  modalText: {
    fontSize: 16,
    color: 'black',
  },
});
