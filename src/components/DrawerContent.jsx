import {
  DrawerContentScrollView,
  DrawerItemList,
  StyleSheet,
} from 'react-native';
import React from 'react';

const DrawerContent = () => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
