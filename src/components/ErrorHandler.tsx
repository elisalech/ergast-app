import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { clearErrorMessage, toggleErrorFalse } from '../actions';

export default () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(
    (state: RootState) => state.errors.errorMessage,
  );

  const handlePress = () => {
    dispatch(clearErrorMessage());
    dispatch(toggleErrorFalse());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>An error occurred!</Text>
      <View>
        {errorMessage && (
          <View style={styles.messageWrap}>
            <Text style={styles.message}>{errorMessage}</Text>
          </View>
        )}
        <Button title="Ok" onPress={handlePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#f8f8f8',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#ff3a3a',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  messageWrap: {
    backgroundColor: '#fff',
    width: 300,
    minHeight: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  message: {
    fontSize: 17,
  },
});
