import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';

export default class ElevatedCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.heading}>ElevatedCard</Text>
        <ScrollView horizontal style={styles.Elevated}>
            <View style={styles.card}>
                <Text>Tap</Text>
            </View>
            <View style={styles.card}>
                <Text>To</Text>
            </View>
            <View style={styles.card}>
                <Text>See</Text>
            </View>
            <View style={styles.card}>
                <Text>More...</Text>
            </View>
            <View style={styles.card}>
                <Text>:)</Text>
            </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: 110,
    height: 110,
    margin: 8,
    fontSize: 12,
    backgroundColor:"grey",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  heading: {
    fontSize: 25,
    padding: 3,
    margin: 3,
    fontWeight: 'bold',
  },
  cardHolder: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
  },
  Elevated:{
    padding:5,
    
  }
});
