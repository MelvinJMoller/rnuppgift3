import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function Details({navigation, route}) {
    return (
        <View style={styles.container}> 
              <Text style={styles.textStyle}>{route.params.things}</Text>
          <StatusBar style="auto" />
        </View>
      );
};

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
      fontSize: 50,
      marginTop: 10,
    }
  });