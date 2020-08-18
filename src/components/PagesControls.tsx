import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface Props {
  counter: number;
  handlePrev: () => void;
  handleNext: () => void;
  max: number;
}

export default ({ counter, handlePrev, handleNext, max }: Props) => (
  <View style={styles.pagesControlsWrap}>
    <Button title="Prev" onPress={handlePrev} />
    <Text>
      {counter}/{max || 100}
    </Text>
    <Button title="Next" onPress={handleNext} />
  </View>
);

const styles = StyleSheet.create({
  pagesControlsWrap: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
