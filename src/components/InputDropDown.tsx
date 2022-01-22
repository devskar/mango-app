import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker, { ValueType } from 'react-native-dropdown-picker';
import styleProperties from '../config/styleProperties';

interface Props {
  placeholder?: string;
  style?: object;
}

const InputDropDown: React.FC<Props> = ({ placeholder, style }: Props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<ValueType | null>(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ]);

  return (
    <DropDownPicker
      open={open}
      setOpen={setOpen}
      multiple={false}
      items={items}
      placeholder={placeholder}
      value={value}
      setValue={setValue}
      style={{ ...style, ...styles.input }}
      placeholderStyle={styles.placeholder}
      textStyle={styles.text}
      dropDownContainerStyle={styles.dropDownContainer}
    />
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
  placeholder: {
    color: styleProperties.secondary_text_color,
    fontSize: 20,
  },
  text: {
    color: styleProperties.secondary_text_color,
    fontSize: 20,
  },
  dropDownContainer: {
    backgroundColor: styleProperties.primary_highlight_color,
    borderRadius: 20,
  },
});

export default InputDropDown;
