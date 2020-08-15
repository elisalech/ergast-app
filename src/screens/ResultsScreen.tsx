import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';

import {State} from '../interfaces';
import getDriverResults from '../requests/getDriverResults';
import RaceItem from '../components/RaceItem';
import PagesControls from '../components/PagesControls';
import {
  INCREMENT_RESULTS_PAGE_NUM,
  DECREMENT_RESULTS_PAGE_NUM,
} from '../store/pageConfig/actions';

type ResultsScreenProps = {
  route: {
    params: {
      driverId: string;
    };
  };
};

export default function ResultsScreen({
  route: {
    params: {driverId},
  },
}: ResultsScreenProps) {
  const counter = useSelector(
    (state: State) => state.pageConfig.pageResultsNum,
  );

  const isLoading = useSelector(
    (state: State) => state.pageConfig.racesLoading,
  );
  const prevDriverId = useSelector((state: State) => state.pageConfig.driverId);
  const max = useSelector((state: State) => state.pageConfig.maxRaces);
  const pageRaces = useSelector((state: State) => state.races[counter - 1]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!pageRaces || prevDriverId !== driverId) {
      dispatch(getDriverResults(counter, driverId));
    }
  }, [counter, dispatch, pageRaces, driverId, prevDriverId]);

  return (
    <View style={styles.container}>
      <View style={{display: 'none'}}></View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={pageRaces}
          renderItem={({item}: any) => <RaceItem item={item} />}
          keyExtractor={(item) => item.date}
        />
      )}
      <PagesControls
        handlePrev={() => dispatch({type: DECREMENT_RESULTS_PAGE_NUM})}
        handleNext={() => dispatch({type: INCREMENT_RESULTS_PAGE_NUM})}
        han
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
