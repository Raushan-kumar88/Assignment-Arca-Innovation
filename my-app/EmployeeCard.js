import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmployeeCard = ({ employee }) => {
  const { name, email, phone, parentId, backgroundColor } = employee;

  const textColor = backgroundColor === 'black' ? '#fff' : '#000'; // add when background will be black then text will be white

  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>Name: {name}</Text>
      <Text style={[styles.text, { color: textColor }]}>Email: {email}</Text>
      <Text style={[styles.text, { color: textColor }]}>Phone: {phone}</Text>
      <Text style={[styles.text, { color: textColor }]}>Manager: {parentId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    marginRight:30,
    padding: 15,
    width:'380px',
    height:'300px',
    
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 22,
    marginBottom: 10,
  },
});

export default EmployeeCard;
