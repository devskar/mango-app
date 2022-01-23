import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppButton from '../components/AppButton';
import styleProperties from '../config/styleProperties';
import { Props } from './RootStackParams';

const TransactionScreen = ({ route, navigation }: Props) => {
  return (
    <View style={styles.screen}>
      <AppButton
        style={styles.addTransactionButton}
        onPress={() => navigation.navigate('AddTransaction')}
      >
        add Transaction
      </AppButton>
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
    bottom: 50,
    right: 30,
  },
});
export default TransactionScreen;
