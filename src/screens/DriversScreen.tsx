import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {State} from '../interfaces';
import getDriversByPage from '../requests/getDriversByPage';
import {
  DECREMENT_DRIVERS_PAGE_NUM,
  INCREMENT_DRIVERS_PAGE_NUM,
} from '../store/pageConfig/actions';
import DriverLine from '../components/DriverLine';
import PagesControls from '../components/PagesControls';

export default function DriversScreen({navigation}: any) {
  const counter = useSelector(
    (state: State) => state.pageConfig.pageDriversNum,
  );

  const isLoading = useSelector(
    (state: State) => state.pageConfig.driversLoading,
  );
  const max = useSelector((state: State) => state.pageConfig.maxDrivers);
  const pageDrivers = useSelector((state: State) => state.drivers[counter - 1]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!pageDrivers) {
      dispatch(getDriversByPage(counter));
    }
  }, [counter, dispatch, pageDrivers]);

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
          renderItem={({item}: any) => (
            <DriverLine item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.driverId}
        />
      )}

      <PagesControls
        handlePrev={() => {
          dispatch({type: DECREMENT_DRIVERS_PAGE_NUM});
        }}
        handleNext={() => {
          dispatch({type: INCREMENT_DRIVERS_PAGE_NUM});
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
