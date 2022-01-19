import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../components/AppText';
import styleProperties from '../config/styleProperties';
import { Props } from './RootStackParams';

const MainScreen = ({ route, navigation }: Props) => {
  return (
    <SafeAreaView style={styles.screen}>
      <TouchableOpacity
        style={styles.monthDisplay}
        onPress={() => navigation.navigate('Transactions')}
      >
        <AppText>current Month</AppText>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  monthDisplay: {
    position: 'absolute',
    bottom: 40,
    width: '80%',
    height: 180,
    backgroundColor: styleProperties.primary_highlight_color,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: 'black',

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  screen: {
    position: 'relative',
    alignItems: 'center',
    flex: 1,
    backgroundColor: styleProperties.primary_background_color,
  },
});

export default MainScreen;
