import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import styleProperties from '../config/styleProperties';
import AppText from './AppText';

interface Props {
  children: string;
  onPress?: () => void;
  style?: object;
}

const AppButton: React.FC<Props> = ({ children, onPress, style }: Props) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <AppText>{children}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styleProperties.primary_highlight_color,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: 'black',
    width: 160,
    height: 50,
  },
});

export default AppButton;
