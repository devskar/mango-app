import React from 'react';
import { View } from 'react-native';
import InputField from '../components/InputField';

interface Props {}

const AddTransactionScreen: React.FC<Props> = () => {
  const [testText, onChangeTestText] = React.useState('');

  return (
    <View>
      <InputField onChangeText={onChangeTestText} placeholder={'test'} />
    </View>
  );
};

export default AddTransactionScreen;
