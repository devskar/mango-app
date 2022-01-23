import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styleProperties from '../config/styleProperties';

interface Props {
  placeholder: string;
  style?: object;
  defaultValue?: boolean;
  onPress?: (isChecked: boolean) => void;
}

const CheckboxComponent: React.FC<Props> = ({
  placeholder,
  style,
  defaultValue,
  onPress,
}: Props) => {
  return (
    <BouncyCheckbox
      style={{ ...styles.input, ...style }}
      size={25}
      unfillColor={styleProperties.primary_highlight_color}
      fillColor={styleProperties.primary_highlight_color}
      bounceFriction={10}
      isChecked={defaultValue}
      text={placeholder}
      iconStyle={styles.icon}
      textStyle={styles.text}
      TouchableComponent={Pressable}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
  },
  text: {
    color: styleProperties.secondary_text_color,
    fontSize: 20,
    textDecorationLine: 'none',
  },
  icon: {
    borderColor: 'black',
    borderRadius: 0,
  },
});
export default CheckboxComponent;
