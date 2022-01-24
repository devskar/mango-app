import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker, {
  ItemType,
  ValueType,
} from 'react-native-dropdown-picker';
import styleProperties from '../config/styleProperties';

interface Props {
  placeholder?: string;
  style?: object;
  items: ItemType[];
  searchable?: boolean;
}

const InputDropDown: React.FC<Props> = ({
  placeholder,
  style,
  searchable = true,
  items,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<ValueType | null>(null);
  const [dropdownItems, setDropdownItems] = useState(items);

  return (
    <DropDownPicker
      open={open}
      setOpen={setOpen}
      value={value}
      setValue={setValue}
      multiple={false}
      items={dropdownItems}
      searchable={searchable}
      addCustomItem={true}
      searchPlaceholder='Search...'
      placeholder={placeholder}
      style={[style, styles.input]}
      placeholderStyle={styles.placeholder}
      searchTextInputStyle={styles.placeholder}
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
