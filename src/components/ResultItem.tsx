import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import {Result} from '../interfaces';

type Props = {
  result: Result;
};

export default ({result}: Props) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Text>Position:</Text>
      <Text>{result.position}</Text>
    </View>
    <View style={styles.row}>
      <Text>Points:</Text>
      <Text>{result.points}</Text>
    </View>
    <View style={styles.row}>
      <Text>Laps:</Text>
      <Text>{result.laps}</Text>
    </View>
    <View style={styles.row}>
      <Text>Grid:</Text>
      <Text>{result.grid}</Text>
    </View>
    <View style={styles.row}>
      <Text>Status:</Text>
      <Text>{result.status}</Text>
    </View>
    <View style={{...styles.row, borderBottomWidth: 0}}>
      <Text>Constructor:</Text>
      <View style={styles.constructorWrap}>
        <Text>{result.Constructor.nationality}, </Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL(result.Constructor.url)}>
          {result.Constructor.name}
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderColor: '#ffabab',
    borderRadius: 15,
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#000',
    borderBottomWidth: 1,
    height: 50,
    paddingHorizontal: 6,
  },
  link: {
    color: '#00F',
  },
  constructorWrap: {
    flexDirection: 'row',
  },
});
