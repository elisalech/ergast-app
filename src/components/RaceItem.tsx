import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { Race } from '../interfaces';
import ResultItem from './ResultItem';

type Props = {
  item: Race;
};

export default ({ item }: Props) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Text>Race name:</Text>
      <Text style={styles.link} onPress={() => Linking.openURL(item.url)}>
        {item.raceName}
      </Text>
    </View>
    <View style={styles.row}>
      <Text>Date:</Text>
      <Text>{item.date}</Text>
    </View>
    <View style={styles.row}>
      <Text>Season:</Text>
      <Text>{item.season}</Text>
    </View>
    <View style={styles.row}>
      <Text>Round:</Text>
      <Text>{item.round}</Text>
    </View>
    <View style={styles.results}>
      <Text style={styles.resultsText}>Results:</Text>
      {item.Results.map((res, i) => (
        <ResultItem result={res} key={i} />
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 5,
    borderColor: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#000',
    borderBottomWidth: 1,
    height: 50,
  },
  link: {
    color: '#00F',
  },
  results: {
    marginVertical: 15,
  },
  resultsText: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
