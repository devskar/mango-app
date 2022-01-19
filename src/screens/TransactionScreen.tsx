import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import AppText from '../components/AppText';
import styleProperties from '../config/styleProperties';
import { Props } from './RootStackParams';

const TransactionScreen = ({ route, navigation }: Props) => {
  return (
    <View style={styles.screen}>
      <TouchableHighlight
        style={styles.addTransactionButton}
        onPress={() => navigation.navigate('Main')}
      >
        <AppText>test</AppText>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: styleProperties.primary_background_color,
    position: 'relative',
  },
  addTransactionButton: {
    position: 'absolute',
    flex: 1,
    width: 162,
    height: 50,
    bottom: 50,
    right: 30,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styleProperties.primary_highlight_color,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: 'black',
  },
});
export default TransactionScreen;
