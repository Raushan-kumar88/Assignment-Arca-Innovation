import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import fetchData from './fetchData';
import EmployeeCard from './EmployeeCard';

export default function App() {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    fetchData()
      .then(data => setEmployeeData(data))
      .catch(error => console.error(error));
  }, []);

  const windowWidth = Dimensions.get('window').width;

  const renderEmployeeCard = ({ item }) => (
    <EmployeeCard employee={item} cardWidth={windowWidth / 3 - 20} />
  );

  return (
    <View style={styles.container}>
    <h1 style={{textAlign:'center',fontSize:'28px',textDecoration:'underline',marginBottom:''}}>All data show from API</h1>
      <FlatList
        data={employeeData}
        renderItem={renderEmployeeCard}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        contentContainerStyle={styles.cardContainer}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#9FE583',
    paddingTop: 30,
    width:'100%',
    flexGrow:'flexGrow'
  },
  cardContainer: {
    alignItems: 'center',
  },
});
