import React from 'react';
import { StyleSheet, View } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import AppButton from '../components/AppButton';
import InputDropDown from '../components/InputDropDown';
import InputField from '../components/InputField';
import styleProperties from '../config/styleProperties';

interface Props {}

type TransactionType = 'income' | 'expense';

type ValueType = {
  transactionType: TransactionType;
  name: string;
  amount: number;
  category: string;
  scheduled: boolean;
  requiresConfirmation: boolean;
  saveAsTemplate: boolean;
  date: Date;
};

const AddTransactionScreen: React.FC<Props> = () => {
  const [values, setValues] = React.useState<ValueType>({
    transactionType: 'expense',
    name: '',
    amount: 0,
    category: '',
    scheduled: false,
    requiresConfirmation: false,
    saveAsTemplate: false,
    date: new Date(),
  });

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        {/* Expense or Income */}
        <SwitchSelector
          initial={0}
          onPress={(value) => {
            setValues({ ...values, transactionType: value as TransactionType });
          }}
          backgroundColor={styleProperties.primary_highlight_color}
          buttonColor={styleProperties.secondary_background_color}
          borderRadius={20}
          borderColor='black'
          textStyle={styles.text}
          selectedTextStyle={styles.text}
          options={[
            { label: 'expense', value: 'expense' },
            { label: 'income', value: 'income' },
          ]}
        />
        {/* Name */}
        <InputField
          style={styles.childInputField}
          onChangeText={(value) => setValues({ ...values, name: value })}
          placeholder={'Name'}
        />
        {/* Amount */}
        <InputField
          style={styles.childInputField}
          onChangeText={(value) =>
            setValues({ ...values, amount: parseFloat(value) })
          }
          placeholder={'Amount'}
        />
        {/* Category */}
        <InputDropDown
          onSelectItem={(item) =>
            setValues({ ...values, category: item.label ? item.label : '' })
          }
          style={styles.childInputField}
          placeholder={'Category'}
          items={[
            { label: 'test', value: 'test' },
            { label: 'test2', value: 'test2' },
          ]}
          // TODO: enable search #15
          searchable={false}
        />
        {/* Scheduled */}
        {/* TODO: Add scheduled option #13 */}
        {/* <CheckboxComponent
          onPress={(isChecked) =>
            setValues({ ...values, scheduled: isChecked })
          }
          placeholder='scheduled'
          style={styles.childCheckbox}
        /> */}
        {/* Requires Confirmation */}
        {/* TODO: Add require confirmation option #14 */}
        {/* <CheckboxComponent
          onPress={(isChecked) =>
            setValues({ ...values, requiresConfirmation: isChecked })
          }
          placeholder='require confirmation'
          style={styles.childCheckbox}
        /> */}
        {/* Save as Template */}
        {/* TODO: Add save as template option #12  */}
        {/* <CheckboxComponent
          onPress={(isChecked) =>
            setValues({ ...values, saveAsTemplate: isChecked })
          }
          placeholder='save as template'
          style={styles.childCheckbox}
        /> */}
      </View>
      <AppButton
        style={styles.saveButton}
        onPress={() => {
          setValues({ ...values, date: new Date() });
          console.log(values);
        }}
      >
        save
      </AppButton>
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
  switchSelector: {
    height: 50,
    borderWidth: 1,
    borderRadius: 20,

    fontSize: 20,
    backgroundColor: styleProperties.primary_highlight_color,
  },
  text: {
    fontFamily: 'Quicksand',
  },
  selectedText: {
    fontFamily: 'Quicksand',
    color: 'white',
  },
});

export default AddTransactionScreen;
