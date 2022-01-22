import React from 'react';
import { StyleSheet, View } from 'react-native';
import InputDropDown from '../components/InputDropDown';
import InputField from '../components/InputField';
import styleProperties from '../config/styleProperties';

interface Props {}

const AddTransactionScreen: React.FC<Props> = () => {
  const [testText, onChangeTestText] = React.useState('');

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <InputField
          style={styles.inputField}
          onChangeText={onChangeTestText}
          placeholder={'Name'}
        />
        <InputField
          style={styles.inputField}
          onChangeText={onChangeTestText}
          placeholder={'Amount'}
        />
        <InputDropDown style={styles.inputField} placeholder={'Category'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: styleProperties.primary_background_color,
    flex: 1,
  },
  container: {
    borderWidth: 1,
    borderColor: 'red',
    padding: '5%',
  },
  inputField: {
    alignSelf: 'center',
    margin: 10,
  },
});

export default AddTransactionScreen;
