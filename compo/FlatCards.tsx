import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <View>
        <Text style={styles.heading}> FlatCards</Text>
      </View>

      <View style={styles.cardHolder}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={{color: 'white'}}>red</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={{color: 'white'}}>blue</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={{color: 'white'}}>green</Text>
        </View>
      </View>
      
     
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 110,
    height: 110,
    margin: 8,
    fontSize:12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  heading: {
    fontSize: 25,
    padding:3,
    margin:3,
    fontWeight: 'bold',
  },
  cardHolder: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'blue', 
  },
  cardThree: {
    backgroundColor: 'green',
  },
});
