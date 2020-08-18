import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import getDriverResults from '../requests/getDriverResults';
import RaceItem from '../components/RaceItem';
import PagesControls from '../components/PagesControls';
import { RootState } from '../store';
import { decreaseDriversPageNum, increaseDriversPageNum } from '../actions';
import ErrorHandler from '../components/ErrorHandler';

type ResultsScreenProps = {
  route: {
    params: {
      driverId: string;
    };
  };
};

export default function ResultsScreen({
  route: {
    params: { driverId },
  },
}: ResultsScreenProps) {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.races.pageResultsNum);
  const isLoading = useSelector(
    (state: RootState) => state.pageConfig.racesLoading,
  );
  const prevDriverId = useSelector((state: RootState) => state.races.driverId);
  const max = useSelector((state: RootState) => state.races.maxRaces);
  const pageRaces = useSelector(
    (state: RootState) => state.races.list[counter - 1],
  );
  const isError = useSelector((state: RootState) => state.errors.isError);

  useEffect(() => {
    if (!pageRaces || prevDriverId !== driverId) {
      dispatch(getDriverResults(counter, driverId));
    }
  }, [counter, dispatch, pageRaces, driverId, prevDriverId]);

  if (isError) {
    return <ErrorHandler />;
  }

  return (
    <View style={styles.container}>
      <View style={{ display: 'none' }} />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={pageRaces}
          renderItem={({ item }: any) => <RaceItem item={item} />}
          keyExtractor={(item) => item.date}
        />
      )}
      <PagesControls
        handlePrev={() => dispatch(decreaseDriversPageNum())}
        handleNext={() => dispatch(increaseDriversPageNum())}
        counter={counter}
        max={max}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#f8f8f8',
    paddingTop: 15,
    justifyContent: 'space-between',
  },
});
