import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppButton from '../components/AppButton';
import CheckboxComponent from '../components/CheckboxComponent';
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
          style={styles.childInputField}
          onChangeText={onChangeTestText}
          placeholder={'Name'}
        />
        <InputField
          style={styles.childInputField}
          onChangeText={onChangeTestText}
          placeholder={'Amount'}
        />
        <InputDropDown
          style={styles.childInputField}
          placeholder={'Category'}
          items={[
            { label: 'test', value: 'test' },
            { label: 'test2', value: 'test2' },
          ]}
          // TODO: enable search
          searchable={false}
        />
        <CheckboxComponent
          placeholder='scheduled'
          style={styles.childCheckbox}
        />
        <CheckboxComponent
          placeholder='require confirmation'
          style={styles.childCheckbox}
        />
        <CheckboxComponent
          placeholder='save as template'
          style={styles.childCheckbox}
        />
      </View>
      <AppButton style={styles.saveButton}>save</AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: styleProperties.primary_background_color,
    flex: 1,
    position: 'relative',
  },
  container: {
    padding: '5%',
  },
  childInputField: {
    alignSelf: 'center',
    margin: 10,
  },
  childCheckbox: {
    alignSelf: 'flex-start',
    margin: 10,
  },
  saveButton: {
    position: 'absolute',
    bottom: 50,
    right: 30,
  },
});

export default AddTransactionScreen;
