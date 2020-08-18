import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { Driver } from '../interfaces';

type Props = {
  item: Driver;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

export default ({ item, navigation }: Props) => (
  <View style={styles.driverRow}>
    <TouchableOpacity
      style={styles.driverNamesWrap}
      onPress={() => {
        navigation.navigate('Driver', { driver: item });
      }}>
      <Text
        style={
          styles.driverNames
        }>{`${item.givenName} ${item.familyName}`}</Text>
    </TouchableOpacity>
    <Button
      title="results"
      onPress={() => {
        navigation.navigate('Results', { driverId: item.driverId });
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  driverRow: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  driverNamesWrap: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 200,
    height: 50,
  },
  driverNames: {
    fontSize: 16,
  },
});
