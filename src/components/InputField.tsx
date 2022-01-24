import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import styleProperties from '../config/styleProperties';

type Props = {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  style?: object;
};

const InputField: React.FC<Props> = ({
  placeholder,
  onChangeText,
  style,
}: Props) => {
  return (
    <View>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        placeholderTextColor={styleProperties.secondary_text_color}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,

    fontSize: 20,
    backgroundColor: styleProperties.primary_highlight_color,
  },
});

export default InputField;
