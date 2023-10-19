import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

export default function Welcome({navigation}) {
  const [things, setThings] = useState([
    { name: "Apelsinjuice", key: "1" },
    { name: "Banansmoothie", key: "2" },
    { name: "Cider", key: "3" },
  ]);

  return (
    <View style={styles.container}>
      <FlatList 
        data={things}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback onPress={() => {navigation.navigate("Details", {things: item.name})}}>
          <Text style={styles.textStyle}>{item.name}</Text>
          </TouchableWithoutFeedback>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    backgroundColor: '#0000ff',
    color: '#ffffff',
    fontSize: 25,
    marginTop: 10,
  }
});
