import {
  FlatList,
  StyleSheet,
  View,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useRef, useState, useCallback} from 'react';

const screenWidth = Dimensions.get('window').width;

const CarouselData = [
  {
    collection_image:
      'https://i.pinimg.com/564x/d8/fa/40/d8fa4089f43a0e94b6ccc21f76943fee.jpg',
  },
  {
    collection_image:
      'https://i.pinimg.com/564x/00/8e/9f/008e9f1ea952292a7cf35a9aac54e9f7.jpg',
  },
  {
    collection_image:
      'https://i.pinimg.com/474x/9d/68/12/9d68127587b5e501a32b468b70e25854.jpg',
  },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatlistRef = useRef();

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === CarouselData.length - 1) {
        flatlistRef.current.scrollToIndex({
          animated: true,
          index: 0,
        });
        setActiveIndex(0);
      } else {
        flatlistRef.current.scrollToIndex({
          animated: true,
          index: activeIndex + 1,
        });
        setActiveIndex(activeIndex + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.itemContainer}>
        <Image style={styles.image} source={{uri: item.collection_image}} />
        <View style={styles.dotContainer}>{renderDotIndicator()}</View>
      </View>
    );
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onViewableItemsChanged = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }, []);

  const renderDotIndicator = () => {
    return CarouselData.map((dot, index) => (
      <View
        key={index}
        style={
          index === activeIndex
            ? styles.activedotindicator
            : styles.dotindicator
        }
      />
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={CarouselData}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 20,
  },
  contentContainer: {},
  itemContainer: {
    position: 'relative',
  },
  image: {
    height: 300,
    width: screenWidth,
  },
  dotContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dotindicator: {
    backgroundColor: 'white',
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
  activedotindicator: {
    backgroundColor: '#fcb800',
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
});
