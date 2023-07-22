import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatCards from './compo/FlatCards';
import ElevatedCard from './compo/ElevatedCard';
import FancyCard from './compo/FancyCard';

export default function App() {
  return (
    <View>
      <ScrollView>
        <FlatCards />
        <ElevatedCard/>
        <FancyCard/>
        <FancyCard/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
