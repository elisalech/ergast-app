import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';

import {Driver} from '../interfaces';

type DriverScreenProps = {
  route: {
    params: {
      driver: Driver;
    };
  };
  navigation: any;
};

export default function DriverScreen({
  route: {
    params: {driver},
  },
  navigation,
}: DriverScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Name:</Text>
        <Text>{driver.givenName}</Text>
      </View>
      <View style={styles.row}>
        <Text>Second name:</Text>
        <Text>{driver.familyName}</Text>
      </View>
      <View style={styles.row}>
        <Text>Date of birth:</Text>
        <Text>{driver.dateOfBirth}</Text>
      </View>
      <View style={styles.row}>
        <Text>Nationality:</Text>
        <Text>{driver.nationality}</Text>
      </View>
      <View style={styles.row}>
        <Text>Info on wiki:</Text>
        <Text style={styles.link} onPress={() => Linking.openURL(driver.url)}>
          Link
        </Text>
      </View>
      <View style={styles.buttonWrap}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Results', {driverId: driver.driverId});
          }}
          style={styles.resultsButton}>
          <Text style={styles.buttonText}>See race results</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#f8f8f8',
    paddingTop: 15,
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
  resultsButton: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 200,
    height: 40,
    backgroundColor: '#00F',
  },
  buttonText: {
    color: '#FFF',
  },
  buttonWrap: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
