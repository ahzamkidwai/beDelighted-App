import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DealTimer = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = seconds => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
      {/* <Text style={styles.label}>Deal ends in:</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  timerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#f14805',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 3,
    letterSpacing: 1,
  },
  label: {
    fontSize: 18,
    marginTop: 10,
    color: '#000000',
  },
});

export default DealTimer;
