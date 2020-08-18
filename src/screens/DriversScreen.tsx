import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import getDriversByPage from '../requests/getDriversByPage';

import DriverLine from '../components/DriverLine';
import PagesControls from '../components/PagesControls';
import { RootState } from '../store';
import { decreaseDriversPageNum, increaseDriversPageNum } from '../actions';
import ErrorHandler from '../components/ErrorHandler';

export default function DriversScreen({ navigation }: any) {
  const dispatch = useDispatch();
  const counter = useSelector(
    (state: RootState) => state.drivers.pageDriversNum,
  );

  const isLoading = useSelector(
    (state: RootState) => state.pageConfig.driversLoading,
  );
  const max = useSelector((state: RootState) => state.drivers.maxDrivers);
  const pageDrivers = useSelector(
    (state: RootState) => state.drivers.list[counter - 1],
  );

  const isError = useSelector((state: RootState) => state.errors.isError);

  useEffect(() => {
    if (!pageDrivers) {
      dispatch(getDriversByPage(counter));
    }
  }, [counter, dispatch, pageDrivers]);

  if (isError) {
    return <ErrorHandler />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>Race results:</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={pageDrivers}
          renderItem={({ item }: any) => (
            <DriverLine item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.driverId}
        />
      )}

      <PagesControls
        handlePrev={() => {
          dispatch(decreaseDriversPageNum());
        }}
        handleNext={() => {
          dispatch(increaseDriversPageNum());
        }}
        max={max}
        counter={counter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#f8f8f8',
    justifyContent: 'space-between',
  },
  header: {
    height: 55,
    marginLeft: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
  },
});
