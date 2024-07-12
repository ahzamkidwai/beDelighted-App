import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';

const FAQ = () => {
  const faqData = [
    {
      question: "What is our company about?",
      answer: "We provide top-notch services and products to our customers worldwide."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach us via email at support@example.com or call us at 123-456-7890."
    },
    {
      question: "Where can I find more information?",
      answer: "More information is available on our website under the 'About Us' section."
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [faq,setFaq] = useState(false);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);

  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      
      {faqData.map((faq, index) => (
        <View key={index} style={styles.faqItem}>
          <TouchableOpacity onPress={() => toggleExpand(index)} style={styles.questionButton}>
            <Text style={styles.questionText2}>{expandedIndex === index ? "-" : "+"}</Text>

            <Text style={styles.questionText}>{faq.question}</Text>
          </TouchableOpacity>
          
          {expandedIndex === index && (
            <Text style={styles.answerText}>{faq.answer}</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  faqItem: {
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 5,
    // borderWidth: 1,
    // borderColor: '#ddd',
  },
  questionButton: {
    display:'flex',
    alignItems:'center',
    flexDirection: 'row',
    // backgroundColor: '#e9ecef',
    // gap:'initial',
    padding: 10,
    // borderRadius: 5,
  },
  questionText: {
    fontSize: 18,
    textAlign:'center',
    fontWeight: 'bold',
    color: '#333',
    
  },
  questionText2: {
    fontSize: 30,
    marginRight:12,
    fontWeight: 'bold',
    color: '#333',
  },
  answerText: {
    fontSize: 16,
    color: '#555',
    padding: 10,
    // backgroundColor: '#ffffff',
    marginTop: 5,
    marginLeft: 20,
    // borderRadius: 5,
  },
});

export default FAQ;
